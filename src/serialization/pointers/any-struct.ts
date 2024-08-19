// Based on https://github.com/jdiaz5513/capnp-ts (MIT - Julián Díaz)

import { ObjectSize } from "../object-size";
import { Struct } from "./struct";

export class AnyStruct extends Struct {
  static readonly _capnp = {
    displayName: "AnyStruct",
    id: "0",
    size: new ObjectSize(0, 0),
  };
}
