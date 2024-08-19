// Based on https://github.com/jdiaz5513/capnp-ts (MIT - Julián Díaz)

import { AnswerEntry, Answer } from "./answer";
import { PipelineOp } from "./pipeline-op";
import { Struct } from "../serialization/pointers/struct";
import { Call } from "./call";
import { Fulfiller } from "./fulfiller/fulfiller";
import { Client, clientFromResolution } from "./client";
import { NOT_IMPLEMENTED } from "../errors";

/**
 * A localAnswerClient is used to provide a pipelined client of an answer.
 */
export class LocalAnswerClient<T extends Struct> implements Client {
  a: AnswerEntry<T>;
  transform: PipelineOp[];

  constructor(a: AnswerEntry<T>, transform: PipelineOp[]) {
    this.a = a;
    this.transform = transform;
  }

  call<P extends Struct, R extends Struct>(call: Call<P, R>): Answer<R> {
    if (this.a.done) {
      return clientFromResolution(this.transform, this.a.obj, this.a.err).call(
        call,
      );
    }
    const f = new Fulfiller<R>();
    return f;
  }

  close(): void {
    // TODO: unstub
    throw new Error(NOT_IMPLEMENTED);
  }
}
