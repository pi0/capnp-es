// Based on https://github.com/jdiaz5513/capnp-ts (MIT - Julián Díaz)

import {
  Pointer,
  getTargetPointerType,
} from "../serialization/pointers/pointer";
import { Struct } from "../serialization/pointers/struct";
import { PointerType } from "../serialization/pointers/pointer";

// TODO: this was ported from the Go codebase, is it really needed?
export function pointerToStruct(p: Pointer): Struct | null {
  if (getTargetPointerType(p) === PointerType.STRUCT) {
    return new Struct(
      p.segment,
      p.byteOffset,
      p._capnp.depthLimit,
      p._capnp.compositeIndex,
    );
  }
  return null;
}
