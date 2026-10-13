---
title: "CI/CD na prática: o que acontece quando o pipeline quebra"
description: "Entenda CI/CD pelo workflow real do DejotaCode e saiba investigar falhas de check, build e QA antes de publicar."
publishedAt: 2026-10-13
category: programacao
type: artigo
readingTime: 2
difficulty: intermediario
featured: false
draft: false
tags: [cicd, github actions, deploy, testes, devops]
---

CI/CD transforma verificações repetitivas em um processo automatizado. Em vez de confiar que alguém lembrou de testar tudo, o pipeline executa etapas definidas antes de uma alteração chegar à produção.

## CI e CD

Integração contínua executa validações frequentes, como lint, typecheck, testes e build. Entrega ou implantação contínua estende o fluxo para preparar ou publicar versões.

GitHub Actions é uma plataforma de CI/CD que permite executar workflows em eventos como push e pull request.

## Quando o pipeline quebra

Uma falha não significa que CI/CD "atrapalhou". Ela mostra que uma regra automatizada detectou algo antes ou durante a entrega.

O caminho é identificar qual job falhou, ler a primeira causa útil, reproduzir localmente quando possível, corrigir e rodar novamente.

## Caso DejotaCode

O workflow atual do DejotaCode separa dois caminhos. Em pull requests, instala dependências com `npm ci`, executa `npm run check`, gera o build de produção e roda `npm run qa`. No push para a branch principal, repete as validações, publica no Cloudflare Pages e executa smoke test.

Isso pode ser conferido no arquivo `.github/workflows/ci.yml` do projeto. É um exemplo do fluxo configurado, sem alegar aqui a investigação de um incidente específico. Se o check falhar, a execução normal não avança ao deploy. Se o smoke test falhar, o deploy já ocorreu: é necessário investigar e seguir o procedimento de recuperação.

Um build aprovado não comprova que um evento chegou ao serviço de analytics. Essa distinção também aparece no tutorial de [instalação e validação da Google tag](/blog/como-instalar-e-validar-google-tag/).

## Um pipeline mínimo

1. instalar dependências;
2. verificar tipos/lint;
3. executar testes;
4. gerar build;
5. validar artefatos;
6. publicar somente se as etapas anteriores passarem;
7. executar smoke checks.

## Fonte oficial

- https://docs.github.com/pt/actions/get-started/quickstart

Referência oficial conferida nesta revisão em 13/10/2026.
