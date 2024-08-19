// Based on https://github.com/jdiaz5513/capnp-ts (MIT - Julián Díaz)

import { Client } from "./client";
import { Struct } from "../serialization/pointers/struct";
import { Call } from "./call";
import { Answer } from "./answer";
import { ErrorClient } from "./error-client";
import { RPC_ZERO_REF } from "../errors";
import { Ref } from "./ref";
import { Finalize } from "./finalize";

/**
 * A RefCount will close its underlying client once all its references are
 * closed.
 */
export class RefCount implements Client {
  refs: number;
  finalize: Finalize;
  _client: Client;

  private constructor(c: Client, _finalize: Finalize) {
    this._client = c;
    this.finalize = _finalize;
    this.refs = 1;
  }

  // New creates a reference counter and the first client reference.
  static new(c: Client, finalize: Finalize): [RefCount, Ref] {
    const rc = new RefCount(c, finalize);
    const ref = rc.newRef();
    return [rc, ref];
  }

  call<P extends Struct, R extends Struct>(cl: Call<P, R>): Answer<R> {
    return this._client.call(cl);
  }

  client(): Client {
    return this._client;
  }

  close(): void {
    this._client.close();
  }

  ref(): Client {
    if (this.refs <= 0) {
      return new ErrorClient(new Error(RPC_ZERO_REF));
    }
    this.refs++;
    return this.newRef();
  }

  newRef(): Ref {
    return new Ref(this, this.finalize);
  }

  decref(): void {
    this.refs--;
    if (this.refs === 0) {
      this._client.close();
    }
  }
}
