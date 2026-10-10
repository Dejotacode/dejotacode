# Auditoria de resiliência do frontend — v1.9.0

Data: 2026-09-16
Escopo: leitura estática do frontend e correção pontual no Admin.

## Objetivo

Verificar estados de carregamento, falhas de rede e respostas de API sem alterar funil público, eventos de analytics ou dados.

## Resultado

- Newsletter e Contato usam `form-adapter.ts` com estados `idle`, `loading`, `success` e `error`.
- O adapter desabilita o botão durante envio, usa `try/catch`, trata `AbortError` e reabilita o formulário.
- Os formulários públicos possuem regiões `aria-live` para feedback.
- Analytics falha silenciosamente por desenho e não bloqueia navegação.
- A página de métricas possui fallback para erro de sessão ou falha ao carregar o resumo.
- Foi identificado um gap real no login do Admin: erro de rede no `fetch` deixava a interface presa em `Entrando…`.
## Correção aplicada

O submit do login agora:

- desabilita o botão enquanto a autenticação está em andamento;
- mantém o tratamento de erros HTTP retornados pela API;
- captura falhas de rede/CORS/indisponibilidade;
- exibe mensagem compreensível ao usuário;
- reabilita o botão ao encerrar a tentativa.

A correção é restrita à área privada `/admin/` e não altera CTA, newsletter, contato, eventos ou baseline da v1.7.0.

## Evidências de validação

- `npm run check`: 43 arquivos, 0 erros, 0 warnings, 0 hints.
- `npm run build:production`: 40 páginas estáticas geradas.
- `git diff --check`: sem problemas de whitespace.
- Nenhuma alteração em API, D1, Worker, DNS, R2, secrets ou configuração Cloudflare.

## Limitações

Esta auditoria estática não substitui testes de navegador com falhas de rede simuladas. Testes manuais de offline/timeout podem ser incorporados posteriormente ao checklist operacional sem necessidade de alterar o funil público.
