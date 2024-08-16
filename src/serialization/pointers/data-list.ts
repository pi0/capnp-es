// Based on https://github.com/jdiaz5513/capnp-ts (MIT - Julián Díaz)

import { Data } from "./data";
import { type ListCtor } from "./list";
import { PointerList } from "./pointer-list";

export const DataList: ListCtor<Data> = PointerList(Data);
