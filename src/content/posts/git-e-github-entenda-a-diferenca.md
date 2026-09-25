---
title: "Git e GitHub: entenda a diferença sem complicação"
description: "Entenda a diferença entre Git e GitHub e pratique o fluxo básico de status, add, commit e push para versionar seu primeiro projeto."
publishedAt: 2026-08-29
updatedAt: 2026-09-25
category: programacao
type: tutorial
readingTime: 11
difficulty: iniciante
featured: false
draft: false
tags: ["git", "github", "versionamento"]
---

Git e GitHub trabalham juntos, mas não são a mesma coisa.

Entender essa diferença evita muita confusão quando você começa a salvar projetos, acompanhar mudanças e publicar código.

Se você já construiu [seu primeiro site com HTML e CSS](/blog/primeiro-site-html-css/), esse é um ótimo projeto para usar como prática.

## O que é Git

Git é um sistema de controle de versão.

Ele registra o histórico dos arquivos no seu computador.

Em vez de criar pastas como:

```text
projeto-final
projeto-final-agora-vai
projeto-final-versao-2
projeto-final-definitivo
```

você mantém um projeto e registra pontos importantes da evolução.

Esses pontos são chamados de **commits**.

## O que é GitHub

GitHub é uma plataforma que hospeda repositórios Git na internet.

Ele acrescenta recursos como:

- armazenamento remoto;
- colaboração;
- Pull Requests;
- Issues;
- revisão de código;
- automações;
- histórico compartilhado.

Git pode existir sem GitHub.

GitHub, por outro lado, usa Git como parte central do fluxo de versionamento.

## Uma analogia simples

Pense no Git como o histórico salvo no seu computador.

O GitHub funciona como uma cópia remota desse projeto, com ferramentas extras para colaboração e organização.

Não é exatamente um “Google Drive de código”, porque o Git registra versões e relações entre mudanças de uma forma própria.

## Verifique se o Git está instalado

No terminal:

```bash
git --version
```

Se o Git estiver instalado, você verá o número da versão.

Se o comando não existir, instale o Git pelo método recomendado para o seu sistema operacional antes de continuar.

## Inicie um repositório

Entre na pasta do seu projeto:

```bash
cd meu-primeiro-site
```

Confira onde está:

```bash
pwd
```

Depois inicialize o Git:

```bash
git init
```

Isso cria a estrutura que o Git usa para acompanhar o histórico.

## Confira o estado com git status

Execute:

```bash
git status
```

Esse comando mostra, entre outras informações, quais arquivos ainda não fazem parte de um commit e quais foram modificados.

`git status` é um dos comandos mais úteis para iniciantes porque ajuda a entender o estado do repositório antes de agir.

## Prepare os arquivos com git add

Para preparar um arquivo específico:

```bash
git add index.html
```

Depois confira novamente:

```bash
git status
```

Você deve perceber que o arquivo mudou de estado.

O `git add` não publica nada na internet. Ele apenas prepara mudanças para o próximo commit.

## Registre um commit

Agora crie um commit:

```bash
git commit -m "cria estrutura inicial do site"
```

A mensagem deve explicar de forma curta o que aquele ponto do histórico representa.

Evite mensagens vagas como:

```text
alteracoes
coisas
teste
```

Prefira algo que ajude você a entender o histórico depois.

## O que é um repositório remoto

Até aqui, tudo pode estar apenas no seu computador.

Um repositório remoto é uma cópia acessível por meio de um serviço como GitHub.

Depois de criar um repositório no GitHub, normalmente você conecta o projeto local a ele usando um endereço remoto.

O comando exato depende da URL do seu repositório.

## O que git push faz

Depois que o repositório remoto estiver configurado, `git push` envia commits locais para esse remoto.

É importante entender a sequência:

**editar → conferir → preparar → commit → enviar**

Ou seja:

```text
arquivo
  ↓
git status
  ↓
git add
  ↓
git commit
  ↓
git push
```

## GitHub não substitui seus commits locais

Criar um repositório no GitHub não registra automaticamente todas as mudanças feitas no seu computador.

Você continua usando Git localmente para criar o histórico.

Depois envia os commits quando fizer sentido.

## Um fluxo básico de prática

Faça uma pequena alteração no `index.html`.

Depois:

```bash
git status
git add index.html
git status
git commit -m "adiciona nova secao na pagina"
```

Observe o resultado de cada comando.

Não transforme a sequência em algo automático antes de entender cada etapa.

## Cuidado com arquivos sensíveis

Antes de enviar um projeto para um repositório público, verifique se não existem:

- senhas;
- tokens;
- chaves privadas;
- arquivos `.env` com segredos;
- credenciais de serviços.

O Git mantém histórico. Remover um segredo em um commit posterior não significa automaticamente que ele deixou de existir no histórico anterior.

Se um segredo for publicado, trate-o como comprometido e substitua a credencial.

## Quando usar branch e Pull Request

No início, você pode aprender o fluxo básico primeiro.

Depois, branches permitem trabalhar em mudanças separadas.

Pull Requests ajudam a revisar essas mudanças antes de integrá-las à branch principal.

Esse fluxo é especialmente útil quando o projeto começa a crescer ou quando mais pessoas trabalham nele.

## O que você deve entender ao terminar

Você não precisa decorar todos os comandos do Git.

Mas deve conseguir explicar:

- Git registra versões;
- GitHub hospeda repositórios e adiciona colaboração;
- `git status` mostra o estado;
- `git add` prepara mudanças;
- `git commit` registra um ponto do histórico;
- `git push` envia commits para um remoto configurado.

Com essa base, comandos mais avançados deixam de parecer uma lista aleatória.

## Próximo passo

Agora você já percorreu uma sequência completa: entendeu a web, separou HTML/CSS/JavaScript, construiu uma página, estudou fundamentos de JavaScript e começou a versionar o projeto.

Volte à [trilha Primeiros passos na programação](/trilhas/primeiros-passos-programacao/) para marcar seu progresso.

Quando quiser transformar esse aprendizado em algo apresentável, continue com [Como escolher seu primeiro projeto de portfólio](/blog/escolher-primeiro-projeto-portfolio/).
