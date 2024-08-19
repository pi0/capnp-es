// Based on https://github.com/jdiaz5513/capnp-ts (MIT - Julián Díaz)

import ts from "typescript";
import * as s from "../std/schema";

export class CodeGeneratorFileContext {
  concreteLists: Array<[string, s.Field]>;
  file: s.CodeGeneratorRequest_RequestedFile;
  generatedNodeIds: string[];
  imports: s.CodeGeneratorRequest_RequestedFile_Import[];
  nodes: s.Node[];
  req: s.CodeGeneratorRequest;
  statements: ts.Statement[];
  tsPath: string;

  constructor(
    req: s.CodeGeneratorRequest,
    file: s.CodeGeneratorRequest_RequestedFile,
  ) {
    this.req = req;
    this.file = file;
    this.nodes = req.nodes.toArray();
    this.concreteLists = [];
    this.generatedNodeIds = [];
    this.statements = [];
    this.tsPath = "";
    this.imports = file.imports.toArray();
  }

  toString(): string {
    return this.file ? this.file.filename : "CodeGeneratorFileContext()";
  }
}
