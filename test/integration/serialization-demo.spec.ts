// Based on https://github.com/jdiaz5513/capnp-ts (MIT - Julián Díaz)

import { test, assert as t } from "vitest";

import * as capnp from "capnp-es";
import { compareBuffers, readFileBuffer } from "test/utils";
import {
  AddressBook,
  Person,
  Person_Employment_Which,
} from "test/fixtures/serialization-demo";

const SERIALIZATION_DEMO = readFileBuffer(
  "test/fixtures/data/serialization-demo.bin",
);

test("write address book", () => {
  const message = new capnp.Message();
  const addressBook = message.initRoot(AddressBook);

  // t.type(addressBook, AddressBook);

  const people = addressBook.initPeople(2);

  // t.type(people, AddressBook.people);

  const alice = people.get(0);

  // t.type(alice, Person);
  alice.id = 456;
  alice.name = "Alice";
  alice.email = "alice@example.com";

  // t.comment("should not crash while calling setters");

  const alicePhones = alice.initPhones(1);

  // t.type(alicePhones, Person.phones);

  alicePhones.get(0).number = "555-1212";
  alicePhones.get(0).type = Person.PhoneNumber.Type.MOBILE;

  // t.comment("should not crash while chaining getter calls");

  alice.employment.school = "MIT";

  // t.comment("should not crash while accessing groups and unions");

  const bob = people.get(1);

  // t.type(bob, Person);

  bob.id = 456;
  bob.name = "Bob";
  bob.email = "bob@example.com";

  // t.comment(
  //   "should not crash while calling setters on composite struct with nonzero index",
  // );

  const bobPhones = bob.initPhones(2);

  // t.type(bobPhones, Person.phones);

  bobPhones.get(0).number = "555-4567";
  bobPhones.get(0).type = Person.PhoneNumber.Type.HOME;
  bobPhones.get(1).number = "555-7654";
  bobPhones.get(1).type = Person.PhoneNumber.Type.WORK;

  // t.comment("should not crash while chaining getters");

  bob.employment.unemployed = true;

  // t.comment("should not crash while setting void union");

  const out = message.toArrayBuffer();

  compareBuffers(out, SERIALIZATION_DEMO);
});

test("read address book", () => {
  const message = new capnp.Message(SERIALIZATION_DEMO, false);

  const addressBook = message.getRoot(AddressBook);

  const people = addressBook.people;

  t.equal(people.length, 2);

  const alice = people.get(0);

  t.equal(alice.id, 456);
  t.equal(alice.name, "Alice");
  t.equal(alice.email, "alice@example.com");

  const alicePhones = alice.phones;

  t.equal(alicePhones.length, 1);

  t.equal(alicePhones.get(0).number, "555-1212");
  t.equal(alicePhones.get(0).type, Person.PhoneNumber.Type.MOBILE);

  const aliceEmployment = alice.employment;

  t.equal(aliceEmployment.which(), Person_Employment_Which.SCHOOL);
  t.ok(aliceEmployment.isSchool());
  t.equal(aliceEmployment.school, "MIT");

  const bob = people.get(1);

  t.equal(bob.id, 456);
  t.equal(bob.name, "Bob");
  t.equal(bob.email, "bob@example.com");

  const bobPhones = bob.phones;

  t.equal(bobPhones.length, 2);

  t.equal(bobPhones.get(0).number, "555-4567");
  t.equal(bobPhones.get(0).type, Person.PhoneNumber.Type.HOME);
  t.equal(bobPhones.get(1).number, "555-7654");
  t.equal(bobPhones.get(1).type, Person.PhoneNumber.Type.WORK);

  const bobEmployment = bob.employment;

  t.equal(bobEmployment.which(), Person_Employment_Which.UNEMPLOYED);
  t.ok(bobEmployment.isUnemployed());
});

test("copy pointers from other message", () => {
  const message1 = new capnp.Message();
  const addressBook1 = message1.initRoot(AddressBook);
  const people1 = addressBook1.initPeople(2);
  const alice1 = people1.get(1);

  alice1.name = "Alice";
  alice1.email = "alice@example.com";
  alice1.id = 456;

  const message2 = new capnp.Message();
  const addressBook2 = message2.initRoot(AddressBook);

  addressBook2.people = people1;

  const people2 = addressBook2.people;
  const alice2 = people2.get(1);

  t.equal(people2.length, 2);
  t.equal(alice2.name, "Alice");
  t.equal(alice2.email, "alice@example.com");
  t.equal(alice2.id, 456);
});

test("adoption", () => {
  const m = new capnp.Message();
  const s = m.getSegment(0);
  const addressBook = m.initRoot(AddressBook);
  const people1 = addressBook.initPeople(1);
  const alice1 = people1.get(0);

  alice1.name = "Alice";
  alice1.email = "alice@example.com";
  alice1.id = 456;

  const o = addressBook.disownPeople();

  t.ok(s.isWordZero(0x08), "should null the pointer");
  t.notOk(
    s.isWordZero(0x10),
    "should not wipe out the composite list tag word",
  );
  t.notOk(s.isWordZero(0x40), "should not touch the content");
  t.ok(capnp.Pointer.isNull(people1), "should null the original pointer");

  addressBook.adoptPeople(o);

  const people2 = addressBook.people;
  const alice2 = people2.get(0);

  t.equal(alice2.name, "Alice");
  t.equal(alice2.email, "alice@example.com");
  t.equal(alice2.id, 456);
  t.equal(alice1.id, 456);

  t.throws(
    () => addressBook.adoptPeople(o),
    // "should not allow multiple adoption",
  );
});

test("overwrite", () => {
  const m = new capnp.Message();
  const s = m.getSegment(0);
  const addressBook = m.initRoot(AddressBook);
  const alice = addressBook.initPeople(1).get(0);

  alice.name = "Alex";
  alice.name = "Alice";

  t.ok(s.isWordZero(0x40), "should zero out the old string");

  addressBook.initPeople(1);

  t.ok(s.isWordZero(0x40), "should zero out every string");
  t.ok(s.isWordZero(0x48), "should zero out every string");
});
