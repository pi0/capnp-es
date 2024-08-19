// Based on https://github.com/jdiaz5513/capnp-ts (MIT - Julián Díaz)

import { Client } from "../client";
import { Queue } from "../queue";
import { Ecalls, ecallSlot } from "./ecalls";
import { Struct } from "../../serialization/pointers/struct";
import { Fulfiller } from "./fulfiller";
import { Answer } from "../answer";
import { Call, copyCall } from "../call";
import {
  RPC_CALL_QUEUE_FULL,
  RPC_QUEUE_CALL_CANCEL,
  INVARIANT_UNREACHABLE_CODE,
} from "../../errors";
import { ErrorAnswer } from "../error-answer";

export class EmbargoClient implements Client {
  _client: Client;

  q: Queue;
  calls: Ecalls;

  constructor(client: Client, queue: Ecalls) {
    this._client = client;
    this.calls = queue.copy();
    this.q = new Queue(this.calls, this.calls.len());
    this.flushQueue();
  }

  flushQueue(): void {
    let c: ecallSlot = null;
    {
      const i = this.q.front();
      if (i !== -1) {
        c = this.calls.data[i];
      }
    }

    while (c && c.call) {
      const ans = this._client.call(c.call);
      void (async <R extends Struct>(f: Fulfiller<R>, ans: Answer<R>) => {
        try {
          f.fulfill(await ans.struct());
        } catch (error_) {
          f.reject(error_ as Error);
        }
      })(c.f, ans);
      this.q.pop();
      {
        const i = this.q.front();
        c = i === -1 ? null : this.calls.data[i];
      }
    }
  }

  // client returns the underlying client if the embargo has
  // been lifted and null otherwise
  client(): Client | null {
    return this.isPassthrough() ? this._client : null;
  }

  isPassthrough(): boolean {
    return this.q.len() === 0;
  }

  // call either queues a call to the underlying client or starts a
  // call if the embargo has been lifted
  call<P extends Struct, R extends Struct>(call: Call<P, R>): Answer<R> {
    // Fast path: queue is flushed
    if (this.isPassthrough()) {
      return this._client.call(call);
    }

    // Add to queue
    return this.push(call);
  }

  push<P extends Struct, R extends Struct>(_call: Call<P, R>): Answer<R> {
    const f = new Fulfiller<R>();
    const call = copyCall(_call);
    const i = this.q.push();
    if (i === -1) {
      return new ErrorAnswer(new Error(RPC_CALL_QUEUE_FULL));
    }
    this.calls.data[i] = {
      call,
      f,
    };
    return f;
  }

  close(): void {
    // reject all queued calls
    while (this.q.len() > 0) {
      const first = this.calls.data[this.q.front()];
      if (!first) {
        throw new Error(INVARIANT_UNREACHABLE_CODE);
      }
      first.f.reject(new Error(RPC_QUEUE_CALL_CANCEL));
      this.q.pop();
    }
    this._client.close();
  }
}
