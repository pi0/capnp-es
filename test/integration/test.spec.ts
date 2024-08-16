// Based on https://github.com/jdiaz5513/capnp-ts (MIT - Julián Díaz)

import { test, assert as t } from "vitest";
import * as capnp from "capnp-es";

import * as T from "../fixtures/test.ts";

const FLOAT_TOLERANCE = 0.000_001;

test("TestEnum", () => {
  t.equal(T.TestEnum.FOO, 0);
  t.equal(T.TestEnum.BAR, 1);
  t.equal(T.TestEnum.BAZ, 2);
  t.equal(T.TestEnum.QUX, 3);
  t.equal(T.TestEnum.QUUX, 4);
  t.equal(T.TestEnum.CORGE, 5);
  t.equal(T.TestEnum.GRAULT, 6);
  t.equal(T.TestEnum.GARPLY, 7);
});

test("TestAllTypes", () => {
  const allTypes = new capnp.Message().initRoot(T.TestAllTypes);

  allTypes.setBoolField(true);
  t.equal(allTypes.getBoolField(), true);

  allTypes.setInt8Field(-8);
  t.equal(allTypes.getInt8Field(), -8);

  allTypes.setInt16Field(-10_000);
  t.equal(allTypes.getInt16Field(), -10_000);

  allTypes.setInt32Field(-1_000_000);
  t.equal(allTypes.getInt32Field(), -1_000_000);

  allTypes.setInt64Field(BigInt(-0xc5_4c_72_d9));
  t.equal(allTypes.getInt64Field(), BigInt(-0xc5_4c_72_d9));

  allTypes.setUInt8Field(8);
  t.equal(allTypes.getUInt8Field(), 8);

  allTypes.setUInt16Field(65_525);
  t.equal(allTypes.getUInt16Field(), 65_525);

  allTypes.setUInt32Field(99_999_999);
  t.equal(allTypes.getUInt32Field(), 99_999_999);

  allTypes.setUInt64Field(BigInt(1_099_511_627_775));
  t.equal(allTypes.getUInt64Field(), BigInt(1_099_511_627_775));

  allTypes.setFloat32Field(-9.999);
  t.ok(Math.abs(allTypes.getFloat32Field() - -9.999) < FLOAT_TOLERANCE);

  allTypes.setFloat64Field(-999_999_999_999.9);
  t.ok(
    Math.abs(allTypes.getFloat64Field() - -999_999_999_999.9) < FLOAT_TOLERANCE,
  );

  allTypes.setTextField("text");
  t.equal(allTypes.getTextField(), "text");

  allTypes.initStructField().setInt32Field(-999);
  t.equal(allTypes.getStructField().getInt32Field(), -999);

  allTypes.setEnumField(T.TestEnum.CORGE);
  t.equal(allTypes.getEnumField(), T.TestEnum.CORGE);

  allTypes.initVoidList(10);
  t.equal(allTypes.getVoidList().getLength(), 10);

  allTypes.initBoolList(2).set(1, true);
  t.equal(allTypes.getBoolList().get(1), true);

  allTypes.initInt8List(3).set(2, -8);
  t.equal(allTypes.getInt8List().get(2), -8);

  allTypes.initInt16List(3).set(2, -88);
  t.equal(allTypes.getInt16List().get(2), -88);

  allTypes.initInt32List(3).set(2, -888);
  t.equal(allTypes.getInt32List().get(2), -888);

  allTypes.initInt64List(3).set(2, BigInt(-8888));
  t.equal(allTypes.getInt64List().get(2), BigInt(-8888));

  allTypes.initUInt8List(3).set(2, 8);
  t.equal(allTypes.getUInt8List().get(2), 8);

  allTypes.initUInt16List(3).set(2, 88);
  t.equal(allTypes.getUInt16List().get(2), 88);

  allTypes.initUInt32List(3).set(2, 888);
  t.equal(allTypes.getUInt32List().get(2), 888);

  allTypes.initUInt64List(3).set(2, BigInt(8888));
  t.equal(allTypes.getUInt64List().get(2), BigInt(8888));

  allTypes.initTextList(4).set(2, "hi");
  t.equal(allTypes.getTextList().get(2), "hi");

  allTypes.initStructList(3).get(1).setUInt32Field(9999);
  t.equal(allTypes.getStructList().get(1).getUInt32Field(), 9999);

  allTypes.initEnumList(2).set(1, T.TestEnum.FOO);
  t.equal(allTypes.getEnumList().get(1), T.TestEnum.FOO);
});
