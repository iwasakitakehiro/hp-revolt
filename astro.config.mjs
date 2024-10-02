// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import json from "./src/content/data/storeData.json";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  base: `/rebolt/${json.path}`,
});
