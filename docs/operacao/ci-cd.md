# CI/CD do DejotaCode

Status: vigente. Responsável: @control / @dev. Revisão: 10/10/2026.

## Objetivo

Usar o GitHub Actions para validações mecânicas e repetitivas, preservando a máquina local principalmente para edição, preview visual e verificações pontuais. O CI/CD não deve bloquear a evolução normal do DejotaCode nem substituir revisão visual ou decisões editoriais.

## Pipeline vigente

Em Pull Requests, o workflow `.github/workflows/ci.yml` executa uma validação completa com `npm ci`, `npm run check`, `npm run build:production` e `npm run qa`. O job de produção fica ignorado em Pull Requests e não acessa credenciais nem executa deploy.

Em `main`, o workflow executa uma única passagem completa no job `Validate and deploy Cloudflare Pages`: `npm ci`, `npm run check`, verificação da credencial Cloudflare, `npm run build:production`, `npm run qa`, deploy no Cloudflare Pages e `npm run smoke:production`.

A `main` não repete instalação, build ou QA em um segundo job. A validação acontece antes do deploy dentro da mesma execução, reduzindo trabalho duplicado sem introduzir artifacts ou dependências intermediárias entre build e produção.

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

No GitHub Actions: instalação limpa, Astro check, build de produção, QA e validação da Pull Request. Em `main`, a mesma passagem validada segue para deploy e smoke test de produção.

## Estado homologado

A primeira etapa de otimização estabilizou o pipeline em `ubuntu-24.04` e adicionou controle de concorrência para Pull Requests.

A segunda etapa eliminou a duplicação da `main`, consolidando validação e deploy em uma única passagem. O fluxo foi homologado em produção com sucesso de instalação, Astro check, build, QA, deploy Cloudflare e smoke test.

## Evolução segura

O pipeline deve continuar evoluindo incrementalmente. Não adicionar cache extra, separação adicional de jobs, reaproveitamento de artifacts ou outra camada de infraestrutura sem medir benefício real e preservar a simplicidade atual.
