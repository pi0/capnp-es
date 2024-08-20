import * as $ from "../serialization";
export const _capnpFileId = BigInt("0xb8630836983feed7");
export class Persistent_SaveParams extends $.Struct {
  static readonly _capnp = {
    displayName: "SaveParams",
    id: "f76fba59183073a5",
    size: new $.ObjectSize(0, 1),
  };
  adoptSealFor(value: $.Orphan<$.Pointer>): void {
    $.utils.adopt(value, $.utils.getPointer(0, this));
  }
  disownSealFor(): $.Orphan<$.Pointer> {
    return $.utils.disown(this.sealFor);
  }
  get sealFor(): $.Pointer {
    return $.utils.getPointer(0, this);
  }
  hasSealFor(): boolean {
    return !$.utils.isNull($.utils.getPointer(0, this));
  }
  set sealFor(value: $.Pointer) {
    $.utils.copyFrom(value, $.utils.getPointer(0, this));
  }
  toString(): string {
    return "Persistent_SaveParams_" + super.toString();
  }
}
export class Persistent_SaveResults extends $.Struct {
  static readonly _capnp = {
    displayName: "SaveResults",
    id: "b76848c18c40efbf",
    size: new $.ObjectSize(0, 1),
  };
  adoptSturdyRef(value: $.Orphan<$.Pointer>): void {
    $.utils.adopt(value, $.utils.getPointer(0, this));
  }
  disownSturdyRef(): $.Orphan<$.Pointer> {
    return $.utils.disown(this.sturdyRef);
  }
  get sturdyRef(): $.Pointer {
    return $.utils.getPointer(0, this);
  }
  hasSturdyRef(): boolean {
    return !$.utils.isNull($.utils.getPointer(0, this));
  }
  set sturdyRef(value: $.Pointer) {
    $.utils.copyFrom(value, $.utils.getPointer(0, this));
  }
  toString(): string {
    return "Persistent_SaveResults_" + super.toString();
  }
}
export class Persistent extends $.Struct {
  static readonly SaveParams = Persistent_SaveParams;
  static readonly SaveResults = Persistent_SaveResults;
  static readonly _capnp = {
    displayName: "Persistent",
    id: "c8cb212fcd9f5691",
    size: new $.ObjectSize(0, 0),
  };
  toString(): string {
    return "Persistent_" + super.toString();
  }
}
