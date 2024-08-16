// Based on https://github.com/jdiaz5513/capnp-ts (MIT - Julián Díaz)

import { ListElementSize } from "../list-element-size";
import { _ListCtor, List } from "./list";
import { getContent } from "./pointer";

export class Uint16List extends List<number> {
  static readonly _capnp: _ListCtor = {
    displayName: "List<Uint16>",
    size: ListElementSize.BYTE_2,
  };

  get(index: number): number {
    const c = getContent(this);
    return c.segment.getUint16(c.byteOffset + index * 2);
  }

  set(index: number, value: number): void {
    const c = getContent(this);

    c.segment.setUint16(c.byteOffset + index * 2, value);
  }

  toString(): string {
    return `Uint16_${super.toString()}`;
  }
}
