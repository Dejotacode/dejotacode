// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://dejotacode.com.br",
  output: "static",
  compressHTML: true,
  integrations: [
    sitemap({
      filter: (page) =>
        ![
          "https://dejotacode.com.br/busca/",
          "https://dejotacode.com.br/guia/iniciante-em-tecnologia/",
        ].includes(page),
    }),
  ],
});
