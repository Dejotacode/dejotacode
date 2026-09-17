# Segurança

A segurança operacional faz parte do fluxo de desenvolvimento do DejotaCode.

## Reportando uma vulnerabilidade

Não publique detalhes exploráveis em uma issue pública.

Prefira o canal privado de Security Advisories do GitHub quando disponível. Se precisar iniciar contato publicamente, descreva apenas que encontrou um possível problema de segurança, sem incluir credenciais, payloads sensíveis ou passos de exploração.

## Escopo

- frontend público e Admin Editorial;
- autenticação e integração com a API;
- pipeline GitHub Actions / Cloudflare Pages;
- exposição acidental de secrets ou dados pessoais.

Correções de segurança devem passar por revisão, CI e validação antes de produção. Nunca inclua tokens reais em logs, commits ou screenshots públicos.
