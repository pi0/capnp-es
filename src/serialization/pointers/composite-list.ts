// Based on https://github.com/jdiaz5513/capnp-ts (MIT - Julián Díaz)

import { ListElementSize } from "../list-element-size";
import { _ListCtor, List, type ListCtor } from "./list";
import { Struct, StructCtor } from "./struct";
import { copyFrom } from "./pointer";

export function CompositeList<T extends Struct>(
  CompositeClass: StructCtor<T>,
): ListCtor<T> {
  return class extends List<T> {
    static readonly _capnp: _ListCtor = {
      compositeSize: CompositeClass._capnp.size,
      displayName: `List<${CompositeClass._capnp.displayName}>`,
      size: ListElementSize.COMPOSITE,
    };

    get(index: number): T {
      return new CompositeClass(
        this.segment,
        this.byteOffset,
        this._capnp.depthLimit - 1,
        index,
      );
    }

    set(index: number, value: T): void {
      copyFrom(value, this.get(index));
    }

    toString(): string {
      return `Composite_${super.toString()},cls:${CompositeClass.toString()}`;
    }
  };
}
