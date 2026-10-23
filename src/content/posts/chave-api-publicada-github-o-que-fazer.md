---
title: "Publiquei uma chave de API no GitHub: o que fazer primeiro"
description: "Entenda por que revogar ou rotacionar uma chave exposta vem antes de limpar o histórico do repositório."
publishedAt: 2026-10-22
category: programacao
type: artigo
readingTime: 4
difficulty: iniciante
featured: false
draft: false
tags: ["seguranca-digital", "guia-pratico"]
---

Você abre um arquivo no GitHub e percebe uma chave que deveria ter ficado fora do repositório. Apagar a linha parece a reação mais rápida. O primeiro objetivo, porém, é impedir que aquela credencial continue funcionando.

Não cole a chave em uma conversa, chamado público ou ferramenta de diagnóstico para pedir ajuda.

## Primeiro, contenha a credencial exposta

A orientação do GitHub é revogar ou rotacionar o segredo antes de considerar a remoção de dados do histórico.

Abra o painel oficial do fornecedor que emitiu a chave e siga o procedimento correspondente. Em uma aplicação em produção, coordene a substituição com quem mantém o serviço: atualizar a configuração e confirmar o funcionamento faz parte da resposta.

Se houver indícios de uso indevido, trate o caso como um incidente. Consulte os registros e as opções de contenção oferecidos pelo fornecedor, sem presumir que a ausência de um alerta significa ausência de acesso.

## Depois, entenda onde ela apareceu

Registre o repositório, os arquivos e o intervalo de exposição conhecido, sem copiar o valor do segredo. Verifique também configurações de integração e outros locais relacionados que possam repetir a mesma credencial.

A publicação pode ter ocorrido em um commit anterior. Se essa distinção ainda não estiver clara, o guia de [Git e GitHub](/blog/git-e-github-entenda-a-diferenca/) explica o papel do histórico local e da hospedagem do repositório. Remover o valor da versão atual não demonstra que ele desapareceu do histórico ou de cópias já obtidas por outras pessoas.

Essa é a razão para não tratar a limpeza como substituta da revogação.

## Limpar o histórico exige coordenação

Reescrever histórico pode afetar colaboradores e referências do projeto. O GitHub descreve consequências e procedimentos específicos; não existe um comando universal adequado a qualquer repositório.

Antes de executar uma reescrita, defina com a equipe o alcance, a necessidade e como as cópias de trabalho serão atualizadas. Se você não administra o projeto, avise o responsável por um canal privado, indicando a localização da exposição sem reproduzir a credencial.

## Evite repetir o caminho do vazamento

Uma revisão prática pode perguntar:

- O projeto tem um arquivo de exemplo com valores fictícios?
- As credenciais reais ficam na configuração apropriada ao ambiente?
- O processo de revisão permite identificar segredos antes do envio?
- Há outras chaves reutilizadas que precisam de avaliação?

Arquivos ignorados ajudam no fluxo futuro, mas não desfazem uma publicação que já aconteceu. Também não envie credenciais em respostas a mensagens suspeitas: confira os cuidados do guia de [como identificar phishing](/blog/phishing-como-identificar/).

## Fonte e transparência

Base documental: [GitHub — Removing sensitive data from a repository](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository), consultada em 22/10/2026. O cenário é hipotético; nenhuma chave foi exposta ou rotacionada nesta produção.
