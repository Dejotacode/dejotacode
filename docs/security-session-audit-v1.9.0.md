# Auditoria de segurança do frontend e sessão Admin — v1.9.0

Data: 2026-09-16

## Escopo

Auditoria read-only do frontend em produção e da implementação canônica da API, com foco em autenticação, sessão, CSRF, CORS, armazenamento no navegador e exposição de configuração.

## Evidências verificadas

- `/admin/` usa `noindex, nofollow`.
- A API restringe CORS ao `SITE_ORIGIN`; origens não autorizadas não recebem `Access-Control-Allow-Origin`.
- A API envia HSTS, `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff` e `Referrer-Policy` nas respostas auditadas.
- O middleware de autenticação exige sessão válida e CSRF em métodos mutáveis autenticados.
- O login possui rate limiting por origem de rede derivada de IP e não diferencia usuário inexistente de senha incorreta na resposta pública.
- A configuração canônica da sessão usa cookie `HttpOnly`, `Secure` fora de local, `SameSite=Strict`, caminho `/api` e expiração de 7 dias.
- O token de sessão é persistido apenas como hash no D1; o CSRF também é persistido como hash.
- O frontend não grava senha, cookie de sessão ou CSRF em `localStorage`/`sessionStorage`.
- A URL pública da API aparece no build como esperado; a varredura não identificou secrets operacionais conhecidos no bundle estático.

## Armazenamento no navegador

O armazenamento cliente encontrado é funcional e não autenticador:

- tema visual em `localStorage`;
- progresso de trilhas em `localStorage`;
- marcadores temporários de analytics em `sessionStorage`;
- e-mail digitado na pré-etapa da newsletter em `sessionStorage`, removido após ser reaproveitado na página da newsletter.

O e-mail temporário é dado pessoal, embora não seja credencial. A implementação atual reduz persistência ao usar `sessionStorage` e remover o valor após o preenchimento.

## Pontos para hardening futuro

### Headers do frontend estático

Nas respostas HTML do site não foram observados HSTS, CSP, `X-Frame-Options` ou `Permissions-Policy` explícitos. A API já possui parte desse hardening.

Não aplicar CSP de forma improvisada: o frontend possui scripts inline gerados pelo Astro e uma política restritiva exige inventário/testes para não quebrar navegação, analytics ou formulários.

### Rotação do CSRF

`GET /api/auth/session` rotaciona o CSRF da sessão. Isso reduz reutilização do token, mas duas abas autenticadas podem fazer uma aba manter um CSRF anterior depois que a outra consulta a sessão.

Hoje a única mutação do Admin moderno é logout. Antes de ampliar o Admin para operações editoriais, o ciclo de vida do CSRF deve ser reavaliado para múltiplas abas e operações concorrentes.

### Sessão

A duração configurada é de 7 dias. Antes de o Admin ganhar recursos de escrita/publicação, avaliar timeout operacional mais curto, rotação de sessão após autenticação e eventual revogação central visível no painel.

## Decisão desta auditoria

Nenhuma mudança de segurança foi aplicada à camada de entrega ou à API nesta fase. Os controles atuais são adequados ao Admin moderno de leitura de métricas, e mudanças de headers/cookies/CSRF têm potencial de impacto transversal.

O hardening deve ocorrer em mudança própria, com preview, testes de login/logout, CORS, formulários públicos e rollback explícito.

## Guardrails preservados

- sem alteração em CTA ou funil público;
- sem alteração de D1, Worker, DNS, R2 ou secrets;
- sem deploy;
- baseline D+7/D+14 da v1.7.0 preservado.
