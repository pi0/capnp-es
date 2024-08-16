// Based on https://github.com/jdiaz5513/capnp-ts (MIT - Julián Díaz)

// A collection of tests regarding protocol upgrade/downgrade behavior.

import { test, assert as t } from "vitest";
import * as capnp from "capnp-es";

import { Upgrade as UpgradeV1 } from "../fixtures/upgrade-v1.ts";
import { Upgrade as UpgradeV2 } from "../fixtures/upgrade-v2.ts";

test("schema upgrade with legacy data", () => {
  // This test creates a message with a legacy version of a struct, then attempts to read that same struct data using a
  // newer version of the schema (it has more data fields). This should force the library to shallow copy and reallocate
  // space for the struct so that there's enough space to write to the new fields. Additionally they should default to
  // the equivalent zero value for each of those fields. The test is repeated once for Message's `getRoot` and again for
  // `getSelfReference` in the UpgradeV2 class.

  const m = new capnp.Message();
  const u1 = m.initRoot(UpgradeV1);

  u1.setLegacyId(0x55_55);
  u1.setLegacyName("hi");

  const v1Child = u1.initSelfReference();
  v1Child.setLegacyId(0x66_66);
  v1Child.setLegacyName("hihi");

  const v1ListChild = u1.initSelfReferences(1).get(0);
  v1ListChild.setLegacyId(0x99_99);
  v1ListChild.setLegacyName("hihihi");

  const u2 = m.getRoot(UpgradeV2);

  // t.comment("should null out the self-reference pointers");
  t.ok(
    capnp.Pointer.isNull(v1Child),
    "should null out the self-reference pointer",
  );
  t.ok(
    m.getSegment(0).isWordZero(0x18),
    "should null out the self-reference pointer",
  );

  // t.comment("should still be able to access the legacy data from both classes");
  t.equal(u1.getLegacyId(), 0x55_55);
  t.equal(u1.getLegacyName(), "hi");
  t.equal(u2.getLegacyId(), 0x55_55);
  t.equal(u2.getLegacyName(), "hi");

  // t.comment("should be able to set new fields");
  t.doesNotThrow(() => {
    u2.setNewHotnessId(0x77_77);
    u2.setNewHotnessName("HI");
  });

  const v2Child = u2.getSelfReference();

  // The child should have been resized now. Make sure the old contents were erased, the old data is still intact and
  // that there's room for the new fields now.

  t.doesNotThrow(() => {
    v2Child.setNewHotnessId(0x88_88);
    v2Child.setNewHotnessName("HIHI");
  }, "should be able to set new child fields");

  t.ok(
    capnp.Pointer.isNull(v1Child),
    "should not be able to access the old child",
  );
  t.equal(
    v2Child.getLegacyId(),
    0x66_66,
    "should preserve the child's legacy id",
  );
  t.equal(
    v2Child.getLegacyName(),
    "hihi",
    "should preserve the child's legacy name",
  );

  // Make sure that composite lists get resized too.
  const v2ListChild = u2.getSelfReferences().get(0);

  t.doesNotThrow(() => {
    v2ListChild.setNewHotnessId(0xaa_aa);
    v2ListChild.setNewHotnessName("HIHIHI");
  }, "should be able to set new composite list fields");

  // t.comment("should preserve composite list data");
  t.equal(
    v2ListChild.getLegacyId(),
    0x99_99,
    "should preserve composite list data",
  );
  t.equal(
    v2ListChild.getLegacyName(),
    "hihihi",
    "should preserve composite list data",
  );
});
