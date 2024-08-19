// Based on https://github.com/jdiaz5513/capnp-ts (MIT - Julián Díaz)

import { DEFAULT_BUFFER_SIZE } from "../../constants";
import { SEG_ID_OUT_OF_BOUNDS, SEG_NOT_WORD_ALIGNED } from "../../errors";
import { padToWord, format } from "../../util";
import { ArenaAllocationResult } from "./arena-allocation-result";
import { ArenaKind } from "./arena-kind";

export class MultiSegmentArena {
  static readonly allocate = allocate;
  static readonly getBuffer = getBuffer;
  static readonly getNumSegments = getNumSegments;

  readonly kind = ArenaKind.MULTI_SEGMENT;

  constructor(readonly buffers = [new ArrayBuffer(DEFAULT_BUFFER_SIZE)]) {
    let i = buffers.length;
    while (--i >= 0) {
      if ((buffers[i].byteLength & 7) !== 0) {
        throw new Error(format(SEG_NOT_WORD_ALIGNED, buffers[i].byteLength));
      }
    }
  }

  toString(): string {
    return format("MultiSegmentArena_segments:%d", getNumSegments(this));
  }
}

export function allocate(
  minSize: number,
  m: MultiSegmentArena,
): ArenaAllocationResult {
  const b = new ArrayBuffer(padToWord(Math.max(minSize, DEFAULT_BUFFER_SIZE)));
  m.buffers.push(b);

  return new ArenaAllocationResult(m.buffers.length - 1, b);
}

export function getBuffer(id: number, m: MultiSegmentArena): ArrayBuffer {
  if (id < 0 || id >= m.buffers.length) {
    throw new Error(format(SEG_ID_OUT_OF_BOUNDS, id));
  }

  return m.buffers[id];
}

export function getNumSegments(m: MultiSegmentArena): number {
  return m.buffers.length;
}
