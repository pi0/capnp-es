// Based on https://github.com/jdiaz5513/capnp-ts (MIT - Julián Díaz)

import { ListElementSize } from "../../list-element-size";
import { _ListCtor, List, type ListCtor } from "./list";
import { Pointer, PointerCtor, getContent, copyFrom } from "../pointer";

export function PointerList<T extends Pointer>(
  PointerClass: PointerCtor<T>,
): ListCtor<T> {
  return class extends List<T> {
    static readonly _capnp: _ListCtor = {
      displayName: `List<${PointerClass._capnp.displayName}>`,
      size: ListElementSize.POINTER,
    };

    get(index: number): T {
      const c = getContent(this);
      return new PointerClass(
        c.segment,
        c.byteOffset + index * 8,
        this._capnp.depthLimit - 1,
      );
    }

    set(index: number, value: T): void {
      copyFrom(value, this.get(index));
    }

    [Symbol.toStringTag](): string {
      return `Pointer_${super.toString()},cls:${PointerClass.toString()}`;
    }
  };
}
