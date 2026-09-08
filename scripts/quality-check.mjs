import { readFileSync, readdirSync } from 'node:fs';
import { join, relative } from 'node:path';

const root = new URL('../site/dist/', import.meta.url).pathname;
const files = [];
const walk = (dir) => readdirSync(dir, { withFileTypes: true }).forEach((entry) => {
  const path = join(dir, entry.name);
  entry.isDirectory() ? walk(path) : entry.name.endsWith('.html') && files.push(path);
});
walk(root);

const failures = [];
for (const file of files) {
  const html = readFileSync(file, 'utf8');
  const page = relative(root, file);
  const requirePattern = (pattern, message) => { if (!pattern.test(html)) failures.push(`${page}: ${message}`); };
  requirePattern(/<html[^>]+lang="pt-BR"/, 'idioma da página ausente');
  requirePattern(/<meta name="viewport" content="width=device-width, initial-scale=1"/, 'viewport responsivo ausente');
  requirePattern(/<meta name="description" content="[^"]+"/, 'descrição SEO ausente');
  requirePattern(/<link rel="canonical" href="https:\/\/dejotacode\.com\.br\//, 'URL canônica ausente');
  requirePattern(/<link rel="alternate" type="application\/rss\+xml"/, 'descoberta do RSS ausente');
  requirePattern(/<meta property="og:url" content="https:\/\/dejotacode\.com\.br\//, 'URL OpenGraph ausente');
  requirePattern(/<meta name="twitter:card" content="summary"/, 'metadado para compartilhamento ausente');
  requirePattern(/<title>[^<]+<\/title>/, 'título ausente');
  requirePattern(/<main(?:\s|>)/, 'região principal ausente');
  requirePattern(/class="skip-link"/, 'atalho para conteúdo ausente');

  const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
  const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);
  if (duplicates.length) failures.push(`${page}: IDs repetidos (${[...new Set(duplicates)].join(', ')})`);

  for (const image of html.matchAll(/<img\b[^>]*>/g)) {
    if (!/\salt="[^"]*"/.test(image[0])) failures.push(`${page}: imagem sem atributo alt`);
  }

  const currentPages = (html.match(/aria-current="page"/g) ?? []).length;
  if (currentPages > 1) failures.push(`${page}: mais de um item marcado como página atual`);
}

if (files.length < 20) failures.push(`somente ${files.length} páginas foram encontradas`);
const rss = readFileSync(join(root, 'rss.xml'), 'utf8');
if (!/<rss version="2\.0">/.test(rss) || !/<item>/.test(rss)) failures.push('feed RSS inválido ou vazio');
if (failures.length) {
  console.error(`Auditoria reprovada (${failures.length} problema(s)):\n${failures.join('\n')}`);
  process.exit(1);
}
console.log(`Auditoria aprovada: ${files.length} páginas estáticas verificadas.`);
