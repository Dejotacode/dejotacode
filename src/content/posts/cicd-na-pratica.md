---
title: "CI/CD na prática: o que acontece quando o pipeline quebra"
description: "Entenda CI/CD pelo workflow real do DejotaCode e saiba investigar falhas de check, build e QA antes de publicar."
publishedAt: 2026-10-13
updatedAt: 2026-10-13
category: programacao
type: artigo
readingTime: 3
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

Isso pode ser conferido no [workflow público do DejotaCode](https://github.com/Dejotacode/dejotacode/blob/main/.github/workflows/ci.yml). O link aponta para a versão vigente, que pode evoluir depois desta revisão. É um exemplo do fluxo configurado, sem alegar aqui a investigação de um incidente específico. Se o check falhar, a execução normal não avança ao deploy. Se o smoke test falhar, o deploy já ocorreu: é necessário investigar e seguir o procedimento de recuperação.

Um build aprovado não comprova que um evento chegou ao serviço de analytics. Essa distinção também aparece no tutorial de [instalação e validação da Google tag](/blog/como-instalar-e-validar-google-tag/).

## Como investigar uma execução com falha

Abra a execução correspondente ao commit ou PR e identifique o primeiro job que falhou. Expanda a etapa, encontre a causa original e confira quais passos realmente chegaram a executar. Uma mensagem final de “processo encerrado com erro” costuma ser consequência, não diagnóstico.

| Etapa com falha | O que conferir primeiro |
|---|---|
| Instalação | Lockfile, versão de Node e acesso ao registro |
| Check | Arquivo e diagnóstico de tipos reportados |
| Build | Importações, conteúdo e variáveis exigidas pelo build |
| QA | URL ou regra que o validador identificou |
| Deploy | Projeto, branch e permissões da credencial, sem expor o token |
| Smoke | URL pública, propagação e resposta da aplicação |

Exemplo ilustrativo: se o QA identifica um link interno cujo destino não existe, corrija o caminho ou publique o destino junto quando autorizado. Não remova a validação para tornar o pipeline verde. Reproduza a etapa localmente usando o mesmo comando e confira o diff antes do novo envio.

Após um deploy, uma falha de smoke exige verificar o domínio e a execução. Repetir o job não garante rollback. Se houver regressão, siga o procedimento de recuperação com um commit conhecido e valide a versão resultante.

Para entender branches, commits e PRs, leia [Git e GitHub: a diferença](/blog/git-e-github-entenda-a-diferenca/).

## Um pipeline mínimo

1. instalar dependências;
2. verificar tipos/lint;
3. executar testes;
4. gerar build;
5. validar artefatos;
6. publicar somente se as etapas anteriores passarem;
7. executar smoke checks.

## Fonte oficial

- [GitHub Actions: guia inicial](https://docs.github.com/pt/actions/get-started/quickstart)

Referência oficial conferida nesta revisão em 13/10/2026.
