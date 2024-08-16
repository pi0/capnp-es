# Based on https://github.com/jdiaz5513/capnp-ts (MIT - Julián Díaz)\

@0xb4dbefd56457c333;

struct ListMania {

  # lol jk this is not supported
  # anyPointerList @0 :List(AnyPointer);

  boolList @0 :List(Bool);

  # weeeeee a circular reference
  compositeList @1 :List(ListManiaStruct);

  dataList @2 :List(Data);

  float32List @3 :List(Float32);

  float64List @4 :List(Float64);

  int8List @5 :List(Int8);

  int16List @6 :List(Int16);

  int32List @7 :List(Int32);

  int64List @8 :List(Int64);

  interfaceList @9 :List(ListManiaInterface);

  textList @10 :List(Text);

  uint8List @11 :List(UInt8);

  uint16List @12 :List(UInt16);

  uint32List @13 :List(UInt32);

  uint64List @14 :List(UInt64);

  voidList @15 :List(Void);

}

interface ListManiaInterface {

  # weeee even more recursion
  getListMania @0 () -> (result :List(ListManiaInterface));

}

struct ListManiaStruct {

  void @0 :Void;

  self @1 :ListMania;

}
