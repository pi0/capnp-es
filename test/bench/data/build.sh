#!/bin/bash
set -xe

cd "$(dirname "$0")"

cat json/data.json | capnp convert json:flat capnp/schema.capnp AddressBook > capnp/data.bin

buf convert protobuf/schema.proto --type pi0.test.AddressBook --from json/data.json > protobuf/data.bin
