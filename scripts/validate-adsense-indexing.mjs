import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const dist = join(process.cwd(), "dist");
const sitemap = readFileSync(join(dist, "sitemap-0.xml"), "utf8");
const failures = [];

if (sitemap.includes("https://dejotacode.com.br/store/")) {
  failures.push("A Store voltou a aparecer no sitemap durante o gate editorial do AdSense.");
}

function walk(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    const stat = statSync(full);
    if (stat.isDirectory()) out.push(...walk(full));
    else if (name === "index.html") out.push(full);
  }
  return out;
}

const storeRoot = join(dist, "store");
for (const file of walk(storeRoot)) {
  const html = readFileSync(file, "utf8");
  if (!/<meta\s+name=["']robots["']\s+content=["']noindex, follow["']\s*\/?\s*>/i.test(html)) {
    failures.push(`Página da Store sem noindex, follow: ${file.replace(process.cwd(), ".")}`);
  }
}

if (failures.length) {
  console.error("❌ Gate editorial do AdSense falhou:\n- " + failures.join("\n- "));
  process.exit(1);
}

console.log("✅ Gate editorial do AdSense aprovado: Store fora do sitemap e com noindex, follow.");
