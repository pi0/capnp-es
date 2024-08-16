// This file has been automatically generated by capnp-es.
import * as capnp from "capnp-es";
export const _capnpFileId = BigInt("0xef1b5abe02e1f8d4");
export enum Person_PhoneNumber_Type {
  MOBILE,
  HOME,
  WORK,
}
export class Person_PhoneNumber extends capnp.Struct {
  static readonly Type = Person_PhoneNumber_Type;
  static readonly _capnp = {
    displayName: "PhoneNumber",
    id: "af663da31c027e0e",
    size: new capnp.ObjectSize(8, 1),
  };
  getNumber(): string {
    return capnp.Struct.getText(0, this);
  }
  setNumber(value: string): void {
    capnp.Struct.setText(0, value, this);
  }
  getType(): Person_PhoneNumber_Type {
    return capnp.Struct.getUint16(0, this);
  }
  setType(value: Person_PhoneNumber_Type): void {
    capnp.Struct.setUint16(0, value, this);
  }
  toString(): string {
    return "Person_PhoneNumber_" + super.toString();
  }
}
export enum Person_Employment_Which {
  UNEMPLOYED = 0,
  EMPLOYER = 1,
  SCHOOL = 2,
  SELF_EMPLOYED = 3,
}
export class Person_Employment extends capnp.Struct {
  static readonly UNEMPLOYED = Person_Employment_Which.UNEMPLOYED;
  static readonly EMPLOYER = Person_Employment_Which.EMPLOYER;
  static readonly SCHOOL = Person_Employment_Which.SCHOOL;
  static readonly SELF_EMPLOYED = Person_Employment_Which.SELF_EMPLOYED;
  static readonly _capnp = {
    displayName: "employment",
    id: "e88780a90af3da0c",
    size: new capnp.ObjectSize(8, 4),
  };
  isUnemployed(): boolean {
    return capnp.Struct.getUint16(4, this) === 0;
  }
  setUnemployed(): void {
    capnp.Struct.setUint16(4, 0, this);
  }
  getEmployer(): string {
    capnp.Struct.testWhich(
      "employer",
      capnp.Struct.getUint16(4, this),
      1,
      this,
    );
    return capnp.Struct.getText(3, this);
  }
  isEmployer(): boolean {
    return capnp.Struct.getUint16(4, this) === 1;
  }
  setEmployer(value: string): void {
    capnp.Struct.setUint16(4, 1, this);
    capnp.Struct.setText(3, value, this);
  }
  getSchool(): string {
    capnp.Struct.testWhich("school", capnp.Struct.getUint16(4, this), 2, this);
    return capnp.Struct.getText(3, this);
  }
  isSchool(): boolean {
    return capnp.Struct.getUint16(4, this) === 2;
  }
  setSchool(value: string): void {
    capnp.Struct.setUint16(4, 2, this);
    capnp.Struct.setText(3, value, this);
  }
  isSelfEmployed(): boolean {
    return capnp.Struct.getUint16(4, this) === 3;
  }
  setSelfEmployed(): void {
    capnp.Struct.setUint16(4, 3, this);
  }
  toString(): string {
    return "Person_Employment_" + super.toString();
  }
  which(): Person_Employment_Which {
    return capnp.Struct.getUint16(4, this);
  }
}
export class Person extends capnp.Struct {
  static readonly PhoneNumber = Person_PhoneNumber;
  static readonly _capnp = {
    displayName: "Person",
    id: "d94307c4985be8e7",
    size: new capnp.ObjectSize(8, 4),
  };
  static _Phones: capnp.ListCtor<Person_PhoneNumber>;
  getId(): number {
    return capnp.Struct.getUint32(0, this);
  }
  setId(value: number): void {
    capnp.Struct.setUint32(0, value, this);
  }
  getName(): string {
    return capnp.Struct.getText(0, this);
  }
  setName(value: string): void {
    capnp.Struct.setText(0, value, this);
  }
  getEmail(): string {
    return capnp.Struct.getText(1, this);
  }
  setEmail(value: string): void {
    capnp.Struct.setText(1, value, this);
  }
  adoptPhones(value: capnp.Orphan<capnp.List<Person_PhoneNumber>>): void {
    capnp.Struct.adopt(value, capnp.Struct.getPointer(2, this));
  }
  disownPhones(): capnp.Orphan<capnp.List<Person_PhoneNumber>> {
    return capnp.Struct.disown(this.getPhones());
  }
  getPhones(): capnp.List<Person_PhoneNumber> {
    return capnp.Struct.getList(2, Person._Phones, this);
  }
  hasPhones(): boolean {
    return !capnp.Struct.isNull(capnp.Struct.getPointer(2, this));
  }
  initPhones(length: number): capnp.List<Person_PhoneNumber> {
    return capnp.Struct.initList(2, Person._Phones, length, this);
  }
  setPhones(value: capnp.List<Person_PhoneNumber>): void {
    capnp.Struct.copyFrom(value, capnp.Struct.getPointer(2, this));
  }
  getEmployment(): Person_Employment {
    return capnp.Struct.getAs(Person_Employment, this);
  }
  initEmployment(): Person_Employment {
    return capnp.Struct.getAs(Person_Employment, this);
  }
  toString(): string {
    return "Person_" + super.toString();
  }
}
export class AddressBook extends capnp.Struct {
  static readonly _capnp = {
    displayName: "AddressBook",
    id: "c06ea6d038a357bb",
    size: new capnp.ObjectSize(0, 1),
  };
  static _People: capnp.ListCtor<Person>;
  adoptPeople(value: capnp.Orphan<capnp.List<Person>>): void {
    capnp.Struct.adopt(value, capnp.Struct.getPointer(0, this));
  }
  disownPeople(): capnp.Orphan<capnp.List<Person>> {
    return capnp.Struct.disown(this.getPeople());
  }
  getPeople(): capnp.List<Person> {
    return capnp.Struct.getList(0, AddressBook._People, this);
  }
  hasPeople(): boolean {
    return !capnp.Struct.isNull(capnp.Struct.getPointer(0, this));
  }
  initPeople(length: number): capnp.List<Person> {
    return capnp.Struct.initList(0, AddressBook._People, length, this);
  }
  setPeople(value: capnp.List<Person>): void {
    capnp.Struct.copyFrom(value, capnp.Struct.getPointer(0, this));
  }
  toString(): string {
    return "AddressBook_" + super.toString();
  }
}
Person._Phones = capnp.CompositeList(Person_PhoneNumber);
AddressBook._People = capnp.CompositeList(Person);
