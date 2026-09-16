# DejotaCode v1.4.0 — Release Notes

A v1.4.0 melhora a experiência de descoberta, continuidade de aprendizagem e qualidade operacional do frontend do DejotaCode. O foco desta versão foi tornar a navegação mais coerente, reduzir duplicações editoriais e transformar verificações que antes eram manuais em gates permanentes de CI.

## Destaques

- Homepage alinhada às rotas e conteúdos realmente publicados.
- Quatro trilhas de aprendizagem expostas na homepage, incluindo Segurança Digital Essencial.
- Busca ampliada para encontrar artigos, tutoriais e trilhas no mesmo fluxo.
- Jornada de leitura aprimorada: artigos pertencentes a trilhas apontam diretamente para a próxima etapa quando houver continuidade.
- Metadados da homepage centralizados nas fontes oficiais de conteúdo e trilhas.
- Novos gates automáticos de links internos e qualidade estrutural do HTML.
- Melhorias de acessibilidade na navegação responsiva e suporte a `prefers-reduced-motion`.
- QA visual temporário cobrindo 48 combinações de página, viewport e tema, com 48/48 cenários aprovados.

## Descoberta e navegação

A homepage deixou de usar atalhos genéricos quando já existe uma rota específica. Links de trilhas e assuntos agora levam diretamente ao destino correspondente, e cards de conteúdos recentes/destaques refletem os conteúdos realmente publicados.

A seção de trilhas passou a exibir Linux do Zero, Primeiros Passos na Programação, IA no Dia a Dia e Segurança Digital Essencial. A grade usa quatro colunas no desktop, duas no tablet e uma no mobile.

## Busca

A busca local agora indexa não apenas os 17 conteúdos editoriais, mas também as quatro trilhas. Título, descrição, objetivo e etapas das trilhas entram no texto pesquisável, permitindo que uma consulta encontre tanto um conteúdo isolado quanto um caminho estruturado de aprendizagem.

A busca permanece client-side e não adiciona chamadas externas para processar a consulta.

## Jornada entre conteúdos

Nos artigos vinculados a uma trilha, o CTA final usa a ordem definida em `src/data/trails.ts`:

- quando existe uma próxima lição, o CTA avança diretamente para ela;
- na última lição, o CTA retorna para a página da trilha/progresso;
- conteúdos fora de trilhas preservam o CTA para newsletter.

## Fonte de verdade editorial

A homepage passou a derivar metadados dos próprios frontmatters dos posts e os dados das trilhas de `src/data/trails.ts`. A curadoria continua explícita por slug, mas título, descrição, categoria, data, tempo de leitura, dificuldade e demais dados editoriais não precisam mais ser duplicados manualmente.

Slugs curados inexistentes passam a causar falha de build, evitando cards silenciosamente ausentes.

## Acessibilidade

- Campo de busca invisível removido da ordem de foco no breakpoint intermediário do header.
- `Escape` devolve foco ao botão do menu somente quando o menu estava aberto.
- Rótulo acessível da busca compacta foi refinado.
- Rolagem suave e transições globais de tema respeitam `prefers-reduced-motion`.

## Qualidade e CI

O pipeline permanente agora executa, além do Astro check e build de produção:

- validação de links internos no HTML gerado;
- validação de um único `main` e `h1` por página;
- validação de `main#conteudo`;
- detecção de IDs duplicados;
- verificação de `alt` em imagens;
- verificação básica de nomes acessíveis em controles de formulário.

O comando `npm run qa` reúne as verificações de links e HTML para execução local ou em CI.

## QA visual

Foi executada uma suíte temporária com Playwright em uma branch isolada e não integrada à `main`.

Cobertura:

- 8 páginas representativas;
- desktop 1440 px;
- tablet 820 px;
- mobile 390 px;
- tema escuro;
- tema claro;
- 48 cenários no total.

As verificações incluíram HTTP 200, `main`, `h1`, tema aplicado, overflow horizontal, navegação responsiva e erros de runtime/console.

A primeira execução marcou quatro falsos positivos causados pelos honeypots anti-spam deliberadamente ocultos de newsletter e contato. O teste foi corrigido para ignorar regiões ocultas por design e a segunda execução terminou com **48/48 cenários aprovados**.

## Escopo operacional

Esta versão altera apenas o frontend e o pipeline de qualidade do repositório. Não inclui mudanças de backend, Workers, API, D1, R2, DNS ou configuração de Cloudflare.

Antes da preparação de release, a `main` estava 21 commits à frente da tag `v1.3.0`, sem divergência.

---

Feito para quem constrói o futuro.
