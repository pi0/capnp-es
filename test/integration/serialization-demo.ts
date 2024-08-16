// Based on https://github.com/jdiaz5513/capnp-ts (MIT - Julián Díaz)

// This file was **not** generated automatically. Historically it served as a template for the code generator.
// Notable differences from actual generated files are in comments below.

/* eslint-disable */

import * as capnp from "capnp-es";

// ObjectSize must be brought into this file's scope, otherwise its type would not be usable. Struct is also brought in
// to keep the generate file size down (it's referenced a LOT!).

export const _id = "b597bf4897e54f89";

export class AddressBook extends capnp.Struct {
  static _capnp = {
    displayName: "AddressBook",
    id: "",
    size: new capnp.ObjectSize(0, 1),
  };
  static People: capnp.ListCtor<Person>;

  adoptPeople(value: capnp.Orphan<capnp.List<Person>>): void {
    // There is no extra overhead to proxy through to the Pointer static methods via Struct like this since the original
    // function reference is copied as a static property.
    capnp.Struct.adopt(value, capnp.Struct.getPointer(0, this));
  }

  disownPeople(): capnp.Orphan<capnp.List<Person>> {
    return capnp.Struct.disown(this.getPeople());
  }

  getPeople(): capnp.List<Person> {
    return capnp.Struct.getList(0, AddressBook.People, this);
  }

  hasPeople(): boolean {
    return !capnp.Struct.isNull(capnp.Struct.getPointer(0, this));
  }

  initPeople(length: number): capnp.List<Person> {
    return capnp.Struct.initList(0, AddressBook.People, length, this);
  }

  setPeople(value: capnp.List<Person>): void {
    capnp.Struct.copyFrom(value, capnp.Struct.getPointer(0, this));
  }

  toString() {
    return `AddressBook_${super.toString()}`;
  }
}

declare namespace Person_PhoneNumber_Type {
  export const _displayName = "Type";
  export const _id = "98bef1051277b9df";
}

enum Person_PhoneNumber_Type {
  MOBILE = 0,
  HOME = 1,
  WORK = 2,
}

class Person_Employment extends capnp.Struct {
  static readonly _capnp = {
    displayName: "Employment",
    id: "927f49708287c3b6",
    size: new capnp.ObjectSize(8, 4),
  };
  static UNEMPLOYED = 0;
  static EMPLOYER = 1;
  static SCHOOL = 2;
  static SELF_EMPLOYED = 3;

  _initGroup = () => {
    capnp.Struct.setUint16(4, 0, this);
  };

  getEmployer(): string {
    capnp.Struct.testWhich("employment", this.which(), 1, this);

    return capnp.Struct.getText(3, this);
  }

  getSchool(): string {
    capnp.Struct.testWhich("employment", this.which(), 2, this);

    return capnp.Struct.getText(3, this);
  }

  isEmployer(): boolean {
    return this.which() === 1;
  }

  isSchool(): boolean {
    return this.which() === 2;
  }

  isSelfEmployed(): boolean {
    return this.which() === 3;
  }

  isUnemployed(): boolean {
    return this.which() === 0;
  }

  hasEmployer(): boolean {
    capnp.Struct.testWhich("employment", this.which(), 1, this);

    return !capnp.Struct.isNull(capnp.Struct.getPointer(3, this));
  }

  hasSchool(): boolean {
    capnp.Struct.testWhich("employment", this.which(), 2, this);

    return !capnp.Struct.isNull(capnp.Struct.getPointer(3, this));
  }

  setEmployer(value: string): void {
    capnp.Struct.setUint16(4, 1, this);
    capnp.Struct.setText(3, value, this);
  }

  setSchool(value: string): void {
    capnp.Struct.setUint16(4, 2, this);
    capnp.Struct.setText(3, value, this);
  }

  setSelfEmployed(): void {
    capnp.Struct.setUint16(4, 3, this);
  }

  setUnemployed(): void {
    capnp.Struct.setUint16(4, 0, this);
  }

  toString(): string {
    return `Person_Employment_${super.toString()}`;
  }

  which(): number {
    return capnp.Struct.getUint16(4, this);
  }
}

class Person_PhoneNumber extends capnp.Struct {
  static readonly _capnp = {
    displayName: "PhoneNumber",
    id: "cba8ed6b45001ccc",
    size: new capnp.ObjectSize(2, 1),
  };
  static readonly Type = Person_PhoneNumber_Type;

  getNumber(): string {
    return capnp.Struct.getText(0, this);
  }

  getType(): Person_PhoneNumber_Type {
    return capnp.Struct.getUint16(0, this);
  }

  setNumber(value: string): void {
    capnp.Struct.setText(0, value, this);
  }

  setType(value: Person_PhoneNumber_Type): void {
    capnp.Struct.setUint16(0, value, this);
  }

  toString(): string {
    return `Person_PhoneNumber_${super.toString()}`;
  }
}

export class Person extends capnp.Struct {
  static readonly _capnp = {
    displayName: "Person",
    id: "efbbc4e996f07104",
    size: new capnp.ObjectSize(8, 4),
  };
  static readonly Employment = Person_Employment;
  static readonly PhoneNumber = Person_PhoneNumber;
  static Phones: capnp.ListCtor<Person_PhoneNumber>;

  adoptPhones(value: capnp.Orphan<capnp.List<Person_PhoneNumber>>): void {
    capnp.Struct.adopt(value, capnp.Struct.getPointer(2, this));
  }

  disownPhones(): capnp.Orphan<capnp.List<Person_PhoneNumber>> {
    return capnp.Struct.disown(this.getPhones());
  }

  getEmail(): string {
    return capnp.Struct.getText(1, this);
  }

  getEmployment(): Person_Employment {
    return capnp.Struct.getAs(Person_Employment, this);
  }

  getId(): number {
    return capnp.Struct.getUint32(0, this);
  }

  getName(): string {
    return capnp.Struct.getText(0, this);
  }

  getPhones(): capnp.List<Person_PhoneNumber> {
    return capnp.Struct.getList(2, Person.Phones, this);
  }

  hasEmail(): boolean {
    return !capnp.Struct.isNull(capnp.Struct.getPointer(1, this));
  }

  hasName(): boolean {
    return !capnp.Struct.isNull(capnp.Struct.getPointer(0, this));
  }

  hasPhones(): boolean {
    return !capnp.Struct.isNull(capnp.Struct.getPointer(2, this));
  }

  initEmployment(): Person_Employment {
    const e = this.getEmployment();
    e._initGroup();
    return e;
  }

  initPhones(length: number): capnp.List<Person_PhoneNumber> {
    return capnp.Struct.initList(2, Person.Phones, length, this);
  }

  setEmail(value: string): void {
    capnp.Struct.setText(1, value, this);
  }

  setId(value: number): void {
    capnp.Struct.setUint32(0, value, this);
  }

  setName(value: string): void {
    capnp.Struct.setText(0, value, this);
  }

  setPhones(value: capnp.List<Person_PhoneNumber>): void {
    capnp.Struct.copyFrom(value, capnp.Struct.getPointer(2, this));
  }

  toString(): string {
    return `Person_${super.toString()}`;
  }
}

AddressBook.People = capnp.CompositeList(Person);
Person.Phones = capnp.CompositeList(Person_PhoneNumber);
