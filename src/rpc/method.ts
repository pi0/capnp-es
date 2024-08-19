// Based on https://github.com/jdiaz5513/capnp-ts (MIT - Julián Díaz)

import { Struct, StructCtor } from "../serialization/pointers/struct";

// A Method identifies a method along with an optional
// human-readable description of the method
export interface Method<P extends Struct, R extends Struct> {
  interfaceId: bigint;
  methodId: number;

  // Canonical name of the interface. May be empty.
  interfaceName?: string;
  // Method name as it appears in the schema. May be empty.
  methodName?: string;

  ParamsClass: StructCtor<P>;
  ResultsClass: StructCtor<R>;
}
