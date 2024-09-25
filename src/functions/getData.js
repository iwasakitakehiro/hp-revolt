import { promises as fs } from "fs";
import { resolve } from "path";

export async function getConfig() {
  const configFilePath = resolve(process.cwd(), import.meta.env.CONFIG_FILE);
  const configData = await fs.readFile(configFilePath, "utf-8");
  return JSON.parse(configData);
}
