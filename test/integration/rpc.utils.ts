// Based on https://github.com/jdiaz5513/capnp-ts (MIT - Julián Díaz)

import { MessagePort, MessageChannel } from "node:worker_threads";
import { Deferred, Conn } from "src/rpc";
import { Message } from "capnp-es";
import { Message as RPCMessage } from "src/std/rpc";
import { DeferredTransport } from "src/rpc/transport/deferred-transport";

export class TestRPC {
  acceptQueue = new Array<Deferred<Conn>>();
  connections: Record<number, Conn> = {};
  connectQueue = new Array<MessagePort>();

  connect(id = 0): Conn {
    if (this.connections[id] !== undefined) return this.connections[id];
    const ch = new MessageChannel();
    const conn = new Conn(new MessageChannelTransport(ch.port1));
    const accept = this.acceptQueue.pop();
    this.connections[id] = conn;

    if (accept === undefined) {
      this.connectQueue.push(ch.port2);
    } else {
      accept.resolve(new Conn(new MessageChannelTransport(ch.port2)));
    }

    return conn;
  }

  accept(): Promise<Conn> {
    const port2 = this.connectQueue.pop();
    if (port2 !== undefined) {
      return Promise.resolve(new Conn(new MessageChannelTransport(port2)));
    }
    const deferred = new Deferred<Conn>();
    this.acceptQueue.push(deferred);
    return deferred.promise;
  }

  close(): void {
    let i = this.acceptQueue.length;
    while (--i >= 0) {
      this.acceptQueue[i].reject();
    }

    i = this.connectQueue.length;
    while (--i >= 0) {
      this.connectQueue[i].close();
    }

    for (const id in this.connections) {
      this.connections[id].shutdown();
    }

    this.acceptQueue.length = 0;
    this.connectQueue.length = 0;
    this.connections = {};
  }
}

export class MessageChannelTransport extends DeferredTransport {
  constructor(public port: MessagePort) {
    super();
    this.port.on("message", this.resolve);
    this.port.on("messageerror", this.reject);
    this.port.on("close", this.close);
  }

  close = (): void => {
    this.port.off("message", this.resolve);
    this.port.off("messageerror", this.reject);
    this.port.off("close", this.close);
    this.port.close();
    super.close();
  };

  sendMessage(msg: RPCMessage): void {
    const m = new Message();
    m.setRoot(msg);
    const buf = m.toArrayBuffer();
    this.port.postMessage(buf, [buf]);
  }
}
