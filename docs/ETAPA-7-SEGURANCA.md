# Etapa 7 — Segurança avançada

- Rate limiting nativo da Cloudflare protege autenticação e formulários sem gravar contadores no D1.
- Chaves do limitador usam hash do endereço de rede e não são persistidas pelo aplicativo.
- Mutações autenticadas do CMS, convites e mídias geram auditoria com usuário, ação, rota, request ID e data; corpos, senhas e tokens nunca entram no log.
- Uma rotina diária remove sessões expiradas, convites usados ou vencidos e auditorias com mais de 180 dias.
- Respostas limitadas usam HTTP 429 e informam quando tentar novamente.

Os IDs de namespace do rate limiter são identificadores lógicos exclusivos dentro da conta Cloudflare e podem ser ajustados antes do primeiro deploy.
