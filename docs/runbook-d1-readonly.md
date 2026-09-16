# Runbook de consulta D1 em modo leitura

## Objetivo

Padronizar inspeções de produção sem alterar schema ou dados.

## Fonte canônica da API

Use o repositório `Dejotacode/dejotacode-api`. O arquivo `wrangler.jsonc` desse repositório contém a configuração versionada do Worker e dos bindings por ambiente.

## Regra de segurança

Consultas operacionais devem usar apenas `SELECT`, `PRAGMA` de leitura e comandos equivalentes sem mutação. Não execute `INSERT`, `UPDATE`, `DELETE`, `DROP`, `ALTER`, migrations ou importações como parte de diagnóstico de rotina.

## Exemplo

Na raiz do repositório da API:

```bash
npx wrangler d1 execute DB \
  --env production \
  --remote \
  --command "SELECT metric_date,event_type,path,campaign,total FROM daily_metrics ORDER BY metric_date DESC LIMIT 20;"
```

Antes de usar uma consulta diferente, confirme qual tabela e quais colunas são necessárias. Evite selecionar conteúdo sensível quando agregados ou contagens forem suficientes.

## Diagnóstico seguro

Para inspeções de estrutura, prefira consultas como:

```sql
SELECT name FROM sqlite_master WHERE type='table' ORDER BY name;
PRAGMA table_info(daily_metrics);
```

## Evidência

Ao registrar uma inspeção em issue ou relatório, anote data/hora, ambiente, objetivo, consulta executada e resultado relevante. Não copie e-mails, mensagens de contato, tokens, hashes ou outros dados pessoais para documentação pública.

## Operações fora deste runbook

Backup, restauração e migrations seguem `docs/backup-recovery.md` e exigem tratamento separado. Este runbook não concede autorização para qualquer mutação em produção.
