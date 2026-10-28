// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import studioLocal from "./scripts/studio-local.mjs";
import { fileURLToPath } from "node:url";
import { rm } from "node:fs/promises";
import { realpathSync } from "node:fs";

const projectRoot = fileURLToPath(new URL(".", import.meta.url));
const dependencyRoot = realpathSync(new URL("./node_modules", import.meta.url));

const sitemapExcludedPages = new Set([
  "https://dejotacode.com.br/busca/",
  "https://dejotacode.com.br/guia/iniciante-em-tecnologia/",
]);

export default defineConfig({
  site: "https://dejotacode.com.br",
  output: "static",
  server: { host: "127.0.0.1", port: 4321 },
  vite: {
    // Check/build must not replace the dependency cache used by the live preview.
    cacheDir: process.argv.includes("dev") ? ".studio-vite-dev-cache" : ".studio-vite-tools-cache",
    server: { fs: { allow: [projectRoot, dependencyRoot] } },
    optimizeDeps: { include: ["yaml"] },
    plugins: [studioLocal(projectRoot)],
  },
  compressHTML: true,
  integrations: [
    {
      name: "studio-private-build-boundary",
      hooks: {
        "astro:build:done": async ({ dir }) => {
          if (process.env.STUDIO_ENABLED !== "true") {
            await rm(new URL("admin/", dir), { recursive: true, force: true });
          }
        },
      },
    },
    sitemap({
      filter: (page) =>
        !sitemapExcludedPages.has(page) &&
        !page.startsWith("https://dejotacode.com.br/admin/") &&
        !page.startsWith("https://dejotacode.com.br/store/"),
    }),
  ],
});
