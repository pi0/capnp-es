import { test, expect } from "vitest";
import ts from "typescript";
import * as capnp from "capnp-es";
import * as Schema from "src/std/schema.ts";
import { createValueExpression } from "src/compiler/ast-creators";
import { readFileBuffer } from "./utils";

const TEST_REQUEST = readFileBuffer("test/fixtures/data/test-request.bin");

test("compiler:ast-creators:createValueExpression", () => {
  const m = new capnp.Message(TEST_REQUEST, false);

  // Find a node with a default pointer value to play around with.
  const node = m
    .getRoot(Schema.CodeGeneratorRequest)
    .nodes.find((n) => n.displayName.split(":")[1] === "TestDefaults");

  expect(node).toBeDefined();

  const value = node!.struct.fields.get(29).slot.defaultValue;
  const printer = ts.createPrinter();
  const sourceFile = ts.createSourceFile("", "", ts.ScriptTarget.ES2017);

  expect(
    printer.printNode(
      ts.EmitHint.Expression,
      createValueExpression(value),
      sourceFile,
    ),
  ).toBe(
    "$.readRawPointer(new Uint8Array([0x10, 0x07, 0x11, 0x01, 0x1e, 0x11, 0x09, 0x32, 0x11, 0x09, 0x32, " +
      "0x11, 0x09, 0x2a, 0x1f, 0x70, 0x6c, 0x75, 0x67, 0x68, 0x1f, 0x78, 0x79, 0x7a, 0x7a, 0x79, 0x0f, 0x74, 0x68, " +
      "0x75, 0x64]).buffer)",
  );
});
