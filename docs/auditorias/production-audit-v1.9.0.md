# Auditoria read-only de produção — v1.9.0

Data: 2026-09-16
Escopo: `https://dejotacode.com.br` e rotas públicas/admin principais.

## Resultado executivo

A produção está funcional e coerente com as decisões atuais de SEO. Não foi encontrada regressão crítica nas rotas auditadas.

A auditoria foi somente leitura: nenhuma alteração em CTA, formulários, D1, Worker, DNS, R2, secrets ou deploy.

## SEO e indexação

- rotas públicas principais retornaram HTTP 200;
- títulos, descriptions, canonical e Open Graph estão presentes nas rotas indexáveis auditadas;
- `/busca/` e `/guia/iniciante-em-tecnologia/` usam `noindex, follow`;
- `/admin/` e `/admin/metricas/` usam `noindex, nofollow` e não expõem canonical/OG;
- busca, admin e guia não aparecem no sitemap auditado;
- `robots.txt` permite crawling geral e aponta para `sitemap-index.xml`;
- uma rota inexistente retorna HTTP 404 e `noindex, follow`.

## Performance de rede — amostra

Medições simples via `curl`, não equivalentes a Core Web Vitals:

- `/`: TTFB ~129 ms, total ~131 ms, HTML ~21 KB;
- `/blog/`: TTFB ~293 ms, total ~295 ms, HTML ~30 KB;
- `/trilhas/`: TTFB ~308 ms, total ~310 ms, HTML ~15 KB;
- `/portfolio/`: TTFB ~325 ms, total ~327 ms, HTML ~22 KB.

Os valores são apenas uma fotografia operacional e podem variar por rede/cache.

## Headers observados

As páginas auditadas retornaram:

- `Cache-Control: public, max-age=0, must-revalidate`;
- `X-Content-Type-Options: nosniff`;
- `Referrer-Policy: strict-origin-when-cross-origin`.

Não foram observados, nessa amostra HTTP, headers explícitos de:

- `Strict-Transport-Security`;
- `Content-Security-Policy`;
- `Permissions-Policy`;
- `X-Frame-Options`.

Isso não representa falha funcional imediata, mas merece uma hardening review separada. Qualquer inclusão de CSP deve ser testada em preview antes de produção para evitar bloqueio de scripts, formulários ou integrações legítimas.

## Decisão operacional

Durante a janela de baseline da v1.7.0, não implementar mudanças de UX/CRO decorrentes desta auditoria.

Correções críticas de segurança ou disponibilidade podem ser tratadas separadamente, com preview, CI, smoke e justificativa explícita. Melhorias não críticas ficam registradas para execução após a medição D+7/D+14.
