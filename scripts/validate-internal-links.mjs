import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join, relative, resolve, sep } from "node:path";

const distDir = resolve("dist");

if (!existsSync(distDir)) {
  console.error("[link-check] FALHOU: dist/ não encontrado. Execute o build antes da validação.");
  process.exit(1);
}

const htmlFiles = [];

const walk = (directory) => {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const fullPath = join(directory, entry.name);

    if (entry.isDirectory()) {
      walk(fullPath);
      continue;
    }

    if (entry.isFile() && entry.name.endsWith(".html")) {
      htmlFiles.push(fullPath);
    }
  }
};

walk(distDir);

const sourceRoute = (filePath) => {
  const rel = relative(distDir, filePath).split(sep).join("/");

  if (rel === "index.html") return "/";
  if (rel.endsWith("/index.html")) return `/${rel.slice(0, -"index.html".length)}`;
  return `/${rel}`;
};

const hrefPattern = /\bhref=(?:"([^"]*)"|'([^']*)')/gi;
const broken = new Map();
let checkedReferences = 0;

const shouldIgnore = (href) =>
  !href ||
  href.startsWith("#") ||
  href.startsWith("mailto:") ||
  href.startsWith("tel:") ||
  href.startsWith("javascript:") ||
  href.startsWith("data:") ||
  href.startsWith("//");

const targetExists = (pathname) => {
  if (pathname === "/") return existsSync(join(distDir, "index.html"));

  let decoded;
  try {
    decoded = decodeURIComponent(pathname);
  } catch {
    decoded = pathname;
  }

  const clean = decoded.replace(/^\/+/, "");
  const direct = join(distDir, clean);

  if (existsSync(direct)) return true;

  const directoryIndex = join(distDir, clean, "index.html");
  if (existsSync(directoryIndex)) return true;

  if (clean.endsWith("/")) {
    return existsSync(join(distDir, clean, "index.html"));
  }

  return false;
};

for (const filePath of htmlFiles.sort()) {
  const html = readFileSync(filePath, "utf8");
  const origin = sourceRoute(filePath);

  for (const match of html.matchAll(hrefPattern)) {
    const href = match[1] ?? match[2] ?? "";

    if (shouldIgnore(href)) continue;

    let url;
    try {
      url = new URL(href, "https://dejotacode.com.br");
    } catch {
      continue;
    }

    if (url.origin !== "https://dejotacode.com.br") continue;

    checkedReferences += 1;

    if (targetExists(url.pathname)) continue;

    const key = url.pathname;
    const origins = broken.get(key) ?? new Set();
    origins.add(`${origin} -> ${href}`);
    broken.set(key, origins);
  }
}

console.log(`[link-check] HTML analisados: ${htmlFiles.length}`);
console.log(`[link-check] Referências internas verificadas: ${checkedReferences}`);
console.log(`[link-check] Destinos quebrados: ${broken.size}`);

if (broken.size > 0) {
  console.error("\n[link-check] FALHOU: links internos quebrados encontrados:");

  for (const [target, origins] of [...broken.entries()].sort(([a], [b]) => a.localeCompare(b))) {
    console.error(`\n- ${target}`);
    for (const origin of [...origins].sort()) {
      console.error(`  ${origin}`);
    }
  }

  process.exit(1);
}

console.log("[link-check] PASSOU: nenhum link interno quebrado encontrado.");
