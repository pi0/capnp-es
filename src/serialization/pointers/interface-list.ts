// Based on https://github.com/jdiaz5513/capnp-ts (MIT - Julián Díaz)

import { Interface } from "./interface";
import { type ListCtor } from "./list";
import { PointerList } from "./pointer-list";

export const InterfaceList: ListCtor<Interface> = PointerList(Interface);
