// Based on https://github.com/jdiaz5513/capnp-ts (MIT - Julián Díaz)

import { RPCMessage } from "../rpc-message";

export * from "./deferred-transport";

export interface Transport {
  sendMessage(msg: RPCMessage): void;
  recvMessage(): Promise<RPCMessage>;
  close(): void;
}
