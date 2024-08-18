#!/usr/bin/env node

import { writeFile } from "node:fs/promises";
import { exec } from "node:child_process";
import { compileAll } from "./compiler";

try {
  let dataBuf: Buffer = await readStdin();
  if (dataBuf.byteLength === 0) {
    const paths = process.argv.slice(2).filter((arg) => !arg.startsWith("--"));
    if (paths.length === 0) {
      console.error("No input files specified or piped to stdin");
      process.exit(1);
    }
    const cmd = `capnpc -o- ${paths.map((p) => JSON.stringify(p)).join(" ")}`;
    console.log(cmd);
    dataBuf = await new Promise<Buffer>((resolve) => {
      exec(
        cmd,
        {
          encoding: "buffer",
        },
        (error, stdout, stderr) => {
          if (error) {
            process.stderr.write(stderr);
            process.exit(1);
          } else {
            resolve(stdout);
          }
        },
      );
    });
  }

  const { files } = await compileAll(dataBuf, {
    ts: process.argv.includes("--ts"),
    js: process.argv.includes("--js"),
    dts: process.argv.includes("--dts"),
  });
  for (const [path, content] of files) {
    console.log(`Compiled ${path}`);
    await writeFile(
      path,
      // https://github.com/microsoft/TypeScript/issues/54632
      content.replace(/^\s+/gm, (match) => " ".repeat(match.length / 2)),
    );
  }
} catch (error) {
  console.error(error);
  process.exit(1);
}

async function readStdin() {
  if (process.stdin.isTTY) {
    return Buffer.alloc(0);
  }
  const chunks: Buffer[] = [];
  process.stdin.on("data", (chunk: Buffer) => {
    chunks.push(chunk);
  });
  await new Promise((resolve) => {
    process.stdin.on("end", resolve);
  });
  const reqBuffer = Buffer.alloc(
    chunks.reduce((l, chunk) => l + chunk.byteLength, 0),
  );
  let i = 0;
  for (const chunk of chunks) {
    chunk.copy(reqBuffer, i);
    i += chunk.byteLength;
  }
  return reqBuffer;
}
