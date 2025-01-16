import { readFileSync } from "node:fs";
import * as path from "node:path";

export function readFileBuffer(filePath: string): ArrayBuffer {
  const b = readFileSync(path.join(__dirname, "../../", filePath));

  return b.buffer.slice(
    b.byteOffset,
    b.byteOffset + b.byteLength,
  ) as ArrayBuffer;
}
