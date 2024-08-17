#!/bin/bash

cd "$(dirname "$0")"

rm *.bin

# cat ../json/data.json | capnp convert json:binary ./data.capnp AddressBook > data.bin
# cat ../json/data.json | capnp convert json:packed ./data.capnp AddressBook > data-packed.bin
cat ../json/data.json | capnp convert json:flat ./data.capnp AddressBook > data-flat.bin
# cat ../json/data.json | capnp convert json:flat-packed ./data.capnp AddressBook > data-flat-packed.bin
# cat ../json/data.json | capnp convert json:canonical ./data.capnp AddressBook > data-canonical.bin
# cat ../json/data.json | capnp convert json:text ./data.capnp AddressBook > data.text

du -h -A -B1 *.bin
