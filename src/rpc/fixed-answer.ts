// Based on https://github.com/jdiaz5513/capnp-ts (MIT - Julián Díaz)

import { Struct } from "../serialization/pointers/struct";
import { Answer } from "./answer";
import { PipelineOp } from "./pipeline-op";
import { Call } from "./call";

export abstract class FixedAnswer<R extends Struct> implements Answer<R> {
  abstract structSync(): R;

  struct(): Promise<R> {
    return Promise.resolve(this.structSync());
  }

  abstract pipelineCall<CallParams extends Struct, CallResults extends Struct>(
    transform: PipelineOp[],
    call: Call<CallParams, CallResults>,
  ): Answer<CallResults>;
  abstract pipelineClose(transform: PipelineOp[]): void;
}
