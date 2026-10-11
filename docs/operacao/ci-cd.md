# CI/CD do DejotaCode

Status: vigente. Responsável: @control / @dev. Revisão: 10/10/2026.

## Objetivo

Usar o GitHub Actions para validações mecânicas e repetitivas, preservando a máquina local principalmente para edição, preview visual e verificações pontuais. O CI/CD não deve bloquear a evolução normal do DejotaCode nem substituir revisão visual ou decisões editoriais.

## Pipeline vigente

Em Pull Requests, o workflow `.github/workflows/ci.yml` executa `npm ci`, `npm run check`, `npm run build:production` e `npm run qa`.

Em `main`, após a validação de qualidade, o workflow mantém o deploy existente no Cloudflare Pages e executa `npm run smoke:production`.

O runner fica fixado em `ubuntu-24.04` para reduzir variação de ambiente. Execuções antigas da mesma Pull Request podem ser canceladas automaticamente; execuções de `main` não são canceladas pelo mecanismo de concorrência para preservar a entrega de produção.

## Guardrails

- Alterações de CI/CD devem usar branch e Pull Request próprias.
- Não atualizar dependências, Astro, Node, Cloudflare, secrets, Worker, D1 ou DNS como efeito colateral de uma otimização de CI.
- Não alterar frontend, conteúdo, imagens, símbolos ou regras editoriais dentro de uma mudança exclusivamente de infraestrutura.
- O fluxo local continua funcional mesmo que uma melhoria de CI seja rejeitada ou revertida.
- Mudanças no deploy exigem revisão separada e autorização explícita.
- A `main` permanece a referência de produção; laboratório e configurações experimentais não são copiados automaticamente para o projeto.

## Divisão de responsabilidade

Localmente: edição, `npm run dev`, preview visual, Git e verificações pontuais.

No GitHub Actions: instalação limpa, Astro check, build de produção, QA e validação da Pull Request. Em `main`, também deploy e smoke test de produção.

## Evolução segura

O pipeline deve evoluir incrementalmente. Primeiro estabilizar runner e concorrência; depois medir se cache, separação de jobs ou reaproveitamento de artefatos trazem benefício real antes de introduzir mais complexidade.
