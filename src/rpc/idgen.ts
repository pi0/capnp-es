// Based on https://github.com/jdiaz5513/capnp-ts (MIT - Julián Díaz)

// IDGen returns a sequence of monotonically increasing IDs
// with support for replacement.
export class IDGen {
  i = 0;
  free: number[] = [];

  next(): number {
    return this.free.pop() ?? this.i++;
  }

  remove(i: number): void {
    this.free.push(i);
  }
}
