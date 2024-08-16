// Based on https://github.com/jdiaz5513/capnp-ts (MIT - Julián Díaz)

import { test, assert as t } from "vitest";
import { compareBuffers, readFileBuffer } from "test/utils";
import {
  getHammingWeight,
  getTagByte,
  getUnpackedByteLength,
  getZeroByteCount,
  pack,
  unpack,
} from "src/serialization/packing";

type Word = [number, number, number, number, number, number, number, number];
type TagData = { tag: number; weight: number; word: Word }[];

const TAG_DATA: TagData = [
  {
    tag: 0b0000_0000,
    weight: 0,
    word: [0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00],
  },
  {
    tag: 0b0011_0001,
    weight: 3,
    word: [0x09, 0x00, 0x00, 0x00, 0x04, 0x01, 0x00, 0x00],
  },
  {
    tag: 0b0000_0001,
    weight: 1,
    word: [0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00],
  },
  {
    tag: 0b1111_1111,
    weight: 8,
    word: [0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff],
  },
  {
    tag: 0b1000_0000,
    weight: 1,
    word: [0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xff],
  },
  {
    tag: 0b1111_1111,
    weight: 8,
    word: [0x0a, 0x15, 0x01, 0xac, 0x6d, 0x9f, 0x03, 0xf2],
  },
  {
    tag: 0b0011_1111,
    weight: 6,
    word: [0x41, 0x53, 0x53, 0x48, 0x41, 0x54, 0x00, 0x00],
  },
];

// NOTE: for these tests to work `PACK_SPAN_THRESHOLD` must be set to `2`.

const PACKING_DATA = [
  {
    name: "flat",
    packed: readFileBuffer("test/fixtures/data/flat-packed.bin"),
    unpacked: readFileBuffer("test/fixtures/data/flat.bin"),
  },
  {
    name: "span",
    packed: readFileBuffer("test/fixtures/data/span-packed.bin"),
    unpacked: readFileBuffer("test/fixtures/data/span.bin"),
  },
  {
    name: "test",
    packed: readFileBuffer("test/fixtures/data/test-packed.bin"),
    unpacked: readFileBuffer("test/fixtures/data/test.bin"),
  },
  {
    name: "zero",
    packed: readFileBuffer("test/fixtures/data/zero-packed.bin"),
    unpacked: readFileBuffer("test/fixtures/data/zero.bin"),
  },
];

test("getHammingWeight()", () => {
  // t.plan(TAG_DATA.length);

  for (const d of TAG_DATA) t.equal(getHammingWeight(d.tag), d.weight);
});

test("getTagByte()", () => {
  for (const d of TAG_DATA) t.equal(getTagByte(...d.word), d.tag);
});

test("getUnpackedByteLength()", () => {
  for (const { name, packed, unpacked } of PACKING_DATA) {
    t.equal(getUnpackedByteLength(packed), unpacked.byteLength, name);
  }
});

test("getZeroByteCount()", () => {
  for (const d of TAG_DATA) t.equal(getZeroByteCount(...d.word), 8 - d.weight);
});

test("pack()", () => {
  for (const { name, packed, unpacked } of PACKING_DATA) {
    compareBuffers(pack(unpacked), packed, name);
  }

  t.throws(() => pack(new ArrayBuffer(7)));
});

test("unpack()", () => {
  for (const { name, packed, unpacked } of PACKING_DATA) {
    compareBuffers(unpack(packed), unpacked, name);
  }
});
