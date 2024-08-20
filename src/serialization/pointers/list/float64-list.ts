// Based on https://github.com/jdiaz5513/capnp-ts (MIT - Julián Díaz)

import { ListElementSize } from "../../list-element-size";
import { _ListCtor, List } from "./list";
import { getContent } from "../pointer.utils";

export class Float64List extends List<number> {
  static readonly _capnp: _ListCtor = {
    displayName: "List<Float64>" as string,
    size: ListElementSize.BYTE_8,
  };

  get(index: number): number {
    const c = getContent(this);

    return c.segment.getFloat64(c.byteOffset + index * 8);
  }

  set(index: number, value: number): void {
    const c = getContent(this);

    c.segment.setFloat64(c.byteOffset + index * 8, value);
  }

  [Symbol.toStringTag](): string {
    return `Float64_${super.toString()}`;
  }
}
