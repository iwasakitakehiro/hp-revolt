import { readFileSync, writeFileSync, existsSync } from "fs";
import { join } from "path";

const jsonFilePath = process.argv[2];

if (!existsSync(jsonFilePath)) {
  console.error(`JSON file not found: ${jsonFilePath}`);
  process.exit(1);
}

const jsonData = JSON.parse(readFileSync(jsonFilePath, "utf8"));

// JSONデータをAstroでインポートできるように、ファイルに書き出す
const outputFilePath = join(
  new URL(".", import.meta.url).pathname,
  "../src/content/data/storeData.json"
);
writeFileSync(outputFilePath, JSON.stringify(jsonData, null, 2), "utf8");
