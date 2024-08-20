// Based on https://github.com/jdiaz5513/capnp-ts (MIT - Julián Díaz and fasterthanlime)
import type { CapabilityID } from "../../rpc/capability";
import type { Client, Server } from "../../rpc";
import type { ObjectSize } from "../object-size";
import type { Segment } from "../segment";
import { format } from "../../util";
import { MAX_DEPTH } from "../../constants";
import { Pointer, PointerType } from "./pointer";
import { getTargetPointerType } from "./pointer.utils";

export type ServerTarget<S extends InterfaceCtor<unknown, Server>> =
  ConstructorParameters<S["Server"]>[0];

export interface InterfaceCtor<C, S extends Server> {
  readonly _capnp: {
    displayName: string;
    id: string;
    size: ObjectSize;
  };
  readonly Client: { new (client: Client): C };

  readonly Server: { new (target: any): S };

  new (segment: Segment, byteOffset: number, depthLimit?: number): Interface;
}

export class Interface extends Pointer {
  static readonly _capnp = {
    displayName: "Interface" as string,
  };
  static readonly getCapID = getCapID;
  static readonly getAsInterface = getAsInterface;
  static readonly isInterface = isInterface;
  static readonly getClient = getClient;

  constructor(segment: Segment, byteOffset: number, depthLimit = MAX_DEPTH) {
    super(segment, byteOffset, depthLimit);
  }

  static fromPointer(p: Pointer): Interface | null {
    return getAsInterface(p);
  }

  getCapId(): CapabilityID {
    return getCapID(this);
  }

  getClient(): Client | null {
    return getClient(this);
  }

  [Symbol.for("nodejs.util.inspect.custom")](): string {
    return format(
      "Interface_%d@%a,%d,limit:%x",
      this.segment.id,
      this.byteOffset,
      this.getCapId(),
      this._capnp.depthLimit,
    );
  }
}

export function getAsInterface(p: Pointer): Interface | null {
  if (getTargetPointerType(p) === PointerType.OTHER) {
    return new Interface(p.segment, p.byteOffset, p._capnp.depthLimit);
  }
  return null;
}

export function isInterface(p: Pointer): boolean {
  return getTargetPointerType(p) === PointerType.OTHER;
}

export function getCapID(i: Interface): CapabilityID {
  if (i.segment.getUint32(i.byteOffset) !== PointerType.OTHER) {
    return -1;
  }
  return i.segment.getUint32(i.byteOffset + 4);
}

export function getClient(i: Interface): Client | null {
  const capID = getCapID(i);
  const { capTable } = i.segment.message._capnp;
  if (!capTable) {
    return null;
  }
  return capTable[capID];
}
