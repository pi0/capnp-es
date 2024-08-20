// Based on https://github.com/jdiaz5513/capnp-ts (MIT - Julián Díaz)

// This file was historically written by hand and keyboard to bootstrap compiler development.

import * as capnp from "../../serialization";

export const _capnpFileId = "a184c7885cdaf2a1";

export enum Side {
  SERVER,
  CLIENT,
}

export class VatId extends capnp.Struct {
  static readonly _capnp = {
    displayName: "VatId",
    id: "d20b909fee733a8e",
    size: new capnp.ObjectSize(8, 0),
  };
  getSide(): Side {
    return capnp.Struct.getUint16(0, this);
  }
  setSide(value: Side): void {
    capnp.Struct.setUint16(0, value, this);
  }
  toString(): string {
    return "VatId_" + super.toString();
  }
}

export class ProvisionId extends capnp.Struct {
  static readonly _capnp = {
    displayName: "ProvisionId",
    id: "b88d09a9c5f39817",
    size: new capnp.ObjectSize(8, 0),
  };
  getJoinId(): number {
    return capnp.Struct.getUint32(0, this);
  }
  setJoinId(value: number): void {
    capnp.Struct.setUint32(0, value, this);
  }
  toString(): string {
    return "ProvisionId_" + super.toString();
  }
}

export class RecipientId extends capnp.Struct {
  static readonly _capnp = {
    displayName: "RecipientId",
    id: "89f389b6fd4082c1",
    size: new capnp.ObjectSize(0, 0),
  };
  toString(): string {
    return "RecipientId_" + super.toString();
  }
}

export class ThirdPartyCapId extends capnp.Struct {
  static readonly _capnp = {
    displayName: "ThirdPartyCapId",
    id: "b47f4979672cb59d",
    size: new capnp.ObjectSize(0, 0),
  };
  toString(): string {
    return "ThirdPartyCapId_" + super.toString();
  }
}

export class JoinKeyPart extends capnp.Struct {
  static readonly _capnp = {
    displayName: "JoinKeyPart",
    id: "95b29059097fca83",
    size: new capnp.ObjectSize(8, 0),
  };
  getJoinId(): number {
    return capnp.Struct.getUint32(0, this);
  }
  setJoinId(value: number): void {
    capnp.Struct.setUint32(0, value, this);
  }
  getPartCount(): number {
    return capnp.Struct.getUint16(4, this);
  }
  setPartCount(value: number): void {
    capnp.Struct.setUint16(4, value, this);
  }
  getPartNum(): number {
    return capnp.Struct.getUint16(6, this);
  }
  setPartNum(value: number): void {
    capnp.Struct.setUint16(6, value, this);
  }
  toString(): string {
    return "JoinKeyPart_" + super.toString();
  }
}

export class JoinResult extends capnp.Struct {
  static readonly _capnp = {
    displayName: "JoinResult",
    id: "9d263a3630b7ebee",
    size: new capnp.ObjectSize(8, 1),
  };
  getJoinId(): number {
    return capnp.Struct.getUint32(0, this);
  }
  setJoinId(value: number): void {
    capnp.Struct.setUint32(0, value, this);
  }
  getSucceeded(): boolean {
    return capnp.Struct.getBit(32, this);
  }
  setSucceeded(value: boolean): void {
    capnp.Struct.setBit(32, value, this);
  }
  adoptCap(value: capnp.Orphan<capnp.Pointer>): void {
    capnp.Struct.adopt(value, capnp.Struct.getPointer(0, this));
  }
  disownCap(): capnp.Orphan<capnp.Pointer> {
    return capnp.Struct.disown(this.getCap());
  }
  getCap(): capnp.Pointer {
    return capnp.Struct.getPointer(0, this);
  }
  hasCap(): boolean {
    return !capnp.Struct.isNull(capnp.Struct.getPointer(0, this));
  }
  setCap(value: capnp.Pointer): void {
    capnp.Struct.copyFrom(value, capnp.Struct.getPointer(0, this));
  }
  toString(): string {
    return "JoinResult_" + super.toString();
  }
}
