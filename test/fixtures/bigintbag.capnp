# Based on https://github.com/jdiaz5513/capnp-ts (MIT - Julián Díaz)

@0xe3fca095c1cb2e87;

struct BigIntBag {
  signed @0 :Int64;
  unsigned @1 :UInt64;
  defaultSigned @2 :Int64 = -987654321987654321;
  defaultUnsigned @3 :UInt64 = 987654321987654321;
}
