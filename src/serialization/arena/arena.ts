// Based on https://github.com/jdiaz5513/capnp-ts (MIT - Julián Díaz)

import { assertNever } from "../../errors";
import { Segment } from "../segment";
import { AnyArena } from "./any-arena";
import { ArenaAllocationResult } from "./arena-allocation-result";
import { ArenaKind } from "./arena-kind";
import { MultiSegmentArena } from "./multi-segment-arena";
import { SingleSegmentArena } from "./single-segment-arena";

export abstract class Arena {
  static readonly allocate = allocate;
  static readonly getBuffer = getBuffer;
  static readonly getNumSegments = getNumSegments;
}

export function allocate(
  minSize: number,
  segments: Segment[],
  a: AnyArena,
): ArenaAllocationResult {
  switch (a.kind) {
    case ArenaKind.MULTI_SEGMENT: {
      return MultiSegmentArena.allocate(minSize, a);
    }

    case ArenaKind.SINGLE_SEGMENT: {
      return SingleSegmentArena.allocate(minSize, segments, a);
    }

    default: {
      return assertNever(a);
    }
  }
}

export function getBuffer(id: number, a: AnyArena): ArrayBuffer {
  switch (a.kind) {
    case ArenaKind.MULTI_SEGMENT: {
      return MultiSegmentArena.getBuffer(id, a);
    }

    case ArenaKind.SINGLE_SEGMENT: {
      return SingleSegmentArena.getBuffer(id, a);
    }

    default: {
      return assertNever(a);
    }
  }
}

export function getNumSegments(a: AnyArena): number {
  switch (a.kind) {
    case ArenaKind.MULTI_SEGMENT: {
      return MultiSegmentArena.getNumSegments(a);
    }

    case ArenaKind.SINGLE_SEGMENT: {
      return SingleSegmentArena.getNumSegments();
    }

    default: {
      return assertNever(a);
    }
  }
}
