// Based on https://github.com/jdiaz5513/capnp-ts (MIT - Julián Díaz)

export enum ListElementSize {
  VOID = 0,
  BIT = 1,
  BYTE = 2,
  BYTE_2 = 3,
  BYTE_4 = 4,
  BYTE_8 = 5,
  POINTER = 6,
  COMPOSITE = 7,
}

export const ListElementOffset = [
  0, // void
  0.125, // bit
  1, // byte
  2, // two byte
  4, // four byte
  8, // eight byte
  8, // pointer
  Number.NaN, // composite
];
