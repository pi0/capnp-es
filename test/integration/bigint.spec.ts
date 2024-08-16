// Based on https://github.com/jdiaz5513/capnp-ts (MIT - Julián Díaz)

import { test, assert as t } from "vitest";
import * as capnp from "capnp-es";

import { BigIntBag } from "../fixtures/bigintbag.ts";

test("64 bit with bigint support", () => {
  const message = new capnp.Message();
  const b = message.initRoot(BigIntBag);
  const unsigned = BigInt("999999");
  const signed = BigInt("-999999");

  t.equal(b.getSigned(), BigInt(0));
  t.equal(b.getUnsigned(), BigInt(0));
  t.equal(b.getDefaultSigned(), BigInt("-987654321987654321"));
  t.equal(b.getDefaultUnsigned(), BigInt("987654321987654321"));

  b.setSigned(signed);
  b.setUnsigned(unsigned);
  b.setDefaultSigned(signed);
  b.setDefaultUnsigned(unsigned);

  t.equal(b.getUnsigned(), unsigned);
  t.equal(b.getSigned(), signed);
  t.equal(b.getDefaultSigned(), signed);
  t.equal(b.getDefaultUnsigned(), unsigned);
});
