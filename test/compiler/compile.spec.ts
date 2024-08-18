import { exec } from "node:child_process";
import { compileAll } from "capnp-es/compiler";
import { test } from "vitest";
import { writeFile } from "node:fs/promises";

const projectDir = new URL("../../", import.meta.url);

test("compiler:compile fixture", async () => {
  const stdout = await new Promise<Buffer>((resolve, reject) => {
    exec(
      `capnpc -o- test/fixtures/*.capnp`,
      {
        encoding: "buffer",
      },
      (error, stdout, stderr) => {
        if (error) {
          reject(new Error(error.message, { cause: stderr }));
        } else {
          resolve(stdout);
        }
      },
    );
  });
  const { files } = await compileAll(stdout, {
    ts: true,
    js: false /* TODO */,
    dts: false /* TODO */,
  });
  for (const [name, content] of files) {
    if (name.endsWith(".ts")) {
      writeFile(
        new URL(name, projectDir),
        content.replace(/^\s+/gm, (match) => " ".repeat(match.length / 2)),
      );
    }
  }
});
