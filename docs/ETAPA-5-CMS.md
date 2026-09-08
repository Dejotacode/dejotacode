# Etapa 5 — CMS e autenticação

O CMS é estático no navegador e toda autorização acontece novamente no Worker. A sessão usa cookie HttpOnly, Secure em preview/produção, SameSite Strict e expira em sete dias. Alterações exigem token CSRF.

## Primeiro administrador

1. Copie `api/.dev.vars.example` para `api/.dev.vars` no ambiente local.
2. Em produção, configure `CMS_BOOTSTRAP_TOKEN` com `wrangler secret put`.
3. Aplique as migrations.
4. Envie uma única requisição `POST /api/auth/bootstrap` com o segredo no cabeçalho `X-Bootstrap-Token`, nome, e-mail e senha com pelo menos 12 caracteres.
5. Depois da primeira conta, o endpoint recusa novas inicializações.

Novas contas só são criadas por convite emitido por administrador. Convites expiram em 48 horas e tokens, senhas e sessões são persistidos apenas como hashes.
