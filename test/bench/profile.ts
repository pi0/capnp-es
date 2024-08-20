import { readFile } from "node:fs/promises";
import * as capnpES from "capnp-es";
import { bench, run } from "mitata";

const { AddressBook: capnpESStruct } = await import("./data/capnp/schema.ts");
const capnpData = new Uint8Array(
  await readFile(new URL("data/capnp/data.bin", import.meta.url)),
);

// Define benchmark
function benchTick() {
  const res: any[] = [];
  const obj = new capnpES.Message(capnpData, false, true).getRoot(
    capnpESStruct,
  );
  for (const person of obj.people) {
    res.push(person.id, person.name, person.email);
    for (const phone of person.phones) {
      res.push(phone.number);
    }
  }
  return res.join(",");
}

// Test
console.log(benchTick());

// Init bun oprofiler
const bunJsc = await import("bun:jsc" as any).catch(() => undefined);
const bunProfile = bunJsc?.profile(benchTick, 0.5);

// Run benchmark
if (process.argv.includes("--mitata")) {
  bench("bench", benchTick);
  await run();
} else {
  for (let i = 0; i < 100_000; i++) {
    benchTick();
  }
}

// Print Bun profiler output
if (bunProfile) {
  const bytecodeMap = new Map<string, string>();
  const sourceIdMap = new Map<string, string>();
  for (const trace of (bunProfile.stackTraces as any).traces) {
    for (const frame of trace.frames) {
      const bcId = /bc#(\d+)/.exec(frame.location || "")?.[1];
      if (bcId && frame.name) {
        bytecodeMap.set(bcId, frame.name);
      }
      if (frame.sourceID && frame.name) {
        sourceIdMap.set(frame.sourceID + "", frame.name);
      }
    }
  }
  const rewriteBytecode = (str: string) => {
    return str.replace(/bc#(\d+)/g, (_, id) => {
      const name = bytecodeMap.get(id);
      return name ? `#${name}` : `bc#${id}`;
    });
  };
  const rewriteSourceId = (str: string) => {
    return str.replace(/:(\d+)/g, (_, id) => {
      const name = sourceIdMap.get(id);
      return `:${name || id}`;
    });
  };
  const fmt = (str: string) => {
    return str.replace(/#?<nil>/g, "").replace(/'/g, "");
  };

  console.log(`
Bytecodes:
${fmt(rewriteBytecode(bunProfile.bytecodes))}

Functions:
${fmt(rewriteSourceId(bunProfile.functions))}
`);
}
