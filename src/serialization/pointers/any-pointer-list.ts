// Based on https://github.com/jdiaz5513/capnp-ts (MIT - Julián Díaz)

import type { ListCtor } from "./list";
import { Pointer } from "./pointer";
import { PointerList } from "./pointer-list";

export const AnyPointerList: ListCtor<Pointer> = PointerList(Pointer);
