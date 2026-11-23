// One Emoji, One Smile — writes exactly one warm emoji, nothing else.
// No trailing newline: the file holds precisely the emoji's bytes.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const emoji = "😄";

// Guard: the entry must be exactly one emoji — a single code point,
// not whitespace, so the gate (1–8 chars, not only whitespace) always passes.
if ([...emoji].length !== 1 || !/\S/.test(emoji)) {
  throw new Error("entry must be exactly one non-whitespace emoji");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), emoji, "utf8");
