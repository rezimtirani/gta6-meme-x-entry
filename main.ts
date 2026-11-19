// gta6-meme-x-01 entry (Node 22, standard library only).
//
// The entry itself is the X post: a GTA 6 meme, posted from a public X
// account, whose address lives in POST.json at this repository's root.
// All this program does is hand that address to the grader by copying
// POST.json into the output directory. The house then reads the post
// from X on its own (first picture, then text) and the judge scores
// the post, not anything written here.
//
// Local run (from this repository's root):
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
// On success it prints nothing and out/POST.json matches POST.json.

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });

const source = join(botDir, "POST.json");
const target = join(outputDir, "POST.json");

try {
  copyFileSync(source, target);
} catch (error) {
  console.error(`could not copy ${source} to ${target}: ${(error as Error).message}`);
  process.exit(1);
}
