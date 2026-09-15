// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://dejotacode.com.br",
  output: "static",
  integrations: [
    sitemap({
      filter: (page) =>
        ![
          "https://dejotacode.com.br/busca/",
          "https://dejotacode.com.br/guia/iniciante-em-tecnologia/",
          "https://dejotacode.com.br/categoria/inteligencia-artificial/",
          "https://dejotacode.com.br/categoria/tecnologia-pratica/",
        ].includes(page),
    }),
  ],
});
