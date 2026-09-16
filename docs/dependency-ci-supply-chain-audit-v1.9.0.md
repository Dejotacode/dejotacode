# Auditoria de dependências, CI e supply chain — v1.9.0

Data: 2026-09-16
Escopo: frontend `Dejotacode/dejotacode` e API `Dejotacode/dejotacode-api`.

## Resultado

A postura atual está adequada para o estágio do projeto e não foi identificada vulnerabilidade conhecida pelo `npm audit` nos dois repositórios.

### Frontend

- `package-lock.json` presente;
- instalação determinística via `npm ci` no CI;
- `npm audit --omit=dev`: 0 vulnerabilidades;
- `npm audit`: 0 vulnerabilidades;
- workflow executa em PR e push para `main`;
- permissão global reduzida a `contents: read`;
- CI executa Astro check, build de produção e QA do HTML gerado;
- nenhum uso de `pull_request_target`, secrets de deploy ou comandos remotos encadeados para shell foi encontrado.
### API

- `package-lock.json` presente;
- instalação determinística via `npm ci` no CI;
- `npm audit`: 0 vulnerabilidades;
- workflow executa em PR e push para `main`;
- permissão global reduzida a `contents: read`;
- CI executa typecheck;
- o repositório canônico da API permanece separado do frontend.

## Observações de hardening futuro

Não são bloqueadores atuais, mas podem ser considerados quando a operação amadurecer:

- fixar actions de terceiros por SHA, em vez de depender apenas de tags de versão;
- automatizar atualização de dependências com revisão por PR;
- revisar periodicamente versões de Node, Astro, Hono, Wrangler e TypeScript;
- considerar SCA/CodeQL adicional apenas se trouxer sinal útil sem aumentar ruído operacional;
- manter deploy separado do workflow de qualidade, preservando privilégio mínimo.
## Guardrails

Esta auditoria não altera runtime, dependências, lockfiles, workflows, infraestrutura ou comportamento público.

Nenhuma mudança em CTA, newsletter, contato, analytics, D1, Worker, DNS, R2, secrets ou deploy foi realizada. O baseline D+7/D+14 permanece preservado.

## Conclusão

O risco imediato de supply chain observado é baixo: dependências auditadas sem vulnerabilidades conhecidas, instalação reproduzível e workflows com permissões mínimas. As melhorias restantes são de endurecimento operacional, não correções urgentes.