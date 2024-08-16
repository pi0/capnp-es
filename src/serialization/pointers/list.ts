// Based on https://github.com/jdiaz5513/capnp-ts (MIT - Julián Díaz)

import {
  PTR_COMPOSITE_SIZE_UNDEFINED,
  PTR_INVALID_LIST_SIZE,
} from "../../errors";
import { format, identity } from "../../util";
import { ListElementSize } from "../list-element-size";
import { ObjectSize, padToWord, getByteLength } from "../object-size";
import { Segment } from "../segment";
import {
  Pointer,
  getTargetListLength,
  getListElementByteLength,
  setStructPointer,
  setListPointer,
  initPointer,
} from "./pointer";

export interface _ListCtor {
  readonly compositeSize?: ObjectSize;
  readonly displayName: string;
  readonly size: ListElementSize;
}

export interface ListCtor<T> {
  readonly _capnp: _ListCtor;

  new (segment: Segment, byteOffset: number, depthLimit?: number): List<T>;
}

export type FilterCallback<T> = (
  this: void,
  value: T,
  index: number,
) => boolean;
export type IndexedCallback<T, U> = (this: void, value: T, index: number) => U;

export interface Group<T> {
  [k: string]: T;
}

/**
 * A generic list class. Implements Filterable,
 */

export class List<T> extends Pointer {
  static readonly _capnp: _ListCtor = {
    displayName: "List<Generic>" as string,
    size: ListElementSize.VOID,
  };
  static readonly get = get;
  static readonly initList = initList;
  static readonly set = set;

  static toString(): string {
    return this._capnp.displayName;
  }

  all(callbackfn: FilterCallback<T>): boolean {
    const length = this.getLength();

    for (let i = 0; i < length; i++) {
      if (!callbackfn(this.get(i), i)) return false;
    }

    return true;
  }

  any(callbackfn: FilterCallback<T>): boolean {
    const length = this.getLength();

    for (let i = 0; i < length; i++) {
      if (callbackfn(this.get(i), i)) return true;
    }

    return false;
  }

  ap<U>(callbackfns: Array<IndexedCallback<T, U>>): U[] {
    const length = this.getLength();
    const res: U[] = [];

    for (let i = 0; i < length; i++) {
      res.push(...callbackfns.map((f) => f(this.get(i), i)));
    }

    return res;
  }

  concat(other: List<T>): T[] {
    const length = this.getLength();
    const otherLength = other.getLength();
    const res = Array.from({ length: length + otherLength }) as Array<T>;

    for (let i = 0; i < length; i++) res[i] = this.get(i);

    for (let i = 0; i < otherLength; i++) res[i + length] = other.get(i);

    return res;
  }

  drop(n: number): T[] {
    const length = this.getLength();
    const res = Array.from({ length }) as T[];

    for (let i = n; i < length; i++) res[i] = this.get(i);

    return res;
  }

  dropWhile(callbackfn: FilterCallback<T>): T[] {
    const length = this.getLength();
    const res: T[] = [];
    let drop = true;

    for (let i = 0; i < length; i++) {
      const v = this.get(i);

      if (drop) drop = callbackfn(v, i);

      if (!drop) res.push(v);
    }

    return res;
  }

  empty(): T[] {
    return [] as T[];
  }

  every(callbackfn: FilterCallback<T>): boolean {
    return this.all(callbackfn);
  }

  filter(callbackfn: FilterCallback<T>): T[] {
    const length = this.getLength();
    const res: T[] = [];

    for (let i = 0; i < length; i++) {
      const value = this.get(i);

      if (callbackfn(value, i)) res.push(value);
    }

    return res;
  }

  find(callbackfn: FilterCallback<T>): T | undefined {
    const length = this.getLength();

    for (let i = 0; i < length; i++) {
      const value = this.get(i);

      if (callbackfn(value, i)) return value;
    }

    return undefined;
  }

  findIndex(callbackfn: FilterCallback<T>): number {
    const length = this.getLength();

    for (let i = 0; i < length; i++) {
      const value = this.get(i);

      if (callbackfn(value, i)) return i;
    }

    return -1;
  }

  forEach(callbackfn: (this: void, value: T, index: number) => void): void {
    const length = this.getLength();

    for (let i = 0; i < length; i++) callbackfn(this.get(i), i);
  }

  get(_index: number): T {
    return get(_index, this);
  }

  /**
   * Get the length of this list.
   *
   * @returns {number} The number of elements in this list.
   */

  getLength(): number {
    return getTargetListLength(this);
  }

  groupBy(callbackfn: IndexedCallback<T, string>): Group<T> {
    const length = this.getLength();
    const res: Group<T> = {};

    for (let i = 0; i < length; i++) {
      const v = this.get(i);
      res[callbackfn(v, i)] = v;
    }

    return res;
  }

  intersperse(sep: T): T[] {
    const length = this.getLength();
    const res = Array.from({ length }) as T[];

    for (let i = 0; i < length; i++) {
      if (i > 0) res.push(sep);

      res.push(this.get(i));
    }

    return res;
  }

  map<U>(callbackfn: IndexedCallback<T, U>): U[] {
    const length = this.getLength();
    const res = Array.from({ length }) as U[];

    for (let i = 0; i < length; i++) res[i] = callbackfn(this.get(i), i);

    return res;
  }

  reduce(
    callbackfn: (previousValue: T, currentValue: T, currentIndex: number) => T,
  ): T;
  reduce<U>(
    callbackfn: (previousValue: U, currentValue: T, currentIndex: number) => U,
    initialValue: U,
  ): U;
  reduce<U>(
    callbackfn: (
      previousValue: T | U,
      currentValue: T,
      currentIndex: number,
    ) => T | U,
    initialValue?: U,
  ): T | U {
    let i = 0;
    let res: T | U;

    if (initialValue === undefined) {
      res = this.get(0);
      i++;
    } else {
      res = initialValue;
    }

    for (; i < this.getLength(); i++) res = callbackfn(res, this.get(i), i);

    return res;
  }

  set(_index: number, _value: T): void {
    set(_index, _value, this);
  }

  slice(start = 0, end?: number): T[] {
    const length = end ? Math.min(this.getLength(), end) : this.getLength();
    const res = Array.from({ length: length - start }) as T[];

    for (let i = start; i < length; i++) res[i] = this.get(i);

    return res;
  }

  some(callbackfn: FilterCallback<T>): boolean {
    return this.any(callbackfn);
  }

  take(n: number): T[] {
    const length = Math.min(this.getLength(), n);
    const res = Array.from({ length }) as T[];

    for (let i = 0; i < length; i++) res[i] = this.get(i);

    return res;
  }

  takeWhile(callbackfn: FilterCallback<T>): T[] {
    const length = this.getLength();
    const res: T[] = [];
    let take;

    for (let i = 0; i < length; i++) {
      const v = this.get(i);

      take = callbackfn(v, i);

      if (!take) return res;

      res.push(v);
    }

    return res;
  }

  toArray(): T[] {
    return this.map(identity);
  }

  toString(): string {
    return `List_${super.toString()}`;
  }
}

/**
 * Initialize the list with the given element size and length. This will allocate new space for the list, ideally in
 * the same segment as this pointer.
 *
 * @param {ListElementSize} elementSize The size of each element in the list.
 * @param {number} length The number of elements in the list.
 * @param {List<T>} l The list to initialize.
 * @param {ObjectSize} [compositeSize] The size of each element in a composite list. This value is required for
 * composite lists.
 * @returns {void}
 */

export function initList<T>(
  elementSize: ListElementSize,
  length: number,
  l: List<T>,
  compositeSize?: ObjectSize,
): void {
  let c: Pointer;

  switch (elementSize) {
    case ListElementSize.BIT: {
      c = l.segment.allocate(Math.ceil(length / 8));

      break;
    }

    case ListElementSize.BYTE:
    case ListElementSize.BYTE_2:
    case ListElementSize.BYTE_4:
    case ListElementSize.BYTE_8:
    case ListElementSize.POINTER: {
      c = l.segment.allocate(length * getListElementByteLength(elementSize));

      break;
    }

    case ListElementSize.COMPOSITE: {
      if (compositeSize === undefined) {
        throw new Error(format(PTR_COMPOSITE_SIZE_UNDEFINED));
      }

      compositeSize = padToWord(compositeSize);

      const byteLength = getByteLength(compositeSize) * length;

      // We need to allocate an extra 8 bytes for the tag word, then make sure we write the length to it. We advance
      // the content pointer by 8 bytes so that it then points to the first list element as intended. Everything
      // starts off zeroed out so these nested structs don't need to be initialized in any way.

      c = l.segment.allocate(byteLength + 8);

      setStructPointer(length, compositeSize, c);

      break;
    }
    case ListElementSize.VOID: {
      // No need to allocate anything, we can write the list pointer right here.

      setListPointer(0, elementSize, length, l);

      return;
    }

    default: {
      throw new Error(format(PTR_INVALID_LIST_SIZE, elementSize));
    }
  }

  const res = initPointer(c.segment, c.byteOffset, l);

  setListPointer(
    res.offsetWords,
    elementSize,
    length,
    res.pointer,
    compositeSize,
  );
}

export function get<T>(_index: number, _l: List<T>): T {
  throw new TypeError("Cannot get from a generic list.");
}

export function set<T>(_index: number, _value: T, _l: List<T>): void {
  throw new TypeError("Cannot set on a generic list.");
}
