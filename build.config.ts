import { defineBuildConfig } from "unbuild";
import { fileURLToPath } from "node:url";
export default defineBuildConfig({
  declaration: true,
  entries: [
    "./src/index.ts",
    "./src/compiler/index.ts",
    "./src/compiler/main.ts",
    ...["cpp", "persistent", "rpc-twoparty", "rpc", "schema", "ts"].map(
      (n) => `./src/capnp/${n}.ts`,
    ),
  ],
  alias: {
    "capnp-es": fileURLToPath(new URL("src/index.ts", import.meta.url)),
  },
  hooks: {
    "rollup:options"(_ctx, rollupOptions) {
      rollupOptions.external = ["typescript"];
    },
  },
});
