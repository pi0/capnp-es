// Based on https://github.com/jdiaz5513/capnp-ts (MIT - Julián Díaz)

import { ListElementSize } from "../../list-element-size";
import { _ListCtor, List } from "./list";
import { getContent } from "../pointer";

export class Int64List extends List<bigint> {
  static readonly _capnp: _ListCtor = {
    displayName: "List<Int64>" as string,
    size: ListElementSize.BYTE_8,
  };

  get(index: number): bigint {
    const c = getContent(this);
    return c.segment.getInt64(c.byteOffset + index * 8);
  }

  set(index: number, value: bigint): void {
    const c = getContent(this);
    c.segment.setInt64(c.byteOffset + index * 8, value);
  }

  [Symbol.toStringTag](): string {
    return `Int64_${super.toString()}`;
  }
}
