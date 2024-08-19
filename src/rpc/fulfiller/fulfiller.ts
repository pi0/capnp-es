// Based on https://github.com/jdiaz5513/capnp-ts (MIT - Julián Díaz)

import { Struct } from "../../serialization/pointers/struct";
import { Answer } from "../../rpc/answer";
import { Deferred } from "../deferred";
import { ImmediateAnswer } from "../immediate-answer";
import { EmbargoClient } from "./embargo-client";
import { Ecalls, pcall } from "./ecalls";
import { Call, copyCall } from "../call";
import { PipelineOp } from "../pipeline-op";
import {
  RPC_CALL_QUEUE_FULL,
  RPC_NULL_CLIENT,
  INVARIANT_UNREACHABLE_CODE,
} from "../../errors";
import { Pointer } from "../../serialization/pointers/pointer";
import { transformPtr } from "../transform-ptr";
import { ErrorAnswer } from "../error-answer";
import { Interface } from "../../serialization/pointers/interface";

const callQueueSize = 64;

// Fulfiller is a promise for a Struct. It starts out
// as an unresolved answer. A Fulfiller is considered to be resolved
// once fulfill or reject is called. Calls to the fulfiller will queue
// up until it is resolved.
export class Fulfiller<R extends Struct> implements Answer<R> {
  resolved = false;
  answer?: Answer<R>;
  queue: pcall[] = [];
  queueCap = callQueueSize;
  deferred = new Deferred<R>();

  fulfill(s: R): void {
    this.answer = new ImmediateAnswer(s);
    const queues = this.emptyQueue(s);
    const msgcap = s.segment.message._capnp;
    if (!msgcap.capTable) {
      msgcap.capTable = [];
    }
    const ctab = msgcap.capTable;

    for (const _capIdx of Object.keys(queues)) {
      const capIdx = +_capIdx;
      const q = queues[capIdx];
      const client = ctab[capIdx];
      if (!client) {
        throw new Error(INVARIANT_UNREACHABLE_CODE);
      }
      ctab[capIdx] = new EmbargoClient(client, q);
    }
    this.deferred.resolve(s);
  }

  reject(err: Error): void {
    this.deferred.reject(err);
  }

  peek(): Answer<R> | undefined {
    return this.answer;
  }

  async struct(): Promise<R> {
    return await this.deferred.promise;
  }

  // pipelineCall calls pipelineCall on the fulfilled answer or
  // queues the call if f has not been fulfilled
  pipelineCall<CallParams extends Struct, CallResults extends Struct>(
    transform: PipelineOp[],
    call: Call<CallParams, CallResults>,
  ): Answer<CallResults> {
    // Fast path: pass-through after fulfilled
    {
      const a = this.peek();
      if (a) {
        return a.pipelineCall(transform, call);
      }
    }

    if (this.queue.length === this.queueCap) {
      return new ErrorAnswer(new Error(RPC_CALL_QUEUE_FULL));
    }
    const cc = copyCall(call);
    const g = new Fulfiller<CallResults>();
    this.queue.push({
      call: cc,
      f: g,
      transform,
    });
    return g;
  }

  // pipelineClose waits until f is resolved and then calls
  // pipelineClose on the fulfilled answer
  // FIXME: should this be async?
  pipelineClose(transform: PipelineOp[]): void {
    const onFinally = () => {
      if (this.answer) {
        this.answer.pipelineClose(transform);
      }
    };
    this.deferred.promise.then(onFinally, onFinally);
  }

  // emptyQueue splits the queue by which capability it targets and
  // drops any invalid calls.  Once this function returns, f.queue will
  // be nil.
  emptyQueue(s: Struct): Record<number, Ecalls> {
    const qs: { [key: number]: Ecalls } = {};
    for (let i = 0; i < this.queue.length; i++) {
      const pc = this.queue[i];
      let c: Pointer;
      try {
        c = transformPtr(s, pc.transform);
      } catch (error_) {
        pc.f.reject(error_ as Error);
        continue;
      }
      const iface = Interface.fromPointer(c);
      if (!iface) {
        pc.f.reject(new Error(RPC_NULL_CLIENT));
        continue;
      }
      const cn = iface.getCapId();
      if (!qs[cn]) {
        qs[cn] = new Ecalls([]);
      }
      qs[cn].data.push(pc);
    }
    this.queue = [];
    return qs;
  }
}
