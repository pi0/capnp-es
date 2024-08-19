// Based on https://github.com/jdiaz5513/capnp-ts (MIT - Julián Díaz)

import { Pointer } from "../serialization/pointers/pointer";
import { Struct } from "../serialization/pointers/struct";
import { pointerToStruct } from "./pointer-to-struct";
import { PipelineOp } from "./pipeline-op";

// transformPtr applies a sequence of pipeline operations to a pointer
// and returns the result.
export function transformPtr(p: Pointer, transform: PipelineOp[]): Pointer {
  if (transform.length === 0) {
    return p;
  }
  let s = pointerToStruct(p);
  if (!s) {
    return p;
  }

  for (const op of transform) {
    s = Struct.getPointer(op.field, s);
  }

  return s;
}
