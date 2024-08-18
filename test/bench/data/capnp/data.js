// This file has been automatically generated by capnp-es.
import * as capnp from "capnp-es";
export const _capnpFileId = BigInt("0xb597bf4897e54f89");
export class AddressBook extends capnp.Struct {
  static _capnp = {
    displayName: "AddressBook",
    id: "f724540a01e98224",
    size: new capnp.ObjectSize(0, 1),
  };
  static _People;
  adoptPeople(value) {
    capnp.Struct.adopt(value, capnp.Struct.getPointer(0, this));
  }
  disownPeople() {
    return capnp.Struct.disown(this.getPeople());
  }
  getPeople() {
    return capnp.Struct.getList(0, AddressBook._People, this);
  }
  hasPeople() {
    return !capnp.Struct.isNull(capnp.Struct.getPointer(0, this));
  }
  initPeople(length) {
    return capnp.Struct.initList(0, AddressBook._People, length, this);
  }
  setPeople(value) {
    capnp.Struct.copyFrom(value, capnp.Struct.getPointer(0, this));
  }
  toString() {
    return "AddressBook_" + super.toString();
  }
}
export var Person_PhoneNumber_Type;
(function (Person_PhoneNumber_Type) {
  Person_PhoneNumber_Type[(Person_PhoneNumber_Type["MOBILE"] = 0)] = "MOBILE";
  Person_PhoneNumber_Type[(Person_PhoneNumber_Type["HOME"] = 1)] = "HOME";
  Person_PhoneNumber_Type[(Person_PhoneNumber_Type["WORK"] = 2)] = "WORK";
})(Person_PhoneNumber_Type || (Person_PhoneNumber_Type = {}));
export class Person_PhoneNumber extends capnp.Struct {
  static Type = Person_PhoneNumber_Type;
  static _capnp = {
    displayName: "PhoneNumber",
    id: "cba8ed6b45001ccc",
    size: new capnp.ObjectSize(8, 1),
  };
  getNumber() {
    return capnp.Struct.getText(0, this);
  }
  setNumber(value) {
    capnp.Struct.setText(0, value, this);
  }
  getType() {
    return capnp.Struct.getUint16(0, this);
  }
  setType(value) {
    capnp.Struct.setUint16(0, value, this);
  }
  toString() {
    return "Person_PhoneNumber_" + super.toString();
  }
}
export var Person_Employment_Which;
(function (Person_Employment_Which) {
  Person_Employment_Which[(Person_Employment_Which["EMPLOYER"] = 1)] =
    "EMPLOYER";
  Person_Employment_Which[(Person_Employment_Which["SCHOOL"] = 2)] = "SCHOOL";
  Person_Employment_Which[(Person_Employment_Which["UNEMPLOYED"] = 0)] =
    "UNEMPLOYED";
  Person_Employment_Which[(Person_Employment_Which["SELF_EMPLOYED"] = 3)] =
    "SELF_EMPLOYED";
})(Person_Employment_Which || (Person_Employment_Which = {}));
export class Person_Employment extends capnp.Struct {
  static EMPLOYER = Person_Employment_Which.EMPLOYER;
  static SCHOOL = Person_Employment_Which.SCHOOL;
  static UNEMPLOYED = Person_Employment_Which.UNEMPLOYED;
  static SELF_EMPLOYED = Person_Employment_Which.SELF_EMPLOYED;
  static _capnp = {
    displayName: "employment",
    id: "927f49708287c3b6",
    size: new capnp.ObjectSize(8, 4),
  };
  getEmployer() {
    capnp.Struct.testWhich(
      "employer",
      capnp.Struct.getUint16(6, this),
      1,
      this,
    );
    return capnp.Struct.getText(3, this);
  }
  isEmployer() {
    return capnp.Struct.getUint16(6, this) === 1;
  }
  setEmployer(value) {
    capnp.Struct.setUint16(6, 1, this);
    capnp.Struct.setText(3, value, this);
  }
  getSchool() {
    capnp.Struct.testWhich("school", capnp.Struct.getUint16(6, this), 2, this);
    return capnp.Struct.getText(3, this);
  }
  isSchool() {
    return capnp.Struct.getUint16(6, this) === 2;
  }
  setSchool(value) {
    capnp.Struct.setUint16(6, 2, this);
    capnp.Struct.setText(3, value, this);
  }
  getUnemployed() {
    capnp.Struct.testWhich(
      "unemployed",
      capnp.Struct.getUint16(6, this),
      0,
      this,
    );
    return capnp.Struct.getBit(32, this);
  }
  isUnemployed() {
    return capnp.Struct.getUint16(6, this) === 0;
  }
  setUnemployed(value) {
    capnp.Struct.setUint16(6, 0, this);
    capnp.Struct.setBit(32, value, this);
  }
  getSelfEmployed() {
    capnp.Struct.testWhich(
      "selfEmployed",
      capnp.Struct.getUint16(6, this),
      3,
      this,
    );
    return capnp.Struct.getBit(32, this);
  }
  isSelfEmployed() {
    return capnp.Struct.getUint16(6, this) === 3;
  }
  setSelfEmployed(value) {
    capnp.Struct.setUint16(6, 3, this);
    capnp.Struct.setBit(32, value, this);
  }
  toString() {
    return "Person_Employment_" + super.toString();
  }
  which() {
    return capnp.Struct.getUint16(6, this);
  }
}
export class Person extends capnp.Struct {
  static PhoneNumber = Person_PhoneNumber;
  static _capnp = {
    displayName: "Person",
    id: "efbbc4e996f07104",
    size: new capnp.ObjectSize(8, 4),
  };
  static _Phones;
  getId() {
    return capnp.Struct.getUint32(0, this);
  }
  setId(value) {
    capnp.Struct.setUint32(0, value, this);
  }
  getName() {
    return capnp.Struct.getText(0, this);
  }
  setName(value) {
    capnp.Struct.setText(0, value, this);
  }
  getEmail() {
    return capnp.Struct.getText(1, this);
  }
  setEmail(value) {
    capnp.Struct.setText(1, value, this);
  }
  adoptPhones(value) {
    capnp.Struct.adopt(value, capnp.Struct.getPointer(2, this));
  }
  disownPhones() {
    return capnp.Struct.disown(this.getPhones());
  }
  getPhones() {
    return capnp.Struct.getList(2, Person._Phones, this);
  }
  hasPhones() {
    return !capnp.Struct.isNull(capnp.Struct.getPointer(2, this));
  }
  initPhones(length) {
    return capnp.Struct.initList(2, Person._Phones, length, this);
  }
  setPhones(value) {
    capnp.Struct.copyFrom(value, capnp.Struct.getPointer(2, this));
  }
  getEmployment() {
    return capnp.Struct.getAs(Person_Employment, this);
  }
  initEmployment() {
    return capnp.Struct.getAs(Person_Employment, this);
  }
  toString() {
    return "Person_" + super.toString();
  }
}
AddressBook._People = capnp.CompositeList(Person);
Person._Phones = capnp.CompositeList(Person_PhoneNumber);