# Operações do DejotaCode

## Objetivo

Este documento reúne regras operacionais para desenvolvimento, QA, CI e preparação de release do frontend DejotaCode.

## Pré-requisitos

- Node.js `>=22.12.0`;
- npm compatível com o `package-lock.json` do projeto;
- acesso ao repositório GitHub quando for necessário publicar branches ou pull requests.

## Instalação reproduzível

Use:

```bash
npm ci
```

O projeto mantém `package-lock.json` versionado. Em validações de CI e QA, prefira `npm ci` em vez de `npm install`.

## Desenvolvimento local

Crie `.env.development.local` com a API local:

```env
PUBLIC_API_URL=http://localhost:8787
```

Depois execute:

```bash
npm run dev
```

Não versione `.env.development.local`.

## QA local

Antes de propor integração, execute:

```bash
npm ci
npm run check
npm run build:production
```

Critérios mínimos para aprovação:

- instalação concluída sem erro;
- `astro check` sem erros;
- build de produção concluído;
- working tree sem alterações inesperadas;
- diff limitado ao escopo planejado.

## Builds por ambiente

### Preview

```bash
npm run build:preview
```

Esse comando primeiro executa `env:check:preview`.

### Produção

```bash
npm run build:production
```

Esse comando primeiro executa `env:check:production`.

As validações rejeitam endpoint ausente, URL inválida, HTTP inseguro, localhost e endpoint diferente do esperado para o ambiente.

## CI no GitHub Actions

Arquivo:

```text
.github/workflows/ci.yml
```

Disparos:

- `pull_request`;
- `push` para `main`.

Job de qualidade:

1. checkout;
2. setup do Node 24;
3. `npm ci`;
4. `npm run check`;
5. `npm run build:production`.

O workflow usa somente:

```yaml
permissions:
  contents: read
```

Ele não contém etapa de deploy.

## Fluxo recomendado de integração

1. partir de `main` limpa e atualizada;
2. criar uma branch de escopo único;
3. implementar a mudança;
4. executar QA local quando houver ambiente local disponível;
5. revisar diff e arquivos alterados;
6. publicar a branch;
7. abrir pull request para `main`;
8. aguardar CI verde;
9. integrar somente o conteúdo auditado;
10. confirmar CI de `push` na `main`.

## Gates de segurança

Interrompa a integração se ocorrer qualquer um destes casos:

- `main` mudou durante a preparação e a nova base não foi auditada;
- o diff contém arquivos fora do escopo;
- o CI falhou;
- o build de produção falhou;
- surgiram alterações locais não explicadas;
- a integração deixou de ser fast-forward quando esse for o método aprovado para a mudança;
- houver qualquer necessidade inesperada de credenciais, secrets, Cloudflare, D1 ou migrations.

## Release e deploy

Release e deploy são operações separadas do CI.

Antes de uma release, valide explicitamente:

- versão que será publicada;
- commit exato da `main`;
- QA e CI verdes;
- diff desde a release anterior;
- alvo correto de Cloudflare Pages;
- variáveis de ambiente de produção;
- necessidade ou não de alterações na API.

Não deduza que um merge em `main` implica autorização para:

- criar tag;
- criar GitHub Release;
- executar deploy;
- alterar configuração Cloudflare;
- alterar D1;
- executar migrations.

Essas ações devem ser deliberadas separadamente.

## Runbooks operacionais

Os procedimentos de produção ficam separados deste guia de desenvolvimento para reduzir risco de execução acidental.

- [`runbook-deploy-rollback.md`](runbook-deploy-rollback.md) — deploy, homologação e rollback do frontend e da API;
- [`backup-recovery.md`](backup-recovery.md) — inventário de dados, exportação segura do D1 e estratégia de recuperação.
- [`admin-scope-v1.9.0.md`](admin-scope-v1.9.0.md) — decisão de produto sobre autenticação, métricas e eventual CMS.

Qualquer etapa que altere migrations, DNS, secrets ou dados de produção deve continuar exigindo aprovação explícita.

## Variáveis públicas

`PUBLIC_API_URL` é incorporável ao frontend. Nunca armazene tokens, senhas, chaves privadas ou outros segredos em variáveis `PUBLIC_*`.

## Checklist rápido antes de integração

- branch correta;
- base correta;
- working tree limpa;
- escopo do diff confirmado;
- `npm ci` aprovado;
- `npm run check` aprovado;
- `npm run build:production` aprovado;
- PR apontando para `main`;
- CI do PR verde.

## Checklist rápido depois da integração

- `main` local/remota alinhadas;
- commit integrado corresponde ao aprovado;
- CI de `push` em `main` verde;
- nenhum deploy, tag ou release executado acidentalmente.
