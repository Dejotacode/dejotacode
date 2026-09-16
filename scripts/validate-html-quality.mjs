import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join, relative, resolve, sep } from "node:path";

const distDir = resolve("dist");

if (!existsSync(distDir)) {
  console.error("[html-qa] FALHOU: dist/ não encontrado. Execute o build antes da validação.");
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

const routeFor = (filePath) => {
  const rel = relative(distDir, filePath).split(sep).join("/");
  if (rel === "index.html") return "/";
  if (rel.endsWith("/index.html")) return `/${rel.slice(0, -"index.html".length)}`;
  return `/${rel}`;
};

const getAttribute = (tag, name) => {
  const pattern = new RegExp(`\\b${name}\\s*=\\s*(?:"([^"]*)"|'([^']*)')`, "i");
  const match = tag.match(pattern);
  return match ? match[1] ?? match[2] ?? "" : null;
};

const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const hasAssociatedLabel = (html, id) => {
  if (!id) return false;
  const escaped = escapeRegExp(id);
  const pattern = new RegExp(`<label\\b[^>]*\\bfor\\s*=\\s*(?:"${escaped}"|'${escaped}')[^>]*>`, "i");
  return pattern.test(html);
};

const hasWrappingLabel = (html, controlIndex) => {
  const lastOpen = html.lastIndexOf("<label", controlIndex);
  if (lastOpen === -1) return false;

  const lastClose = html.lastIndexOf("</label>", controlIndex);
  return lastOpen > lastClose;
};

const issues = [];
let checkedControls = 0;
let checkedImages = 0;

for (const filePath of htmlFiles.sort()) {
  const html = readFileSync(filePath, "utf8");
  const route = routeFor(filePath);
  const pageIssues = [];

  const mainCount = (html.match(/<main\b/gi) ?? []).length;
  if (mainCount !== 1) {
    pageIssues.push(`esperado 1 <main>, encontrado ${mainCount}`);
  } else if (!/<main\b[^>]*\bid\s*=\s*(?:"conteudo"|'conteudo')/i.test(html)) {
    pageIssues.push('<main> sem id="conteudo" para o skip link');
  }

  const h1Count = (html.match(/<h1\b/gi) ?? []).length;
  if (h1Count !== 1) {
    pageIssues.push(`esperado 1 <h1>, encontrado ${h1Count}`);
  }

  const ids = new Map();
  for (const match of html.matchAll(/\bid\s*=\s*(?:"([^"]+)"|'([^']+)')/gi)) {
    const id = match[1] ?? match[2];
    ids.set(id, (ids.get(id) ?? 0) + 1);
  }

  for (const [id, count] of ids) {
    if (count > 1) pageIssues.push(`id duplicado: "${id}" (${count} ocorrências)`);
  }

  for (const match of html.matchAll(/<img\b[^>]*>/gi)) {
    checkedImages += 1;
    const tag = match[0];
    if (getAttribute(tag, "alt") === null) {
      pageIssues.push("imagem sem atributo alt");
    }
  }

  for (const match of html.matchAll(/<(input|textarea|select)\b[^>]*>/gi)) {
    const tagName = match[1].toLowerCase();
    const tag = match[0];
    const type = (getAttribute(tag, "type") ?? "").toLowerCase();
    if (tagName === "input" && type === "hidden") continue;

    checkedControls += 1;
    const id = getAttribute(tag, "id");
    const ariaLabel = getAttribute(tag, "aria-label");
    const ariaLabelledby = getAttribute(tag, "aria-labelledby");
    const wrappingLabel = hasWrappingLabel(html, match.index ?? 0);

    if (!ariaLabel && !ariaLabelledby && !hasAssociatedLabel(html, id) && !wrappingLabel) {
      pageIssues.push(`controle <${tagName}> sem nome acessível${id ? ` (id="${id}")` : ""}`);
    }
  }

  if (pageIssues.length > 0) {
    issues.push({ route, pageIssues });
  }
}

console.log(`[html-qa] HTML analisados: ${htmlFiles.length}`);
console.log(`[html-qa] Imagens verificadas: ${checkedImages}`);
console.log(`[html-qa] Controles de formulário verificados: ${checkedControls}`);
console.log(`[html-qa] Páginas com problemas: ${issues.length}`);

if (issues.length > 0) {
  console.error("\n[html-qa] FALHOU: problemas estruturais/acessíveis encontrados:");

  for (const { route, pageIssues } of issues) {
    console.error(`\n- ${route}`);
    for (const issue of pageIssues) {
      console.error(`  ${issue}`);
    }
  }

  process.exit(1);
}

console.log("[html-qa] PASSOU: estrutura HTML e nomes acessíveis básicos validados.");
