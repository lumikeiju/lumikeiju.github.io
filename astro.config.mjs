import { defineConfig } from "astro/config";

const site = process.env.SITE_URL ?? "https://lumikeiju.dev";

export default defineConfig({
  output: "static",
  site,
  trailingSlash: "always"
});
