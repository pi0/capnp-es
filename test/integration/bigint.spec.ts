// Based on https://github.com/jdiaz5513/capnp-ts (MIT - Julián Díaz)

import { test, assert as t } from "vitest";
import * as capnp from "capnp-es";

import { BigIntBag } from "../fixtures/bigintbag.ts";

test("64 bit with bigint support", () => {
  const message = new capnp.Message();
  const b = message.initRoot(BigIntBag);
  const unsigned = BigInt("999999");
  const signed = BigInt("-999999");

  t.equal(b.signed, BigInt(0));
  t.equal(b.unsigned, BigInt(0));
  t.equal(b.defaultSigned, BigInt("-987654321987654321"));
  t.equal(b.defaultUnsigned, BigInt("987654321987654321"));

  b.signed = signed;
  b.unsigned = unsigned;
  b.defaultSigned = signed;
  b.defaultUnsigned = unsigned;

  t.equal(b.unsigned, unsigned);
  t.equal(b.signed, signed);
  t.equal(b.defaultSigned, signed);
  t.equal(b.defaultUnsigned, unsigned);
});
