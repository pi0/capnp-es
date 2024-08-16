import { group, bench, run } from "mitata";
import { readFile } from "node:fs/promises";
import * as capnp from "capnp-es";
import { AddressBook } from "../integration/serialization-demo.ts";

const decoder = new TextDecoder();

const jsonBuffer = await readFile(
  new URL("../fixtures/data/serialization-demo.json", import.meta.url),
);

const jsonString = decoder.decode(jsonBuffer);

const messageData = await readFile(
  new URL("../fixtures/data/serialization-demo.bin", import.meta.url),
).then((buf) => new Uint8Array(buf));

// Let's preprocess it so we have just the raw segment data.
const messageSegment = new capnp.Message(messageData, false, true).getSegment(
  0,
).buffer;

group("iteration over deeply nested lists", () => {
  bench("capnp.Message(<buff>)", () => {
    const message = new capnp.Message(messageSegment, false, true);
    const addressBook = message.getRoot(AddressBook);
    // eslint-disable-next-line unicorn/no-array-for-each
    addressBook.getPeople().forEach((person) => {
      // eslint-disable-next-line unicorn/no-array-for-each
      person.getPhones().forEach((phone) => {
        phone.getNumber().toUpperCase();
      });
    });
  });

  bench("JSON.parse(<string>)", () => {
    const addressBook = JSON.parse(jsonString);
    for (const person of addressBook.people) {
      for (const phone of person.phones) {
        phone.number.toUpperCase();
      }
    }
  });

  bench("JSON.parse(TextDecoder.decode(<buff>))", () => {
    const addressBook = JSON.parse(decoder.decode(jsonBuffer));
    for (const person of addressBook.people) {
      for (const phone of person.phones) {
        phone.number.toUpperCase();
      }
    }
  });
});

group("top level list length access", () => {
  bench("capnp.Message(<buff>)", () => {
    const message = new capnp.Message(messageSegment, false, true);
    const addressBook = message.getRoot(AddressBook);
    addressBook.getPeople().getLength().toFixed(0);
  });

  bench("JSON.parse(<string>)", () => {
    const addressBook = JSON.parse(jsonString);
    addressBook.people.length.toFixed(0);
  });

  bench("JSON.parse(TextDecoder.decode(<buff>))", () => {
    const addressBook = JSON.parse(decoder.decode(jsonBuffer));
    addressBook.people.length.toFixed(0);
  });
});

group("parse", () => {
  bench("capnp.Message(<buff>).getRoot()", () => {
    // Okay, this isn't fair. Cap'n Proto only does "parsing" at access time. :)
    new capnp.Message(messageSegment, false, true).getRoot(AddressBook);
  });

  bench("JSON.parse(<string>)", () => {
    JSON.parse(jsonString);
  });

  bench("JSON.parse(TextDecoder.decode(<buff>))", () => {
    JSON.parse(decoder.decode(jsonBuffer));
  });
});

await run();
