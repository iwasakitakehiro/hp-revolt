const fs = require("fs");
const path = require("path");

const jsonFilePath = process.argv[2];

if (!fs.existsSync(jsonFilePath)) {
  console.error(`JSON file not found: ${jsonFilePath}`);
  process.exit(1);
}

const jsonData = JSON.parse(fs.readFileSync(jsonFilePath, "utf8"));

// JSONデータをAstroでインポートできるように、ファイルに書き出す
const outputFilePath = path.join(__dirname, "../src/content/generated.json");
fs.writeFileSync(outputFilePath, JSON.stringify(jsonData, null, 2), "utf8");
