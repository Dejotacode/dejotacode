---
title: "Timeshift protege documentos? Entenda os limites dos snapshots"
description: "Conheça o foco do Timeshift em recuperação do sistema e descubra o que conferir antes de contar com snapshots para proteger arquivos pessoais."
publishedAt: 2026-10-22
category: linux-seguranca
type: artigo
readingTime: 4
difficulty: iniciante
featured: false
draft: false
relatedPosts: ["habitos-seguranca-digital-iniciantes", "como-testar-linux-sem-instalar"]
tags: ["linux", "timeshift", "snapshots"]
---

Você criou um snapshot antes de atualizar o Linux. Ótimo: existe um ponto a considerar se for necessário recuperar o sistema. Isso não demonstra, porém, que seus documentos pessoais estão incluídos.

No Timeshift, entender o alcance da cópia vem antes de contar com ela.

## O foco é recuperar o sistema

O projeto descreve o Timeshift como uma ferramenta para proteger arquivos e configurações do sistema. Por padrão, os diretórios pessoais dos usuários ficam excluídos. Documentos, fotos e músicas não devem ser considerados protegidos apenas porque há snapshots agendados.

Essa separação também busca evitar que uma recuperação do sistema substitua seus arquivos pessoais por versões antigas. O projeto não recomenda incluir dados pessoais nos snapshots, pois os itens incluídos podem ser sobrescritos ao restaurar uma versão anterior.

A interface permite ajustar inclusões, inclusive itens ocultos do diretório pessoal. Alterar essa configuração muda o que pode ser restaurado: incluir mais coisas exige entender também o efeito de voltar a um snapshot anterior.

## Não confunda modo com cobertura

O Timeshift trabalha com modos RSYNC e BTRFS. A documentação informa requisitos específicos para o modo BTRFS, incluindo o layout de subvolumes suportado.

Saber que o disco usa BTRFS não basta para concluir que qualquer organização de partições funcionará. Confira a compatibilidade da instalação e o modo efetivamente usado.

Não altere partições, subvolumes ou filtros de um sistema em uso apenas para imitar uma captura de tela encontrada na internet. Se precisar entender o que é uma sessão live, consulte [como testar Linux sem instalar](/blog/como-testar-linux-sem-instalar/); iniciar essa sessão, por si só, não restaura nem protege os dados do disco.

## Faça quatro perguntas antes de confiar

- Qual é o modo selecionado e onde os snapshots ficam?
- Quais usuários, pastas e filtros estão incluídos?
- Existe um snapshot recente e adequado à mudança que pretendo fazer?
- Onde estão as cópias independentes dos documentos que não posso perder?

Uma pasta de trabalho pode estar fora do local que você imagina. Confira o caminho real, especialmente quando usa discos externos ou pastas montadas.

## Um exemplo de proteção com objetivos separados

Imagine que você quer desfazer uma alteração que prejudicou o sistema e também recuperar um texto apagado na semana passada.

São duas necessidades. O snapshot do sistema pode ser relevante para a primeira; o histórico dos seus documentos precisa ser conferido para a segunda. Não inicie uma restauração ampla só para procurar um arquivo pessoal.

Da mesma forma, guardar tudo no mesmo disco não cria independência contra a falha física desse disco. A orientação de manter [cópias separadas dos arquivos importantes](/blog/habitos-seguranca-digital-iniciantes/) continua valendo mesmo quando há snapshots. Avalie quais incidentes cada cópia suporta.

## O que fazer agora

Abra as configurações para consultar a cobertura atual, sem iniciar restauração nem mudar filtros por impulso. Anote o que está protegido e providencie uma estratégia própria para os arquivos pessoais.

Depois, planeje [um teste de recuperação em destino separado](/blog/como-testar-recuperacao-backup/). Recuperação do sistema merece um ensaio específico e não é demonstrada pela abertura de um documento restaurado.

## Fonte e transparência

Base documental: [Timeshift — repositório oficial e README](https://github.com/linuxmint/timeshift), consultado em 22/10/2026.

O cenário é hipotético. Não executamos snapshots, restaurações ou alterações de partições para este artigo. A cobertura deve ser confirmada na configuração real de cada instalação.
