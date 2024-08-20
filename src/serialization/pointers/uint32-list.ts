// Based on https://github.com/jdiaz5513/capnp-ts (MIT - Julián Díaz)

import { ListElementSize } from "../list-element-size";
import { _ListCtor, List } from "./list";
import { getContent } from "./pointer";

export class Uint32List extends List<number> {
  static readonly _capnp: _ListCtor = {
    displayName: "List<Uint32>" as string,
    size: ListElementSize.BYTE_4,
  };

  get(index: number): number {
    const c = getContent(this);
    return c.segment.getUint32(c.byteOffset + index * 4);
  }

  set(index: number, value: number): void {
    const c = getContent(this);
    c.segment.setUint32(c.byteOffset + index * 4, value);
  }

  [Symbol.toStringTag](): string {
    return `Uint32_${super.toString()}`;
  }
}
