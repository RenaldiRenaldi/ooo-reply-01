import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const entry = "Out of office: my autoreply is also out of office. Please try again never.";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

await mkdir(outputDir, { recursive: true });
await writeFile(join(outputDir, "entry.txt"), entry, "utf8");
