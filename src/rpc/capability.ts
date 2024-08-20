// Based on https://github.com/jdiaz5513/capnp-ts (MIT - Julián Díaz)

import { Message as RPCMessage } from "../capnp/rpc";
import { Message } from "../serialization/message";
import { Return, Exception, Disembargo_Context_Which } from "../capnp/rpc";
import { toException } from "./rpc-error";
import { INVARIANT_UNREACHABLE_CODE } from "../errors";

// A CapabilityID is an index into a message's capability table.
export type CapabilityID = number;

export function newMessage(): RPCMessage {
  return new Message().initRoot(RPCMessage);
}

export function newFinishMessage(
  questionID: number,
  release: boolean,
): RPCMessage {
  const m = newMessage();
  const f = m.initFinish();
  f.questionId = questionID;
  f.releaseResultCaps = release;
  return m;
}

export function newUnimplementedMessage(m: RPCMessage): RPCMessage {
  const n = newMessage();
  n.unimplemented = m;
  return n;
}

export function newReturnMessage(id: number): RPCMessage {
  const m = newMessage();
  const ret = m.initReturn();
  ret.answerId = id;
  return m;
}

export function setReturnException(ret: Return, err: Error): Exception {
  const exc = ret.initException();
  toException(exc, err);
  return exc;
}

export function newDisembargoMessage(
  which: Disembargo_Context_Which,
  id: number,
): RPCMessage {
  const m = newMessage();
  const dis = m.initDisembargo();
  const ctx = dis.initContext();
  switch (which) {
    case Disembargo_Context_Which.SENDER_LOOPBACK: {
      ctx.senderLoopback = id;
      break;
    }
    case Disembargo_Context_Which.RECEIVER_LOOPBACK: {
      ctx.receiverLoopback = id;
      break;
    }
    default: {
      throw new Error(INVARIANT_UNREACHABLE_CODE);
    }
  }
  return m;
}
