// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const sitemapExcludedPages = new Set([
  "https://dejotacode.com.br/busca/",
  "https://dejotacode.com.br/guia/iniciante-em-tecnologia/",
]);

export default defineConfig({
  site: "https://dejotacode.com.br",
  output: "static",
  compressHTML: true,
  integrations: [
    sitemap({
      filter: (page) =>
        !sitemapExcludedPages.has(page) &&
        !page.startsWith("https://dejotacode.com.br/admin/"),
    }),
  ],
});
