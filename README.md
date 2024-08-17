# capnp-es

<!-- automd:badges no-npmDownloads bundlephobia -->

[![npm version](https://img.shields.io/npm/v/capnp-es)](https://npmjs.com/package/capnp-es)
[![bundle size](https://img.shields.io/bundlephobia/minzip/capnp-es)](https://bundlephobia.com/package/capnp-es)

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
- [x] Output files can be `.ts` (new), `.js` (ESM instead of CJS), and `.d.ts` and has no `.capnp` suffix.
- [x] Compiler API can be used via the `capnp-es/compiler` subpath export programmatically.
- [x] Use native `TextEncoder` and `TextDncoder for text
- [ ] (planned) Use TextEncoder/TextDecoder for utf8
- [ ] (planned) Investigate reducing runtime bundle impact
- [ ] (planned) Use getter/setters for generated objects.
- [ ] (planned) Standalone object exports.
- [ ] (planned) Investigate RPC level 1 (some progress [here](https://github.com/jdiaz5513/capnp-ts/pull/169))
- [ ] (planned) Investigate possibility of bundling wasm version of `capnpc`

## Usage

> [!NOTE]
> Make sure `capnpc` command is available. You can find install instructions [here](https://capnproto.org/capnp-tool.html) to install it.

Run the following to compile a schema file into typeScript/javascript source code:

```shell
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

## Benchmarks

In theory, since capnp does not needs any serialization and deserialization, it is INFINITY TIMES faster than any other protocol as "parse" only happens on field access.

To be more fair, we [benchmark](./test//benchmark) by accessing fields in different ways. It is still up to **%65** faster even on a small JSON payload than `JSON.parse`.

<details>

<summary>results</summary>

```
$ node --import jiti/register ./test/benchmark/bench.ts

cpu: Apple M2
runtime: node v20.15.1 (arm64-darwin)

benchmark                                   time (avg)             (min … max)       p75       p99      p999
------------------------------------------------------------------------------ -----------------------------
• iteration over deeply nested lists
------------------------------------------------------------------------------ -----------------------------
capnp.Message(<buff>)                    1'357 ns/iter   (1'119 ns … 2'546 ns)  1'451 ns  1'685 ns  2'546 ns
JSON.parse(<string>)                     1'990 ns/iter   (1'911 ns … 2'368 ns)  2'003 ns  2'150 ns  2'368 ns
JSON.parse(TextDecoder.decode(<buff>))   2'166 ns/iter   (2'130 ns … 2'548 ns)  2'171 ns  2'544 ns  2'548 ns

summary for iteration over deeply nested lists
  capnp.Message(<buff>)
   1.47x faster than JSON.parse(<string>)
   1.6x faster than JSON.parse(TextDecoder.decode(<buff>))

• top level list length access
------------------------------------------------------------------------------ -----------------------------
capnp.Message(<buff>)                    1'662 ns/iter   (1'340 ns … 2'293 ns)  1'794 ns  2'263 ns  2'293 ns
JSON.parse(<string>)                     2'156 ns/iter   (2'100 ns … 2'620 ns)  2'157 ns  2'378 ns  2'620 ns
JSON.parse(TextDecoder.decode(<buff>))   2'291 ns/iter   (2'240 ns … 2'492 ns)  2'311 ns  2'454 ns  2'492 ns

summary for top level list length access
  capnp.Message(<buff>)
   1.3x faster than JSON.parse(<string>)
   1.38x faster than JSON.parse(TextDecoder.decode(<buff>))

• parse
------------------------------------------------------------------------------ -----------------------------
capnp.Message(<buff>).getRoot()          1'328 ns/iter   (1'110 ns … 1'710 ns)  1'456 ns  1'688 ns  1'710 ns
JSON.parse(<string>)                     2'043 ns/iter   (1'982 ns … 2'222 ns)  2'107 ns  2'213 ns  2'222 ns
JSON.parse(TextDecoder.decode(<buff>))   2'190 ns/iter   (2'111 ns … 2'349 ns)  2'264 ns  2'338 ns  2'349 ns

summary for parse
  capnp.Message(<buff>).getRoot()
   1.54x faster than JSON.parse(<string>)
   1.65x faster than JSON.parse(TextDecoder.decode(<buff>))
```

</details>

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
