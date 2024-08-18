import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { group, baseline, bench, run } from "mitata";
import * as capnp from "capnp-es";
import * as capnpts from "capnp-ts";
import protobuf from "protobufjs";

// JSON
const decoder = new TextDecoder();
const jsonUrl = new URL("data/json/data.json", import.meta.url);
const jsonData = await readFile(jsonUrl);
const jsonObj = JSON.parse(decoder.decode(jsonData));
const jsonString = JSON.stringify(jsonObj);

// Protobuf
const protobufurl = new URL("data/protobuf/data.proto", import.meta.url);
const protobufType = await protobuf
  .load(fileURLToPath(protobufurl))
  .then((pb) => pb.lookupType("pi0.capnpes.test.AddressBook"));
const protobufData = protobufType.encode(protobufType.create(jsonObj)).finish();

// Capnp
const { AddressBook: capnpStruct } = await import("./data/capnp/data.js");
const { AddressBook: capnptsStruct } = await import("./data/capnp/data-ts.cjs");
const capnpUrl = new URL("data/capnp/data-flat.bin", import.meta.url);
const capnpData = await readFile(capnpUrl).then((r) => new Uint8Array(r));

// Print size table
// console.table({
//   JSON: jsonData.byteLength,
//   Capnp: capnpData.byteLength,
//   Protobuf: protobufData.byteLength,
// });

group("parse", () => {
  baseline("capnp-es.Message(<buff>).getRoot()", () => {
    new capnp.Message(capnpData, false, true).getRoot(capnpStruct);
  });

  bench("capnp-ts.Message(<buff>).getRoot()", () => {
    new capnpts.Message(capnpData, false, true).getRoot(capnptsStruct);
  });

  bench("protobuf.decode(<buff>)", () => {
    protobufType.decode(protobufData);
  });

  bench("JSON.parse(<string>)", () => {
    JSON.parse(jsonString);
  });

  bench("JSON.parse(<buff>)", () => {
    JSON.parse(decoder.decode(jsonData));
  });
});

group("top level list length access", () => {
  baseline("capnp-es.Message(<buff>)", () => {
    const message = new capnp.Message(capnpData, false, true);
    const addressBook = message.getRoot(capnpStruct);
    addressBook.getPeople().getLength().toFixed(0);
  });

  bench("capnp-ts.Message(<buff>)", () => {
    const message = new capnpts.Message(capnpData, false, true);
    const addressBook = message.getRoot(capnptsStruct);
    addressBook.getPeople().getLength().toFixed(0);
  });

  bench("protobuf.decode(<buff>)", () => {
    const addressBook = protobufType.decode(protobufData);
    addressBook.people.length.toFixed(0);
  });

  bench("JSON.parse(<string>)", () => {
    const addressBook = JSON.parse(jsonString);
    addressBook.people.length.toFixed(0);
  });

  bench("JSON.parse(<buff>)", () => {
    const addressBook = JSON.parse(decoder.decode(jsonData));
    addressBook.people.length.toFixed(0);
  });
});

group("iteration over deeply nested lists", () => {
  baseline("capnp-es.Message(<buff>)", () => {
    const message = new capnp.Message(capnpData, false, true);
    const addressBook = message.getRoot(capnpStruct);
    // eslint-disable-next-line unicorn/no-array-for-each
    addressBook.getPeople().forEach((person) => {
      person.getId().toFixed(0);
      person.getName().toUpperCase();
      person.getEmail().toUpperCase();
      // eslint-disable-next-line unicorn/no-array-for-each
      person.getPhones().forEach((phone) => {
        phone.getNumber().toUpperCase();
      });
    });
  });

  bench("capnp-ts.Message(<buff>)", () => {
    const message = new capnpts.Message(capnpData, false, true);
    const addressBook = message.getRoot(capnptsStruct);
    // eslint-disable-next-line unicorn/no-array-for-each
    addressBook.getPeople().forEach((person) => {
      person.getId().toFixed(0);
      person.getName().toUpperCase();
      person.getEmail().toUpperCase();
      // eslint-disable-next-line unicorn/no-array-for-each
      person.getPhones().forEach((phone) => {
        phone.getNumber().toUpperCase();
      });
    });
  });

  bench("protobuf.decode(<buff>)", () => {
    const addressBook = protobufType.decode(protobufData);
    for (const person of addressBook.people) {
      person.id.toFixed(0);
      person.name.toUpperCase();
      person.email.toUpperCase();
      for (const phone of person.phones) {
        phone.number.toUpperCase();
      }
    }
  });

  bench("JSON.parse(<string>)", () => {
    const addressBook = JSON.parse(jsonString);
    for (const person of addressBook.people) {
      person.id.toFixed(0);
      person.name.toUpperCase();
      person.email.toUpperCase();
      for (const phone of person.phones) {
        phone.number.toUpperCase();
      }
    }
  });

  bench("JSON.parse(<buff>)", () => {
    const addressBook = JSON.parse(decoder.decode(jsonData));
    for (const person of addressBook.people) {
      person.id.toFixed(0);
      person.name.toUpperCase();
      person.email.toUpperCase();
      for (const phone of person.phones) {
        phone.number.toUpperCase();
      }
    }
  });
});

await run();
