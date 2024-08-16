// Based on https://github.com/jdiaz5513/capnp-ts (MIT - Julián Díaz)

import { test, assert as t } from "vitest";

import { ObjectSize } from "capnp-es";

test("ObjectSize.toString()", () => {
  t.equal(new ObjectSize(8, 1).toString(), "ObjectSize_dw:1,pc:1");
});
