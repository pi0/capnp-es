// Based on https://github.com/jdiaz5513/capnp-ts (MIT - Julián Díaz)

import ts from "typescript";
import * as s from "../capnp/schema.ts";
import { Message } from "../serialization/message.ts";
import * as E from "./errors";
import { CodeGeneratorContext } from "./code-generator-context";
import { CodeGeneratorFileContext } from "./code-generator-file-context";
import { SOURCE_COMMENT } from "./constants";
import { loadRequestedFile, lookupNode } from "./file";
import {
  generateCapnpImport,
  generateConcreteListInitializer,
  generateFileId,
  generateNode,
  generateNestedImports,
} from "./generators";

export async function compileAll(
  buff: Buffer,
  opts?: {
    ts?: boolean;
    js?: boolean;
    dts?: boolean;
    tsconfig?: ts.CompilerOptions;
  },
): Promise<{ ctx: CodeGeneratorContext; files: Map<string, string> }> {
  // Load requested files into context
  const req = new Message(buff, false).getRoot(s.CodeGeneratorRequest);
  const ctx = new CodeGeneratorContext();
  ctx.files = req.requestedFiles.map((file) => loadRequestedFile(req, file));

  // Compile files in memory
  const files = new Map<string, string>(
    ctx.files.map((f) => [f.tsPath, compileFile(f)]),
  );

  // Transpile .d.ts and .js files
  if (opts?.js || opts?.dts) {
    tsCompile(files, opts?.tsconfig, opts?.dts);
  }

  // Remove .ts entries if ts option was not set
  if (!opts?.ts) {
    for (const [fileName] of files) {
      if (fileName.endsWith(".ts")) {
        files.delete(fileName);
      }
    }
  }

  return {
    ctx,
    files,
  };
}

export function compileFile(ctx: CodeGeneratorFileContext): string {
  generateCapnpImport(ctx);
  generateNestedImports(ctx);
  generateFileId(ctx);

  for (const n of lookupNode(ctx, ctx.file).nestedNodes.map((n) =>
    lookupNode(ctx, n),
  ))
    generateNode(ctx, n);

  for (const [fullClassName, field] of ctx.concreteLists)
    generateConcreteListInitializer(ctx, fullClassName, field);

  const sourceFile = ts.createSourceFile(
    ctx.tsPath,
    "",
    ts.ScriptTarget.Latest,
    false,
    ts.ScriptKind.TS,
  );
  const printer = ts.createPrinter();
  const source =
    ctx.statements
      .map((s) => printer.printNode(ts.EmitHint.Unspecified, s, sourceFile))
      .join("\n") + "\n";

  return SOURCE_COMMENT + source;
}

export function printSourceFiles(ctx: CodeGeneratorContext): string[] {
  return ctx.files.map((ctx) => compileFile(ctx));
}

function tsCompile(
  files: Map<string, string>,
  tsconfig?: ts.CompilerOptions,
  declaration?: boolean,
): void {
  const compileOptions: ts.CompilerOptions = {
    noEmit: false,
    declaration: declaration ?? false,
    moduleResolution: ts.ModuleResolutionKind.Bundler,
    target: ts.ScriptTarget.ESNext,
    noEmitOnError: false,
    noFallthroughCasesInSwitch: true,
    preserveConstEnums: true,
    noImplicitReturns: true,
    noUnusedLocals: false,
    noUnusedParameters: false,
    removeComments: false,
    skipLibCheck: true,
    sourceMap: false,
    strict: true,
    ...tsconfig,
  };

  const compilerHost = ts.createCompilerHost(compileOptions);
  compilerHost.writeFile = (fileName: string, declaration: string) => {
    files.set(fileName, declaration);
  };
  const _readFile = compilerHost.readFile;
  compilerHost.readFile = (filename) => {
    if (files.has(filename)) {
      return files.get(filename);
    }
    return _readFile(filename);
  };

  const program = ts.createProgram(
    [...files.keys()],
    compileOptions,
    compilerHost,
  );

  const emitResult = program.emit();

  const allDiagnostics = [
    ...ts.getPreEmitDiagnostics(program),
    ...emitResult.diagnostics,
  ];
  if (allDiagnostics.length > 0) {
    for (const diagnostic of allDiagnostics) {
      const message = ts.flattenDiagnosticMessageText(
        diagnostic.messageText,
        "\n",
      );
      if (diagnostic.file && diagnostic.start) {
        const { line, character } =
          diagnostic.file.getLineAndCharacterOfPosition(diagnostic.start);
        console.log(
          `${diagnostic.file.fileName}:${line + 1}:${character + 1} ${message}`,
        );
      } else {
        console.log(`==> ${message}`);
      }
    }
    throw new Error(E.GEN_TS_EMIT_FAILED);
  }
}
