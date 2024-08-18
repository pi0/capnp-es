# capnp-es

<!-- automd:badges bundlephobia codecov -->

[![npm version](https://img.shields.io/npm/v/capnp-es)](https://npmjs.com/package/capnp-es)
[![npm downloads](https://img.shields.io/npm/dm/capnp-es)](https://npmjs.com/package/capnp-es)
[![bundle size](https://img.shields.io/bundlephobia/minzip/capnp-es)](https://bundlephobia.com/package/capnp-es)
[![codecov](https://img.shields.io/codecov/c/gh/pi0/capnp-es)](https://codecov.io/gh/pi0/capnp-es)

<!-- /automd -->

> TypeScript implementation of the [Cap'n Proto](https://capnproto.org) serialization protocol.

Cap’n Proto is an insanely fast data interchange format and capability-based RPC system. Think JSON, except binary. Or think [Protocol Buffers](https://github.com/protocolbuffers/protobuf), except faster. In fact, in benchmarks, Cap’n Proto is INFINITY TIMES faster than Protocol Buffers, because there is no encoding/decoding step. Start with the [Cap'n Proto Introduction](https://capnproto.org/index.html) for more detailed information on what this is about.

## Status

> [!WARNING]
> WARNING: THIS IS ALPHA QUALITY SOFTWARE. USE AT YOUR OWN RISK. AUTHORS ARE NOT RESPONSIBLE FOR LOSS OF LIMB, LIFE, SANITY, OR RETIREMENT FUNDS DUE TO THE USE OF THIS SOFTWARE. Feedback and contributions are welcome.

This project is a rework<sup>1</sup> of [jdiaz5513/capnp-ts](https://github.com/jdiaz5513/capnp-ts/) by Julián Díaz and under development (honestly more a playground at this stage). Until version `1.x.x` lands, the API can change from `0.x` to `0.y`.

- Serialization: working, may be missing features
- Schema Compiler: working, may be missing features
- RPC: not implemented yet

**<sup>1</sup> Changes from `capnp-ts`:**

- [x] Internal refactors and simplifications as was playing around.
- [x] Compiler, runtime, and std lib published via a single and compact ESM-only package with subpath exports.
- [x] Compiler updated to use Typescript v5 API
- [x] Output files can be `.ts` (new), `.js` (ESM instead of CJS), and `.d.ts` and has no `.capnp` suffix.
- [x] Compiler API can be used via the `capnp-es/compiler` subpath export programmatically.
- [x] Use native `TextEncoder` and `TextDecoder` for utf8 encoding
- [x] Enums are typed plain JS objects (this way `.ts` files work with strip-only ts loaders without enum support.)
- [x] Compiler CLI can directly accept path to `.capnp` files and internally use `capnpc`
- [ ] (wip) Support reflection and getter setters to access objects.
- [ ] (planned) Investigate RPC level 1 (some progress [here](https://github.com/jdiaz5513/capnp-ts/pull/169))
- [ ] (planned) Investigate possibility of bundling wasm version of `capnp`

## Usage

> [!NOTE]
> Make sure `capnpc` command is available. You can find install instructions [here](https://capnproto.org/capnp-tool.html) to install it.

Run the following to compile a schema file into typeScript/javascript source code:

```shell
npx capnp-es --ts --dts --js path/to/myschema.capnp
# or pipe
capnpc -o- path/to/myschema.capnp | npx capnp-es --ts --dts --js
```

This will generate `path/to/myschema.{ts,d.ts,js}` (ESM syntax).

See [playground](./playground/) for examples and learn more about `.capnp` schema in capnp language [docs](https://capnproto.org/language.html).

## Reading Messages

Here's a quick usage example:

```ts
import * as capnp from "capnp-es";
import { MyStruct } from "./myschema.js";

const message = capnp.Message.fromArrayBuffer(buffer);
const struct = message.getRoot(MyStruct);
```

## Development

<details>

<summary>local development</summary>

- Clone this repository
- Install the latest LTS version of [Node.js](https://nodejs.org/en/)
- Enable [Corepack](https://github.com/nodejs/corepack) using `corepack enable`
- Install dependencies using `pnpm install`
- Run interactive tests using `pnpm dev`

</details>

## License

🔀 Forked from [jdiaz5513/capnp-ts](https://github.com/jdiaz5513/capnp-ts/) by Julián Díaz.

💛 Published under the [MIT](https://github.com/unjs/capnp-es/blob/main/LICENSE) license.
