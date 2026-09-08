import { readFileSync } from 'node:fs';

const api = JSON.parse(readFileSync(new URL('../api/wrangler.jsonc', import.meta.url), 'utf8'));
const site = JSON.parse(readFileSync(new URL('../site/wrangler.jsonc', import.meta.url), 'utf8'));
const production = api.env?.production;
const errors = [];
const databaseId = production?.d1_databases?.find((item) => item.binding === 'DB')?.database_id ?? '';

if (!/^[0-9a-f]{8}-[0-9a-f-]{27,}$/i.test(databaseId)) errors.push('Troque PREENCHER_ID_PRODUCAO pelo ID real do banco D1.');
if (production?.vars?.ENVIRONMENT !== 'production') errors.push('ENVIRONMENT precisa ser production.');
if (production?.vars?.SITE_ORIGIN !== 'https://dejotacode.com.br') errors.push('SITE_ORIGIN precisa usar o domínio HTTPS oficial.');
if (!production?.r2_buckets?.some((item) => item.binding === 'MEDIA' && item.bucket_name === 'dejotacode-media')) errors.push('O bucket R2 de produção não está configurado.');
if (!production?.routes?.some((route) => route.pattern === 'api.dejotacode.com.br' && route.custom_domain)) errors.push('O domínio da API não está configurado.');
if (!site.routes?.some((route) => route.pattern === 'dejotacode.com.br' && route.custom_domain)) errors.push('O domínio do site não está configurado.');
if (JSON.stringify(api).includes('gere-um-token')) errors.push('Um segredo de exemplo foi encontrado na configuração pública.');

if (errors.length) {
  console.error(`Produção ainda não está pronta:\n- ${errors.join('\n- ')}`);
  process.exit(1);
}

console.log('Pré-deploy aprovado: domínios, D1, R2 e ambiente de produção estão configurados.');
