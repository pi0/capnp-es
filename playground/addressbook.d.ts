import * as capnp from "capnp-es";
export declare const _capnpFileId: bigint;
export declare const Person_PhoneNumber_Type: {
  readonly MOBILE: 0;
  readonly HOME: 1;
  readonly WORK: 2;
};
export type Person_PhoneNumber_Type = (typeof Person_PhoneNumber_Type)[keyof typeof Person_PhoneNumber_Type];
export declare class Person_PhoneNumber extends capnp.Struct {
  static readonly Type: {
    readonly MOBILE: 0;
    readonly HOME: 1;
    readonly WORK: 2;
  };
  static readonly _capnp: {
    displayName: string;
    id: string;
    size: capnp.ObjectSize;
  };
  getNumber(): string;
  setNumber(value: string): void;
  getType(): Person_PhoneNumber_Type;
  setType(value: Person_PhoneNumber_Type): void;
  toString(): string;
}
export declare const Person_Employment_Which: {
  readonly UNEMPLOYED: 0;
  readonly EMPLOYER: 1;
  readonly SCHOOL: 2;
  readonly SELF_EMPLOYED: 3;
};
export type Person_Employment_Which = (typeof Person_Employment_Which)[keyof typeof Person_Employment_Which];
export declare class Person_Employment extends capnp.Struct {
  static readonly UNEMPLOYED: 0;
  static readonly EMPLOYER: 1;
  static readonly SCHOOL: 2;
  static readonly SELF_EMPLOYED: 3;
  static readonly _capnp: {
    displayName: string;
    id: string;
    size: capnp.ObjectSize;
  };
  isUnemployed(): boolean;
  setUnemployed(): void;
  getEmployer(): string;
  isEmployer(): boolean;
  setEmployer(value: string): void;
  getSchool(): string;
  isSchool(): boolean;
  setSchool(value: string): void;
  isSelfEmployed(): boolean;
  setSelfEmployed(): void;
  toString(): string;
  which(): Person_Employment_Which;
}
export declare class Person extends capnp.Struct {
  static readonly PhoneNumber: typeof Person_PhoneNumber;
  static readonly _capnp: {
    displayName: string;
    id: string;
    size: capnp.ObjectSize;
  };
  static _Phones: capnp.ListCtor<Person_PhoneNumber>;
  getId(): number;
  setId(value: number): void;
  getName(): string;
  setName(value: string): void;
  getEmail(): string;
  setEmail(value: string): void;
  adoptPhones(value: capnp.Orphan<capnp.List<Person_PhoneNumber>>): void;
  disownPhones(): capnp.Orphan<capnp.List<Person_PhoneNumber>>;
  getPhones(): capnp.List<Person_PhoneNumber>;
  hasPhones(): boolean;
  initPhones(length: number): capnp.List<Person_PhoneNumber>;
  setPhones(value: capnp.List<Person_PhoneNumber>): void;
  getEmployment(): Person_Employment;
  initEmployment(): Person_Employment;
  toString(): string;
}
export declare class AddressBook extends capnp.Struct {
  static readonly _capnp: {
    displayName: string;
    id: string;
    size: capnp.ObjectSize;
  };
  static _People: capnp.ListCtor<Person>;
  adoptPeople(value: capnp.Orphan<capnp.List<Person>>): void;
  disownPeople(): capnp.Orphan<capnp.List<Person>>;
  getPeople(): capnp.List<Person>;
  hasPeople(): boolean;
  initPeople(length: number): capnp.List<Person>;
  setPeople(value: capnp.List<Person>): void;
  toString(): string;
}
