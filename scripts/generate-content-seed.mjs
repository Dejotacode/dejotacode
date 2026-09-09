import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const root = process.cwd();
const sourcePath = resolve(root, 'api/seeds/initial-content.json');
const outputPath = resolve(root, 'api/seeds/initial-content.generated.sql');
const posts = JSON.parse(await readFile(sourcePath, 'utf8'));

const allowedCategories = new Set([
  'programacao',
  'linux',
  'cloudflare',
  'criptoativos',
  'renda-digital',
  'ia',
  'tecnologia',
  'tutoriais'
]);

const escapeSql = (value) => `'${String(value).replaceAll("'", "''")}'`;
const slugs = new Set();
const totals = { article: 0, tutorial: 0 };

for (const post of posts) {
  if (!['article', 'tutorial'].includes(post.type)) throw new Error(`Tipo inválido: ${post.slug}`);
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(post.slug)) throw new Error(`Slug inválido: ${post.slug}`);
  if (slugs.has(post.slug)) throw new Error(`Slug duplicado: ${post.slug}`);
  if (!allowedCategories.has(post.categorySlug)) throw new Error(`Categoria inválida: ${post.categorySlug}`);
  if (!post.title || !post.excerpt || !Array.isArray(post.sections) || post.sections.length < 3) {
    throw new Error(`Conteúdo incompleto: ${post.slug}`);
  }
  slugs.add(post.slug);
  totals[post.type] += 1;
}

if (posts.length !== 20 || totals.article !== 10 || totals.tutorial !== 10) {
  throw new Error(`Esperado: 10 artigos e 10 tutoriais. Encontrado: ${JSON.stringify(totals)}`);
}

const statements = posts.map((post) => `
INSERT OR IGNORE INTO posts
  (category_id,author_id,type,slug,title,excerpt,content,status,published_at)
SELECT
  c.id,
  u.id,
  ${escapeSql(post.type)},
  ${escapeSql(post.slug)},
  ${escapeSql(post.title)},
  ${escapeSql(post.excerpt)},
  ${escapeSql(JSON.stringify(post.sections))},
  'review',
  NULL
FROM categories AS c
CROSS JOIN users AS u
WHERE c.slug = ${escapeSql(post.categorySlug)}
  AND u.role = 'admin'
  AND u.status = 'active'
ORDER BY u.id
LIMIT 1;
`.trim());

const header = `-- DejotaCode: 10 artigos e 10 tutoriais iniciais.
-- Importação idempotente: slugs existentes são preservados.
-- Todo conteúdo entra com status "review" e precisa de aprovação no CMS.
`;

await writeFile(outputPath, `${header}\n${statements.join('\n\n')}\n\nPRAGMA optimize;\n`, 'utf8');
console.log(`Seed gerado: ${outputPath}`);
console.log(`Conteúdos: ${totals.article} artigos e ${totals.tutorial} tutoriais.`);
