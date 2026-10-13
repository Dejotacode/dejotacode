import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join, relative, resolve, sep } from "node:path";

const distDir = resolve("dist");
const SITE_ORIGIN = "https://dejotacode.com.br";

if (!existsSync(distDir)) {
  console.error("[seo-qa] FALHOU: dist/ não encontrado. Execute o build antes da validação.");
  process.exit(1);
}

const htmlFiles = [];
const sitemapFiles = [];

const walk = (directory) => {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const fullPath = join(directory, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath);
      continue;
    }
    if (!entry.isFile()) continue;
    if (entry.name.endsWith(".html")) htmlFiles.push(fullPath);
    if (/^sitemap.*\.xml$/i.test(entry.name)) sitemapFiles.push(fullPath);
  }
};

walk(distDir);

const routeFor = (filePath) => {
  const rel = relative(distDir, filePath).split(sep).join("/");
  if (rel === "index.html") return "/";
  if (rel.endsWith("/index.html")) return `/${rel.slice(0, -"index.html".length)}`;
  return `/${rel}`;
};

const extractTags = (html, tagName) => {
  const tags = [];
  const lower = html.toLowerCase();
  const needle = `<${tagName.toLowerCase()}`;
  let cursor = 0;

  while (cursor < html.length) {
    const start = lower.indexOf(needle, cursor);
    if (start === -1) break;

    let quote = null;
    let end = start + needle.length;
    for (; end < html.length; end += 1) {
      const char = html[end];
      if (quote) {
        if (char === quote) quote = null;
        continue;
      }
      if (char === '"' || char === "'") {
        quote = char;
        continue;
      }
      if (char === ">") break;
    }

    if (end >= html.length) break;
    tags.push(html.slice(start, end + 1));
    cursor = end + 1;
  }

  return tags;
};

const getAttribute = (tag, name) => {
  const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const double = tag.match(new RegExp(`\\b${escaped}\\s*=\\s*"([^"]*)"`, "i"))?.[1];
  if (double !== undefined) return double.trim();
  return tag.match(new RegExp(`\\b${escaped}\\s*=\\s*'([^']*)'`, "i"))?.[1]?.trim() ?? "";
};

const metaContent = (html, key, attr = "name") => {
  const target = extractTags(html, "meta").find(
    (tag) => getAttribute(tag, attr).toLowerCase() === key.toLowerCase(),
  );
  return target ? getAttribute(target, "content") : "";
};

const canonicalHref = (html) => {
  const tag = extractTags(html, "link").find(
    (candidate) => getAttribute(candidate, "rel").toLowerCase() === "canonical",
  );
  return tag ? getAttribute(tag, "href") : "";
};

const firstMatch = (html, pattern) => html.match(pattern)?.[1]?.trim() ?? "";

const sitemapUrls = new Set();
for (const filePath of sitemapFiles) {
  const xml = readFileSync(filePath, "utf8");
  for (const match of xml.matchAll(/<loc>([^<]+)<\/loc>/gi)) {
    const url = match[1].trim();
    if (!url.endsWith(".xml")) sitemapUrls.add(url);
  }
}

const failures = [];
const warnings = [];
const canonicalOwners = new Map();
const titleOwners = new Map();
const descriptionOwners = new Map();
let indexableCount = 0;
let noindexCount = 0;
let articleCount = 0;

const addOwner = (map, value, route) => {
  if (!value) return;
  const routes = map.get(value) ?? [];
  routes.push(route);
  map.set(value, routes);
};

for (const filePath of htmlFiles.sort()) {
  const html = readFileSync(filePath, "utf8");
  const route = routeFor(filePath);
  const pageFailures = [];
  const pageWarnings = [];

  const title = firstMatch(html, /<title>([^<]*)<\/title>/i);
  const description = metaContent(html, "description");
  const robots = metaContent(html, "robots").toLowerCase();
  const canonical = canonicalHref(html);
  const ogTitle = metaContent(html, "og:title", "property");
  const ogDescription = metaContent(html, "og:description", "property");
  const ogUrl = metaContent(html, "og:url", "property");
  const ogImage = metaContent(html, "og:image", "property");
  const twitterCard = metaContent(html, "twitter:card");
  const noindex = robots.split(",").map((part) => part.trim()).includes("noindex");
  const is404 = route === "/404.html" || route === "/404/";

  if (!title) pageFailures.push("<title> ausente ou vazio");
  if (!description) pageFailures.push("meta description ausente ou vazia");
  if (!robots) pageFailures.push("meta robots ausente ou vazia");

  if (canonical) {
    try {
      const parsed = new URL(canonical);
      if (parsed.origin !== SITE_ORIGIN) pageFailures.push(`canonical fora do domínio oficial: ${canonical}`);
      if (parsed.protocol !== "https:") pageFailures.push(`canonical sem HTTPS: ${canonical}`);
      if (parsed.search || parsed.hash) pageFailures.push(`canonical contém query/hash: ${canonical}`);
    } catch {
      pageFailures.push(`canonical inválida: ${canonical}`);
    }
    addOwner(canonicalOwners, canonical, route);
  }

  if (noindex) {
    noindexCount += 1;
    if (canonical && sitemapUrls.has(canonical)) {
      pageFailures.push("página noindex presente no sitemap");
    }
  } else if (!is404) {
    indexableCount += 1;
    if (!canonical) pageFailures.push("canonical ausente em página indexável");
    if (!robots.includes("index") || !robots.includes("follow")) {
      pageFailures.push(`robots indexável inesperado: "${robots}"`);
    }
    if (!ogTitle) pageFailures.push("og:title ausente");
    if (!ogDescription) pageFailures.push("og:description ausente");
    if (!ogUrl) pageFailures.push("og:url ausente");
    if (!ogImage) pageFailures.push("og:image ausente");
    if (!twitterCard) pageFailures.push("twitter:card ausente");
    if (canonical && ogUrl && canonical !== ogUrl) pageFailures.push("og:url diferente do canonical");
    if (canonical && !sitemapUrls.has(canonical)) pageFailures.push("página indexável ausente do sitemap");
  }

  if (route.startsWith("/store/") && !noindex) {
    pageFailures.push("rota da Store precisa permanecer noindex durante recuperação editorial");
  }
  if (route.startsWith("/admin/") && !noindex) {
    pageFailures.push("rota administrativa precisa ser noindex");
  }

  const isArticleRoute = /^\/blog\/(?!\d+\/$)[^/]+\/$/.test(route);
  if (isArticleRoute) {
    articleCount += 1;
    const scripts = html.match(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/gi) ?? [];
    const joined = scripts.join("\n");
    if (!joined.includes('"@type":"Article"') && !joined.includes('"@type": "Article"')) {
      pageFailures.push("artigo sem schema Article");
    }
    if (!joined.includes('"@type":"BreadcrumbList"') && !joined.includes('"@type": "BreadcrumbList"')) {
      pageFailures.push("artigo sem schema BreadcrumbList");
    }
  }

  if (route === "/") {
    const scripts = html.match(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/gi) ?? [];
    const joined = scripts.join("\n");
    if (!joined.includes('"@type":"Organization"') && !joined.includes('"@type": "Organization"')) {
      pageFailures.push("Home sem schema Organization");
    }
    if (!joined.includes('"@type":"WebSite"') && !joined.includes('"@type": "WebSite"')) {
      pageFailures.push("Home sem schema WebSite");
    }
  }

  if (title.length > 65) pageWarnings.push(`title longo (${title.length} caracteres)`);
  if (description.length > 170) pageWarnings.push(`description longa (${description.length} caracteres)`);
  if (description && description.length < 70) pageWarnings.push(`description curta (${description.length} caracteres)`);

  addOwner(titleOwners, title, route);
  addOwner(descriptionOwners, description, route);

  if (pageFailures.length) failures.push({ route, issues: pageFailures });
  if (pageWarnings.length) warnings.push({ route, issues: pageWarnings });
}

for (const [canonical, routes] of canonicalOwners) {
  if (routes.length > 1) failures.push({ route: routes.join(", "), issues: [`canonical duplicada: ${canonical}`] });
}
for (const [title, routes] of titleOwners) {
  if (title && routes.length > 1) warnings.push({ route: routes.join(", "), issues: [`title duplicado: ${title}`] });
}
for (const [description, routes] of descriptionOwners) {
  if (description && routes.length > 1) warnings.push({ route: routes.join(", "), issues: ["meta description duplicada"] });
}

console.log(`[seo-qa] HTML analisados: ${htmlFiles.length}`);
console.log(`[seo-qa] Páginas indexáveis: ${indexableCount}`);
console.log(`[seo-qa] Páginas noindex: ${noindexCount}`);
console.log(`[seo-qa] Artigos com schema verificados: ${articleCount}`);
console.log(`[seo-qa] URLs de página no sitemap: ${sitemapUrls.size}`);
console.log(`[seo-qa] Avisos: ${warnings.length}`);

if (warnings.length) {
  console.warn("\n[seo-qa] AVISOS (não bloqueiam o CI):");
  for (const { route, issues } of warnings) {
    console.warn(`\n- ${route}`);
    for (const issue of issues) console.warn(`  ${issue}`);
  }
}

if (failures.length) {
  console.error(`\n[seo-qa] FALHOU: ${failures.length} página(s)/regra(s) com problemas críticos:`);
  for (const { route, issues } of failures) {
    console.error(`\n- ${route}`);
    for (const issue of issues) console.error(`  ${issue}`);
  }
  process.exit(1);
}

console.log("\n[seo-qa] PASSOU: indexação, metadata, canonical, sitemap e schemas essenciais validados.");
