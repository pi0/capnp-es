// Based on https://github.com/jdiaz5513/capnp-ts (MIT - Julián Díaz)

import { assert as t } from "vitest";
import Benchmark, { Suite } from "benchmark";
import { readFileSync } from "node:fs";
import * as path from "node:path";
import { format, pad } from "src/util";

function diffHex(found: ArrayBuffer, wanted: ArrayBuffer): string {
  const a = new Uint8Array(found);
  const b = new Uint8Array(wanted);

  for (let i = 0; i < a.byteLength && i < b.byteLength; i++) {
    if (a[i] !== b[i]) {
      return format(
        "addr:%a,found:%s,wanted:%s",
        i,
        pad(a[i].toString(16), 2),
        pad(b[i].toString(16), 2),
      );
    }
  }

  if (a.byteLength > b.byteLength) {
    return format(
      "addr:%a,found:%s,wanted:EOF",
      b.byteLength,
      pad(a[b.byteLength].toString(16), 2),
    );
  } else if (b.byteLength > a.byteLength) {
    return format(
      "addr:%a,found:EOF,wanted:%s",
      a.byteLength,
      pad(b[a.byteLength].toString(16), 2),
    );
  }

  return "equal";
}

export function compareBuffers(
  found: ArrayBuffer,
  wanted: ArrayBuffer,
  _name = "should have the same buffer contents",
): void {
  t.equal(
    found.byteLength,
    wanted.byteLength,
    `should have the same byte length (diff=${diffHex(found, wanted)}).`,
  );

  // End the comparison prematurely if the buffer lengths differ.

  if (found.byteLength !== wanted.byteLength) {
    return;
  }

  const a = new Uint8Array(found);
  const b = new Uint8Array(wanted);

  for (let i = 0; i < a.byteLength; i++) {
    if (a[i] !== b[i]) {
      t.fail(`bytes are not equal (${diffHex(found, wanted)})`);
    }
  }
}

// LINT: This is benchmark code, not library code. This does not run as part of the test suite.

export function logBench(suite: Suite): Suite {
  return suite

    .on("start", function (this: any) {
      console.log(`\nStarting benchmark: ${this.name}`);
    })

    .on("cycle", (ev: Benchmark.Event) => {
      console.log(String(ev.target));
    })

    .on("complete", function (this: any) {
      const name = this.name as string;
      const fastest = this.filter("fastest");
      const slowest = this.filter("slowest");
      const ratio = fastest.map("hz") / slowest.map("hz");
      console.log(
        `Fastest ${name} is ${fastest.map("name")} (${ratio.toFixed(3)}x faster)`,
      );
    });
}

export function readFileBuffer(filePath: string): ArrayBuffer {
  const b = readFileSync(path.join(__dirname, "../", filePath));

  return b.buffer.slice(b.byteOffset, b.byteOffset + b.byteLength);
}
