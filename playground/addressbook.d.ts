import * as capnp from "capnp-es";
export declare const _capnpFileId: bigint;
export declare enum Person_PhoneNumber_Type {
    MOBILE = 0,
    HOME = 1,
    WORK = 2
}
export declare class Person_PhoneNumber extends capnp.Struct {
    static readonly Type: typeof Person_PhoneNumber_Type;
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
export declare enum Person_Employment_Which {
    UNEMPLOYED = 0,
    EMPLOYER = 1,
    SCHOOL = 2,
    SELF_EMPLOYED = 3
}
export declare class Person_Employment extends capnp.Struct {
    static readonly UNEMPLOYED = Person_Employment_Which.UNEMPLOYED;
    static readonly EMPLOYER = Person_Employment_Which.EMPLOYER;
    static readonly SCHOOL = Person_Employment_Which.SCHOOL;
    static readonly SELF_EMPLOYED = Person_Employment_Which.SELF_EMPLOYED;
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
