#!/usr/bin/env node

import { writeFile } from "node:fs/promises";
import { compileAll } from "./compiler";

try {
  const stdinBuffer = await readStdin();
  const { files } = await compileAll(stdinBuffer, {
    ts: process.argv.includes("--ts"),
    js: process.argv.includes("--js"),
    dts: process.argv.includes("--dts"),
  });
  for (const [path, source] of files) {
    console.log(`Compiled ${path}`);
    // Replace four spaces with two spaces
    // https://github.com/microsoft/TypeScript/issues/54632
    const _content = source.replace(/^\s+/gm, (match) =>
      " ".repeat(match.length / 2),
    );
    await writeFile(path, _content);
  }
} catch (error) {
  console.error(error);
  process.exit(1);
}

async function readStdin() {
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
