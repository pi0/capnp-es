import * as $ from "..";
export const _capnpFileId = BigInt("0xb8630836983feed7");
/**
 * Schema for member of an enum.
 * */
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
export class Persistent_SaveResults$Promise {
  pipeline: $.Pipeline<any, any, Persistent_SaveResults>;
  constructor(pipeline: $.Pipeline<any, any, Persistent_SaveResults>) {
    this.pipeline = pipeline;
  }
  async promise(): Promise<Persistent_SaveResults> {
    return await this.pipeline.struct();
  }
}
export class Persistent$Client {
  client: $.Client;
  static readonly interfaceId: bigint = BigInt("0xc8cb212fcd9f5691");
  constructor(client: $.Client) {
    this.client = client;
  }
  static readonly methods: [
    $.Method<Persistent_SaveParams, Persistent_SaveResults>,
  ] = [
    {
      ParamsClass: Persistent_SaveParams,
      ResultsClass: Persistent_SaveResults,
      interfaceId: Persistent$Client.interfaceId,
      methodId: 0,
      interfaceName: "src/capnp/_capnp/persistent.capnp:Persistent",
      methodName: "save",
    },
  ];
  save(
    paramsFunc?: (params: Persistent_SaveParams) => void,
  ): Persistent_SaveResults$Promise {
    const answer = this.client.call({
      method: Persistent$Client.methods[0],
      paramsFunc: paramsFunc,
    });
    const pipeline = new $.Pipeline(Persistent_SaveResults, answer);
    return new Persistent_SaveResults$Promise(pipeline);
  }
}
$.Registry.register(Persistent$Client.interfaceId, Persistent$Client);
export interface Persistent$Server$Target {
  save(
    params: Persistent_SaveParams,
    results: Persistent_SaveResults,
  ): Promise<void>;
}
export class Persistent$Server extends $.Server {
  readonly target: Persistent$Server$Target;
  constructor(target: Persistent$Server$Target) {
    super(target, [
      {
        ...Persistent$Client.methods[0],
        impl: target.save,
      },
    ]);
    this.target = target;
  }
  client(): Persistent$Client {
    return new Persistent$Client(this);
  }
}
/**
 * A group.
 * */
export class Persistent extends $.Interface {
  static readonly SaveParams = Persistent_SaveParams;
  static readonly SaveResults = Persistent_SaveResults;
  static readonly Client = Persistent$Client;
  static readonly Server = Persistent$Server;
  static readonly _capnp = {
    displayName: "Persistent",
    id: "c8cb212fcd9f5691",
    size: new $.ObjectSize(0, 0),
  };
  toString(): string {
    return "Persistent_" + super.toString();
  }
}
