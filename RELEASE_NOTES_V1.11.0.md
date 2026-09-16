# DejotaCode v1.11.0 — Operação e Recuperação

## Resumo

A v1.11.0 consolida a operação pós-Admin Editorial sem alterar CRO, funil, CTAs ou taxonomia de analytics.

O foco desta versão é reconciliar documentação/runbooks com o estado real de produção e tornar backup/inventário mais reproduzíveis.

## Reconciliação operacional

- Arquitetura atualizada para refletir Admin Editorial, GitHub, CI e mídia R2.
- Fluxo editorial documentado como Admin → PR → CI → merge protegido → Pages.
- Runbook atualizado para o deploy automático do Cloudflare Pages após push na `main`.
- Documentos históricos da v1.9.0 receberam atualização pós-v1.10.0 sem apagar o contexto original.
- Issue #46 encerrada com evidência da v1.10.0.

## Backup D1

- A API ganhou `npm run backup:d1:production` para export manual e auditável do D1.
- O modo `--dry-run` valida destino/comando sem acessar o banco ou criar arquivos.
- A execução real não usa `--skip-confirmation` e não executa restore.
- Backups ficam em `.backups/`, ignorado pelo Git.
- Cada export gera manifesto local com tamanho, SHA-256 e commit Git.
- Política inicial: manter pelo menos 3 exports verificados e não executar purge automático.

## Inventário e proteção R2

- A API ganhou `npm run inventory:r2:production` somente leitura.
- O inventário usa metadados D1 e valida as URLs públicas com `HEAD`, sem baixar o corpo dos objetos.
- Snapshot validado em 16/09/2026: 23 objetos, 27.598.894 bytes, 22 em `images/` e 1 em `posts/`.
- As 23 URLs registradas responderam HTTP 200; 0 falhas.
- Limitação documentada: o inventário não detecta objetos órfãos no bucket sem registro correspondente na tabela `media`.
- Exclusões em massa continuam bloqueadas operacionalmente até existir inventário prévio e cópia segura dos objetos afetados.
- Espelhamento externo permanece pendente até existir destino seguro, credenciais de menor privilégio, retenção e teste de restore.

## Qualidade e produção

- `astro check`: 0 erros, 0 warnings e 0 hints.
- Build de produção: 46 páginas estáticas.
- QA: 1.896 referências internas, 0 links quebrados e 0 páginas HTML com problemas.
- Smoke de produção: 10/10 verificações aprovadas.
- PRs #83, #85 e #86 integrados com CI verde e deploy automático do Cloudflare Pages aprovado.

## Baseline de crescimento preservado

Nenhuma mudança desta versão altera CTA, funil guia/newsletter, campanhas ou nomes de eventos.

Os checkpoints continuam previstos para 23/09/2026 (D+7) e 30/09/2026 (D+14), sujeitos a volume suficiente para comparação.

## Compatibilidade com a API

O runtime de produção permanece compatível com a API v1.6.0. As ferramentas operacionais de backup/inventário e seu CI já estão na `main` da API e serão formalizadas separadamente como API v1.6.1.

Essas ferramentas não mudam rotas públicas nem contrato do Worker; nenhum redeploy da API foi necessário durante sua integração.

## Rollback

A tag frontend anterior `v1.10.0` permanece preservada. Rollback do frontend deve reutilizar commit/tag homologado sem reescrever `main` e sem acoplar restauração D1/R2 ao rollback de código.
