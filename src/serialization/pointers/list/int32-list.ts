// Based on https://github.com/jdiaz5513/capnp-ts (MIT - Julián Díaz)

import { ListElementSize } from "../../list-element-size";
import { _ListCtor, List } from "./list";
import { getContent } from "../pointer";

export class Int32List extends List<number> {
  static readonly _capnp: _ListCtor = {
    displayName: "List<Int32>" as string,
    size: ListElementSize.BYTE_4,
  };

  get(index: number): number {
    const c = getContent(this);
    return c.segment.getInt32(c.byteOffset + index * 4);
  }

  set(index: number, value: number): void {
    const c = getContent(this);
    c.segment.setInt32(c.byteOffset + index * 4, value);
  }

  [Symbol.toStringTag](): string {
    return `Int32_${super.toString()}`;
  }
}
