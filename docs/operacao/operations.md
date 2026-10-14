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
npm run qa
```

Critérios mínimos para aprovação:

- instalação concluída sem erro;
- `astro check` sem erros;
- build de produção concluído;
- QA estrutural aprovado;
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

## Smoke test de produção

Após um deploy, execute:

```bash
npm run smoke:production
```

O script usa somente requisições de leitura. Ele verifica rotas públicas críticas, sitemap, RSS, saúde da API e confirma que uma sessão administrativa anônima continua protegida. Não envia formulário, não cria lead e não altera D1.

`SITE_URL` e `API_URL` podem sobrescrever os endpoints padrão quando for necessário homologar outro ambiente.

## CI e deploy no GitHub Actions

Arquivo: `.github/workflows/ci.yml`.

Disparos: `pull_request` e `push` para `main`.

O job `Check and build` executa `npm ci`, `npm run check`, `npm run build:production` e `npm run qa`. Em Pull Requests, não há deploy.

Em push para `main`, o job `Deploy Cloudflare Pages` roda somente depois do job de qualidade, reconstrói/valida o site, publica no projeto `dejota-code` e executa `npm run smoke:production`. `CLOUDFLARE_API_TOKEN` é secret do GitHub; não deve ser exibido ou movido para variável `PUBLIC_*`.

O workflow mantém `permissions: contents: read`. O deploy do Pages não executa migrations D1 nem deploy da API.

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

Release continua separada do CI/deploy. O push na `main` dispara o deploy automatizado do frontend, enquanto tag e GitHub Release permanecem operações deliberadas.

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
- alterar configuração Cloudflare fora do workflow aprovado;
- alterar D1;
- executar migrations.

Essas ações devem ser deliberadas separadamente.

## Runbooks operacionais

Os procedimentos de produção ficam separados deste guia de desenvolvimento para reduzir risco de execução acidental.

- [`runbook-deploy-rollback.md`](runbook-deploy-rollback.md) — deploy, homologação e rollback do frontend e da API;
- [`backup-recovery.md`](backup-recovery.md) — inventário de dados, exportação segura do D1 e estratégia de recuperação;
- [`../auditorias/d1-restore-rehearsal-v1.9.0.md`](../auditorias/d1-restore-rehearsal-v1.9.0.md) — evidência do ensaio de restauração isolada do D1;
- [`runbook-d1-readonly.md`](runbook-d1-readonly.md) — consultas D1 de diagnóstico sem mutação;
- [`editorial-workflow.md`](editorial-workflow.md) — criação, revisão, publicação e atualização de conteúdo;
- [`../auditorias/repository-hygiene-v1.9.0.md`](../auditorias/repository-hygiene-v1.9.0.md) — inventário de branches/stashes e política de limpeza;
- [`../decisoes/admin-scope-v1.9.0.md`](../decisoes/admin-scope-v1.9.0.md) — decisão de produto sobre autenticação, métricas e eventual CMS;
- [`../arquitetura/api-source-reconciliation-v1.9.0.md`](../arquitetura/api-source-reconciliation-v1.9.0.md) — estado da fonte da API e direção de reconciliação.
- [`../auditorias/v1.9.0-readiness.md`](../auditorias/v1.9.0-readiness.md) — consolidação dos critérios de aceite e regra de fechamento;
- [`../auditorias/remote-branch-audit-v1.9.0.md`](../auditorias/remote-branch-audit-v1.9.0.md) — reconciliação read-only das branches remotas históricas;
- [`../auditorias/dependency-ci-supply-chain-audit-v1.9.0.md`](../auditorias/dependency-ci-supply-chain-audit-v1.9.0.md) — dependências, lockfiles, permissões de CI e supply chain.
- [`v1.7.0-baseline-snapshot-template.md`](v1.7.0-baseline-snapshot-template.md) — formulário reproduzível para os checkpoints quantitativos D+7/D+14;
- [`../historico/v1.8.0-analysis-plan.md`](../historico/v1.8.0-analysis-plan.md) — árvore de decisão para escolher a primeira hipótese da v1.8 com base nos dados.

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
- `npm run qa` aprovado;
- PR apontando para `main`;
- CI do PR verde.

## Checklist rápido depois da integração

- `main` local/remota alinhadas;
- commit integrado corresponde ao aprovado;
- CI de `push` em `main` verde;
- `npm run smoke:production` aprovado quando houver deploy;
- nenhum deploy, tag ou release executado acidentalmente.


## Encerramento e limpeza de pastas temporárias — regra vigente

Status: vigente. Escopo: cópias de trabalho em /home/dejota/Workspace/fullstack/. Responsável: @control/@dev. Revisão: 2026-10-13. Regra estabelecida pelo usuário após a limpeza das oito worktrees encerradas.

Ao concluir uma tarefa, revisão, preview ou release, conferir as pastas temporárias usadas e encerrar as que não têm finalidade atual. O pedido do usuário autoriza essa limpeza dentro deste escopo quando todos os critérios abaixo forem comprovados; não pedir novamente a mesma autorização para cada pasta encerrada.

1. Confirmar a finalidade, a conclusão da entrega e a ausência de uso atual por outro chat, tarefa, PR ou processo. Nome antigo e ausência de processo, isoladamente, não comprovam abandono.
2. Conferir o estado Git, arquivos não versionados e ignorados, commits exclusivos, credenciais locais, bancos e evidências. Uma pasta limpa no Git pode conter dados importantes ignorados.
3. Garantir que o trabalho relevante está integrado ou recuperável em commits/branches conservados. Para mudanças locais e dados exclusivos, preservar no destino privado de backups e verificar integridade e recuperação antes de remover a pasta.
4. Não copiar dependências e artefatos regeneráveis por rotina: node_modules, dist e .astro podem ser reconstruídos. Não classificar bancos locais, secrets, originais de mídia ou resultados exclusivos como cache sem inspeção.
5. Remover worktrees encerradas pelo Git, usando o caminho absoluto conferido. Forçar remoção somente após preservar e verificar todas as alterações relevantes. Não usar exclusão recursiva ampla em fullstack.
6. Limpar registros de worktrees inexistentes, atualizar os caminhos de retomada e conferir que o projeto principal e os serviços que devem continuar ativos funcionam.
7. Registrar pastas removidas, justificativa, referências Git conservadas, localização e verificação da preservação e espaço recuperado. Ao terminar, informar o resultado ao usuário.

Manter projetos principais, APIs, frentes em andamento, integrações ativas e backups necessários. Na dúvida, preservar a pasta e registrar a pendência; não inferir autorização para descartar trabalho único ou interromper outro chat. Remover uma worktree não implica apagar sua branch, stash ou histórico. A exclusão desses registros segue a política de higiene Git e exige sua própria evidência.

A revisão de limpeza faz parte do encerramento de cada tarefa. Esta regra não cria uma tarefa agendada, não autoriza alterações em produção e não estabelece expiração automática de backups.



## Codespaces e ambiente independente

Status: procedimento de desenvolvimento; sem autorização automática de push, merge ou deploy. Revisão: 14/10/2026. Responsável: @control/@dev.

Pode-se clonar a main em ambiente separado e executar npm ci, check, build:production e QA. Isso não recupera alterações locais não enviadas, integrações da máquina ou acervo privado. Ler as fontes obrigatórias e comparar versões antes de editar. Nunca copiar a árvore local inteira nem resolver diferenças de runtime pela data dos arquivos.

No Codespace, trabalhar em /workspaces/dejotacode e branch própria. Manter porta 4321 privada, conferir processo antes de iniciar e não permitir fallback 4322. O ambiente existente validou instalação/check/build/QA na base 931a878; conexão pelo VS Code local confirmada visualmente em 13/10/2026 às 23:56 BRT. Isso não comprova sincronização de regras posterior.

Conferir plano, consumo e bloqueio de orçamento antes do uso. A conta foi registrada sem pagamento, orçamento zero com bloqueio e timeout de dez minutos; consultar o estado atual em vez de presumir permanência. Parar encerra computação, mas armazenamento continua medido. Não criar outro ambiente por falha de conexão. Não excluir sem preservar e verificar trabalho único; commit apenas dentro do Codespace não é backup externo.

Ao encerrar, parar o servidor e o Codespace e confirmar seu estado. Não confundir fechar a janela com parar o ambiente. Toda mudança de permissão, cobrança, infraestrutura ou publicação mantém autorização própria. Credenciais nunca pertencem ao repositório.
