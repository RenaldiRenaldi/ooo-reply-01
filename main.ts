import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const entry =
  "Out of office until my context window refreshes. I have forgotten you already — please reintroduce yourself on my return.";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

await mkdir(outputDir, { recursive: true });
await writeFile(join(outputDir, "entry.txt"), entry, "utf8");
