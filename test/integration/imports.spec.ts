// Based on https://github.com/jdiaz5513/capnp-ts (MIT - Julián Díaz)

import { test, assert as t } from "vitest";
import * as capnp from "capnp-es";

import { Baz } from "../fixtures/import-bar.ts";
import { Foo } from "../fixtures/import-foo.ts";

test("schema imports", () => {
  t.doesNotThrow(() => {
    new capnp.Message().initRoot(Baz).setBar("bar");
    new capnp.Message().initRoot(Foo).initBaz().setBar("bar");
  });
});
