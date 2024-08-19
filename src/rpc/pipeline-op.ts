// Based on https://github.com/jdiaz5513/capnp-ts (MIT - Julián Díaz)

import { Pointer } from "../serialization/pointers/pointer";

// A PipelineOp describes a step in transforming a pipeline.
// It maps closely with the PromisedAnswer.Op struct in rpc.capnp.
export interface PipelineOp {
  field: number;
  defaultValue?: Pointer;
}
