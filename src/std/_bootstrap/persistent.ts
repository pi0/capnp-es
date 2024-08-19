// Based on https://github.com/jdiaz5513/capnp-ts (MIT - Julián Díaz)

// This file was historically written by hand and keyboard to bootstrap compiler development.

import * as capnp from "../../serialization";

export const _capnpFileId = "b8630836983feed7";

export class Persistent_SaveParams extends capnp.Struct {
  static readonly _capnp = {
    displayName: "SaveParams",
    id: "f76fba59183073a5",
    size: new capnp.ObjectSize(0, 1),
  };
  adoptSealFor(value: capnp.Orphan<capnp.Pointer>): void {
    capnp.Struct.adopt(value, capnp.Struct.getPointer(0, this));
  }
  disownSealFor(): capnp.Orphan<capnp.Pointer> {
    return capnp.Struct.disown(this.getSealFor());
  }
  getSealFor(): capnp.Pointer {
    return capnp.Struct.getPointer(0, this);
  }
  hasSealFor(): boolean {
    return !capnp.Struct.isNull(capnp.Struct.getPointer(0, this));
  }
  setSealFor(value: capnp.Pointer): void {
    capnp.Struct.copyFrom(value, capnp.Struct.getPointer(0, this));
  }
  toString(): string {
    return "Persistent_SaveParams_" + super.toString();
  }
}

export class Persistent_SaveResults extends capnp.Struct {
  static readonly _capnp = {
    displayName: "SaveResults",
    id: "b76848c18c40efbf",
    size: new capnp.ObjectSize(0, 1),
  };
  adoptSturdyRef(value: capnp.Orphan<capnp.Pointer>): void {
    capnp.Struct.adopt(value, capnp.Struct.getPointer(0, this));
  }
  disownSturdyRef(): capnp.Orphan<capnp.Pointer> {
    return capnp.Struct.disown(this.getSturdyRef());
  }
  getSturdyRef(): capnp.Pointer {
    return capnp.Struct.getPointer(0, this);
  }
  hasSturdyRef(): boolean {
    return !capnp.Struct.isNull(capnp.Struct.getPointer(0, this));
  }
  setSturdyRef(value: capnp.Pointer): void {
    capnp.Struct.copyFrom(value, capnp.Struct.getPointer(0, this));
  }
  toString(): string {
    return "Persistent_SaveResults_" + super.toString();
  }
}

export class Persistent extends capnp.Struct {
  static readonly SaveParams = Persistent_SaveParams;
  static readonly SaveResults = Persistent_SaveResults;
  static readonly _capnp = {
    displayName: "Persistent",
    id: "c8cb212fcd9f5691",
    size: new capnp.ObjectSize(0, 0),
  };
  toString(): string {
    return "Persistent_" + super.toString();
  }
}

export class RealmGateway extends capnp.Struct {
  static readonly _capnp = {
    displayName: "RealmGateway",
    id: "84ff286cd00a3ed4",
    size: new capnp.ObjectSize(0, 0),
  };
  toString(): string {
    return "RealmGateway_" + super.toString();
  }
}
