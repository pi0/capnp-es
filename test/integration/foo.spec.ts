// Based on https://github.com/jdiaz5513/capnp-ts (MIT - Julián Díaz)

import { test } from "vitest";

import * as capnp from "capnp-es";

import { Foo as OldFoo } from "../fixtures/foo.ts";
import { Foo as NewFoo } from "../fixtures/foo-new.ts";

test("foo regression", () => {
  const oldMessage = new capnp.Message();
  const oldFoo = oldMessage.initRoot(OldFoo);

  oldFoo.bar = "bar";

  const packed = Buffer.from(oldMessage.toPackedArrayBuffer());

  const newMessage = new capnp.Message(packed);
  newMessage.getRoot(NewFoo);
});
