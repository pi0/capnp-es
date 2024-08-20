// Based on https://github.com/jdiaz5513/capnp-ts (MIT - Julián Díaz)

// Collection of tests for various list pointer behaviors, especially around handling of nested types.

import { test, assert as t } from "vitest";

import * as capnp from "capnp-es";

import { ListMania } from "../fixtures/list-mania.ts";

test("loop de loop", () => {
  t.doesNotThrow(() => {
    const m = new capnp.Message();
    const listMania = m.initRoot(ListMania);

    listMania.initCompositeList(1);

    const compositeList = listMania.compositeList;
    // TODO: Interfaces are not implemented yet.
    // const interfaceList = listMania.getInterfaceList();

    compositeList.get(0).self = listMania;
    compositeList.set(0, compositeList.get(0));
    compositeList.get(0).self = listMania;

    // t.comment("should zero out overwritten regions");

    const s = m.getSegment(0);
    t.ok(s.isWordZero(0x0_a0));
    t.ok(s.isWordZero(0x1_18));
  });
});

test("1 of each list", () => {
  t.doesNotThrow(() => {
    const m = new capnp.Message();
    const listMania = m.initRoot(ListMania);

    listMania.initBoolList(1);
    listMania.initCompositeList(1);
    listMania.initDataList(1);
    listMania.initFloat32List(1);
    listMania.initFloat64List(1);
    listMania.initInt8List(1);
    listMania.initInt16List(1);
    listMania.initInt32List(1);
    listMania.initInt64List(1);
    listMania.initInterfaceList(1);
    listMania.initTextList(1);
    listMania.initUint8List(1);
    listMania.initUint16List(1);
    listMania.initUint32List(1);
    listMania.initUint64List(1);
    listMania.initVoidList(1);

    const boolList = listMania.boolList;
    const compositeList = listMania.compositeList;
    const dataList = listMania.dataList;
    const float32List = listMania.float32List;
    const float64List = listMania.float64List;
    const int8List = listMania.int8List;
    const int16List = listMania.int16List;
    const int32List = listMania.int32List;
    const int64List = listMania.int64List;
    const interfaceList = listMania.interfaceList;
    const textList = listMania.textList;
    const uint8List = listMania.uint8List;
    const uint16List = listMania.uint16List;
    const uint32List = listMania.uint32List;
    const uint64List = listMania.uint64List;
    const voidList = listMania.voidList;

    // Write some junk data to test erasure after disposal.

    boolList.set(0, true);
    float32List.set(0, 1);
    float64List.set(0, 1);
    int8List.set(0, 1);
    int16List.set(0, 1);
    int32List.set(0, 1);
    int64List.set(0, BigInt(1));
    textList.set(0, "hi");
    uint8List.set(0, 1);
    uint16List.set(0, 1);
    uint32List.set(0, 1);
    uint64List.set(0, BigInt(1));

    capnp.utils.disown(boolList).dispose();
    capnp.utils.disown(compositeList).dispose();
    capnp.utils.disown(dataList).dispose();
    capnp.utils.disown(float32List).dispose();
    capnp.utils.disown(float64List).dispose();
    capnp.utils.disown(int8List).dispose();
    capnp.utils.disown(int16List).dispose();
    capnp.utils.disown(int32List).dispose();
    capnp.utils.disown(int64List).dispose();
    capnp.utils.disown(interfaceList).dispose();
    capnp.utils.disown(textList).dispose();
    capnp.utils.disown(uint8List).dispose();
    capnp.utils.disown(uint16List).dispose();
    capnp.utils.disown(uint32List).dispose();
    capnp.utils.disown(uint64List).dispose();
    capnp.utils.disown(voidList).dispose();

    // Everything after the root pointer should be zero now.

    // t.comment("should zero out disposed orphans");

    const s = m.getSegment(0);
    for (let i = 8; i < s.byteLength; i += 8) t.ok(s.isWordZero(i));
  });
});
