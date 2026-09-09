import { readFileSync } from 'node:fs';

const api = JSON.parse(
  readFileSync(new URL('../api/wrangler.jsonc', import.meta.url), 'utf8')
);
const rootPackage = JSON.parse(
  readFileSync(new URL('../package.json', import.meta.url), 'utf8')
);
const sitePackage = JSON.parse(
  readFileSync(new URL('../site/package.json', import.meta.url), 'utf8')
);
const productionEnv = readFileSync(
  new URL('../site/.env.production.example', import.meta.url),
  'utf8'
);

const production = api.env?.production;
const errors = [];
const databaseId =
  production?.d1_databases?.find((item) => item.binding === 'DB')
    ?.database_id ?? '';

if (!/^[0-9a-f]{8}-[0-9a-f-]{27,}$/i.test(databaseId)) {
  errors.push('Configure o ID real do banco D1 de produção.');
}
if (production?.vars?.ENVIRONMENT !== 'production') {
  errors.push('ENVIRONMENT precisa ser production.');
}
if (production?.vars?.SITE_ORIGIN !== 'https://dejotacode.com.br') {
  errors.push('SITE_ORIGIN precisa usar o domínio HTTPS oficial.');
}
if (
  !production?.r2_buckets?.some(
    (item) =>
      item.binding === 'MEDIA' &&
      item.bucket_name === 'dejotacode-media'
  )
) {
  errors.push('O bucket R2 de produção não está configurado.');
}
if (
  !production?.routes?.some(
    (route) =>
      route.pattern === 'api.dejotacode.com.br' &&
      route.custom_domain
  )
) {
  errors.push('O domínio da API não está configurado.');
}

const rootSiteDeploy =
  rootPackage.scripts?.['deploy:site:production'] ?? '';
const workspaceSiteDeploy =
  sitePackage.scripts?.deploy ?? '';

for (const deployScript of [rootSiteDeploy, workspaceSiteDeploy]) {
  if (
    !deployScript.includes('wrangler pages deploy') ||
    !deployScript.includes('--project-name dejota-code')
  ) {
    errors.push(
      'O deploy do site precisa usar o projeto Pages dejota-code.'
    );
    break;
  }
}

for (const expected of [
  'PUBLIC_SITE_URL=https://dejotacode.com.br',
  'PUBLIC_API_URL=https://api.dejotacode.com.br',
  'CONTENT_SOURCE=api',
  'CONTENT_API_URL=https://api.dejotacode.com.br'
]) {
  if (!productionEnv.includes(expected)) {
    errors.push(
      'O exemplo de ambiente de produção está incompleto: ' + expected
    );
  }
}

if (JSON.stringify(api).includes('gere-um-token')) {
  errors.push(
    'Um segredo de exemplo foi encontrado na configuração pública.'
  );
}

if (errors.length) {
  console.error(
    'Produção ainda não está pronta:\n- ' + errors.join('\n- ')
  );
  process.exit(1);
}

console.log(
  'Pré-deploy aprovado: Pages, API, domínios, D1, R2 e ambiente estão configurados.'
);
