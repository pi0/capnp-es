import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { group, bench, run, summary } from "mitata";
import * as capnpES from "capnp-es";

// JSON
const decoder = new TextDecoder();
const jsonUrl = new URL("data/json/data.json", import.meta.url);
const jsonData = await readFile(jsonUrl);
const jsonObj = JSON.parse(decoder.decode(jsonData));
const jsonString = JSON.stringify(jsonObj);
const jsonSerialized = traverseData(jsonObj);
const jsonStrBench = {
  parse: () => JSON.parse(jsonString),
  length: () => JSON.parse(jsonString).people.length,
  traverse: () => traverseData(JSON.parse(jsonString)),
};
const jsonBuffBench = {
  parse: () => JSON.parse(decoder.decode(jsonData)),
  length: () => JSON.parse(decoder.decode(jsonData)).people.length,
  traverse: () => traverseData(JSON.parse(decoder.decode(jsonData))),
};

// capnp-es
const { AddressBook: capnpESStruct } = await import("./data/capnp/schema.ts");
const capnpData = new Uint8Array(
  await readFile(new URL("data/capnp/data.bin", import.meta.url)),
);
const capnpESBench = {
  parse: () =>
    new capnpES.Message(capnpData, false, true).getRoot(capnpESStruct),
  length: () =>
    new capnpES.Message(capnpData, false, true).getRoot(capnpESStruct).people
      .length,
  traverse: () =>
    traverseData(
      new capnpES.Message(capnpData, false, true).getRoot(capnpESStruct),
    ),
};

// capnp-ts
const capnpTS = await import("capnp-ts" as any);
const { AddressBook: capnpTSStruct } = await import(
  "./data/capnp/schema-legacy.cjs" as any
);
const capnpTSBench = {
  parse: () =>
    new capnpTS.Message(capnpData, false, true).getRoot(capnpTSStruct),
  length: () =>
    (new capnpTS.Message(capnpData, false, true).getRoot(capnpTSStruct) as any)
      .getPeople()
      .getLength(),
  traverse: () =>
    traverseData(
      new capnpTS.Message(capnpData, false, true).getRoot(capnpTSStruct),
      true,
    ),
};

// protobuf
const protobuf = await import("protobufjs").then((r) => r.default || r);
const protobufType = await protobuf
  .load(fileURLToPath(new URL("data/protobuf/schema.proto", import.meta.url)))
  .then((pb) => pb.lookupType("pi0.test.AddressBook"));
const protobufData = new Uint8Array(
  await readFile(new URL("data/protobuf/data.bin", import.meta.url)),
);
const protobufBench = {
  parse: () => protobufType.decode(protobufData),
  length: () => (protobufType.decode(protobufData) as any).people.length,
  traverse: () => traverseData(protobufType.decode(protobufData)),
};

// This util traverses all fields of the object
function traverseData(obj: any, capnpTSCompat = false) {
  const res: string[] = [];
  if (capnpTSCompat) {
    // eslint-disable-next-line unicorn/no-array-for-each
    obj.getPeople().forEach((person: any) => {
      res.push(person.getId(), person.getName(), person.getEmail());
      // eslint-disable-next-line unicorn/no-array-for-each
      person.getPhones().forEach((phone: any) => {
        res.push(phone.getNumber());
      });
    });
  } else {
    for (const person of obj.people) {
      res.push(person.id, person.name, person.email);
      for (const phone of person.phones) {
        res.push(phone.number);
      }
    }
  }
  return res.join(":");
}

// All benchmarks
const benchmarks = {
  "capnp-es": capnpESBench,
  "capnp-ts": capnpTSBench,
  "JSON.parse(<string>)": jsonStrBench,
  "JSON.parse(<buffer>)": jsonBuffBench,
  protobuf: protobufBench,
} as const;

// Tests
const fails: string[] = [];
let passed = 0;
function test(name: string, fn: () => unknown, test: (val: any) => void) {
  let result: unknown;
  try {
    result = fn();
    test(result);
  } catch (error: any) {
    result = error;
  }
  if (result instanceof Error) {
    console.error(`${name} failed: ${result.stack}`);
    fails.push(name);
  } else {
    passed++;
  }
}
function assert(val: unknown, expected: unknown) {
  if (val !== expected) {
    const err = new Error(
      `\nExpected:\n${JSON.stringify(expected)}\nActual:\n${JSON.stringify(val)}\n`,
    );
    Error.captureStackTrace(err, assert);
    throw err;
  }
}
for (const [name, bench] of Object.entries(benchmarks)) {
  test(`${name}.parse`, bench.parse, (val) => val !== undefined);
  test(`${name}.length`, bench.length, (val) => assert(val, 2));
  test(`${name}.traverse`, bench.traverse, (data) =>
    assert(data, jsonSerialized),
  );
}
if (fails.length > 0) {
  console.error(
    `${fails.length} tests failed:${fails.map((f) => `\n  ${f}`).join("")}`,
  );
  process.exit(1); // eslint-disable-line unicorn/no-process-exit
} else {
  console.log(`All ${passed} tests passed.`);
}

// Benchmarks

group("parse data", () => {
  summary(() => {
    for (const [name, s] of Object.entries(benchmarks)) {
      bench(name, () => s.parse());
    }
  });
});

group("check top level array length", () => {
  summary(() => {
    for (const [name, s] of Object.entries(benchmarks)) {
      bench(name, () => s.length());
    }
  });
});

group("traverse all nested properties", () => {
  summary(() => {
    for (const [name, s] of Object.entries(benchmarks)) {
      bench(name, () => s.traverse());
    }
  });
});

await run();
