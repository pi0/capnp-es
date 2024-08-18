# Based on https://github.com/jdiaz5513/capnp-ts (MIT - Julián Díaz)
@0xb597bf4897e54f89;

struct AddressBook {
  people @0 :List(Person);
}

struct Person {
  id @0 :UInt32;
  name @1 :Text;
  email @2 :Text;

  phones @3 :List(PhoneNumber);
  struct PhoneNumber {
    number @0 :Text;
    type @1 :Type;
    enum Type {
      mobile @0;
      home @1;
      work @2;
    }
  }

  employment :union {
    employer @5 :Text;
    school @6 :Text;
    unemployed @4 :Bool;
    selfEmployed @7 :Bool;
  }
}

