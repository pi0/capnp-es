// Based on https://github.com/jdiaz5513/capnp-ts (MIT - Julián Díaz)

import * as _ from "../util";

/**
 * A simple object that describes the size of a struct.
 *
 * @export
 * @class ObjectSize
 */

export class ObjectSize {
  /** The number of bytes required for the data section. */

  readonly dataByteLength: number;

  /** The number of pointers in the object. */

  readonly pointerLength: number;

  constructor(dataByteLength: number, pointerCount: number) {
    this.dataByteLength = dataByteLength;
    this.pointerLength = pointerCount;
  }

  toString(): string {
    return _.format(
      "ObjectSize_dw:%d,pc:%d",
      getDataWordLength(this),
      this.pointerLength,
    );
  }
}

export function getByteLength(o: ObjectSize): number {
  return o.dataByteLength + o.pointerLength * 8;
}

export function getDataWordLength(o: ObjectSize): number {
  return o.dataByteLength / 8;
}

export function getWordLength(o: ObjectSize): number {
  return o.dataByteLength / 8 + o.pointerLength;
}

export function padToWord(o: ObjectSize): ObjectSize {
  return new ObjectSize(_.padToWord(o.dataByteLength), o.pointerLength);
}
