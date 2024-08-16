// Based on https://github.com/jdiaz5513/capnp-ts (MIT - Julián Díaz)

import { test, assert as t } from "vitest";
import * as capnp from "capnp-es";
import { CodeGeneratorRequest } from "capnp-es/std/schema";
import { compareBuffers, readFileBuffer } from "test/utils";

const SCHEMA_MESSAGE = readFileBuffer("test/fixtures/data/schema.bin");

const SCHEMA_FILE_ID = BigInt("0xa93fc509624c72d9");

test("schema roundtrip", () => {
  const message = new capnp.Message(SCHEMA_MESSAGE, false);
  const req = message.getRoot(CodeGeneratorRequest);

  // t.type(req, CodeGeneratorRequest);

  const capnpVersion = req.getCapnpVersion();

  t.equal(capnpVersion.getMajor(), 0);
  t.equal(capnpVersion.getMinor(), 6);
  t.equal(capnpVersion.getMicro(), 0);

  const requestedFiles = req.getRequestedFiles();

  t.equal(requestedFiles.getLength(), 1);

  const requestedFile = requestedFiles.get(0);
  const filename = requestedFile.getFilename();

  t.equal(filename, "packages/capnp-ts/src/std/schema.capnp");

  const requestedFileId = requestedFile.getId();

  t.equal(requestedFileId, SCHEMA_FILE_ID);

  const out = message.toArrayBuffer();

  compareBuffers(out, SCHEMA_MESSAGE);
});
