// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://www.dejotacode.com.br",
  output: "static",
  integrations: [
    sitemap({
      filter: (page) =>
        page !== "https://www.dejotacode.com.br/busca/",
    }),
  ],
});
