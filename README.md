# DejotaCode

Portal educacional em tecnologia com foco em conteúdo prático para iniciantes, trilhas de aprendizagem, recursos, portfólio e geração de leads.

## Visão geral

O DejotaCode é construído como site estático com Astro e integra-se a uma API separada para formulários e métricas agregadas. A base pública inclui blog, categorias, trilhas, recursos, portfólio, newsletter, páginas institucionais, RSS e sitemap.

Site canônico: `https://dejotacode.com.br`

## Stack

- Astro 7
- TypeScript
- Node.js 24 no CI
- Cloudflare Pages para o frontend
- API separada em Cloudflare Workers
- D1 para persistência da API
- R2 para mídia
- GitHub Actions para CI

## Requisitos

- Node.js `>=22.12.0`
- npm com suporte a `package-lock.json` v3

## Instalação

```bash
npm ci
```

## Desenvolvimento local

Crie um arquivo `.env.development.local` com a URL local da API:

```env
PUBLIC_API_URL=http://localhost:8787
```

Depois execute:

```bash
npm run dev
```

O Astro usa `http://localhost:4321` por padrão quando a porta está disponível.

## Comandos principais

| Comando | Função |
| --- | --- |
| `npm run dev` | inicia o servidor local do Astro |
| `npm run check` | executa a validação do Astro/TypeScript |
| `npm run build` | gera o build estático padrão |
| `npm run build:preview` | valida o ambiente de preview e gera o build correspondente |
| `npm run build:production` | valida o ambiente de produção e gera o build correspondente |
| `npm run preview` | serve o conteúdo gerado localmente |

## Ambientes

A variável pública usada pelo frontend é:

```env
PUBLIC_API_URL=
```

Arquivos versionados:

- `.env.example` — referência de configuração;
- `.env.preview` — endpoint oficial de preview;
- `.env.production` — endpoint oficial de produção.

Configuração local não deve ser versionada. Use `.env.development.local`.

Variáveis com prefixo `PUBLIC_` podem ser incorporadas ao frontend e não devem conter segredos.

Os builds de preview e produção passam por `scripts/validate-build-env.mjs`, que exige HTTPS, rejeita endpoints locais nesses modos e confere o endpoint esperado para cada ambiente.

## Qualidade e CI

O workflow `.github/workflows/ci.yml` roda em:

- todo `pull_request`;
- todo `push` para `main`.

O job usa permissões somente de leitura e executa:

```bash
npm ci
npm run check
npm run build:production
```

O workflow não faz deploy e não utiliza credenciais da Cloudflare.

## Analytics

O frontend possui analytics first-party agregado para navegação, conversão e progresso de trilhas. O script envia apenas os campos necessários para `/api/analytics`, usando `window.location.pathname` e campanhas explícitas quando existe contexto editorial ou de CTA.

Eventos do frontend:

- `page_view`
- `cta_click`
- `form_start`
- `lead_submit`
- `guide_access`
- `trail_start`
- `trail_lesson_click`
- `trail_complete`

A API também registra `contact_submit` diretamente no fluxo de contato. Não há envio de nome, e-mail, conteúdo de formulário, fingerprinting ou identificador persistente de visitante no payload de analytics.

## SEO e distribuição

O projeto gera site estático com URL canônica `https://dejotacode.com.br` e utiliza integração de sitemap. Também possui feed RSS em `/rss.xml`.

Algumas rotas utilitárias ou ainda não destinadas à indexação são filtradas do sitemap na configuração do Astro.

## Estrutura principal

```text
.github/workflows/   CI
public/              ativos estáticos
scripts/             validações auxiliares
src/components/      componentes de interface
src/layouts/         layouts globais
src/pages/           rotas públicas
src/scripts/         scripts executados no frontend
src/styles/          estilos e tokens visuais
```

## Documentação técnica

- [`docs/architecture.md`](docs/architecture.md) — arquitetura e limites entre frontend e API;
- [`docs/operations.md`](docs/operations.md) — ambientes, QA, CI e regras operacionais;
- [`docs/runbook-deploy-rollback.md`](docs/runbook-deploy-rollback.md) — deploy, homologação e rollback;
- [`docs/backup-recovery.md`](docs/backup-recovery.md) — backup, recuperação e próximos controles operacionais.

## Segurança operacional

Este repositório de frontend não deve armazenar segredos em variáveis `PUBLIC_*`.

Deploy, tag e release são tratados como etapas separadas do desenvolvimento e não fazem parte do workflow de CI.

## Licença

Nenhuma licença de distribuição foi definida neste repositório até o momento.
