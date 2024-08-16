import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  declaration: true,
  entries: [
    "./src/index.ts",
    "./src/compiler/index.ts",
    "./src/compiler/main.ts",
    ...["cpp", "persistent", "rpc-twoparty", "rpc", "schema", "ts"].map(
      (n) => `./src/std/${n}.ts`,
    ),
  ],
});
