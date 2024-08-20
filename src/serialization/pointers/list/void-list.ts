// Based on https://github.com/jdiaz5513/capnp-ts (MIT - Julián Díaz)
// Why would anyone **SANE** ever use this!?

import { type ListCtor } from "./list";
import { PointerList } from "./pointer-list";
import { Void } from "../void";

export const VoidList: ListCtor<Void> = PointerList(Void);
