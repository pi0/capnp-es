// Based on https://github.com/jdiaz5513/capnp-ts (MIT - Julián Díaz)

export class ArenaAllocationResult {
  /**
   * The newly allocated buffer. This buffer might be a copy of an existing segment's buffer with free space appended.
   *
   * @type {ArrayBuffer}
   */

  readonly buffer: ArrayBuffer;

  /**
   * The id of the newly-allocated segment.
   *
   * @type {number}
   */

  readonly id: number;

  constructor(id: number, buffer: ArrayBuffer) {
    this.id = id;
    this.buffer = buffer;
  }
}
