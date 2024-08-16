# Based on https://github.com/jdiaz5513/capnp-ts (MIT - Julián Díaz)

@0xc81a48fa54bfdd1e;

struct Upgrade {

  legacyName @0 :Text;

  legacyId @1 :Int32;

  selfReference @2 :Upgrade;

  selfReferences @3 :List(Upgrade);

}
