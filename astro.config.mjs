// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://dejotacode.com.br",
  output: "static",
  integrations: [
    sitemap({
      filter: (page) =>
        page !== "https://dejotacode.com.br/busca/",
    }),
  ],
});
