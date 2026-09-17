# Linux do Zero — Bônus da Edição 2026

## Bônus 1 — Checklist pós-instalação

Use esta lista nas primeiras horas com o sistema.

- [ ] Reiniciei sem o pendrive conectado.
- [ ] Entrei normalmente com meu usuário.
- [ ] Confirmei data, hora e fuso horário.
- [ ] Atualizei o sistema.
- [ ] Reiniciei novamente se a atualização pediu.
- [ ] Testei Wi-Fi ou cabo de rede.
- [ ] Testei áudio e microfone.
- [ ] Testei Bluetooth, se eu uso.
- [ ] Testei webcam, se necessária.
- [ ] Testei suspensão e retorno.
- [ ] Confirmei resolução e monitor externo, se houver.
- [ ] Localizei configurações, arquivos, loja de aplicativos e terminal.
- [ ] Instalei apenas os aplicativos realmente necessários.
- [ ] Confirmei onde meus documentos importantes estão sendo salvos.
- [ ] Guardei chaves de recuperação fora do computador, se houver criptografia.

> **DICA DO DEJOTA**
> Não tente “otimizar” o sistema antes de saber como ele se comporta no estado normal. Primeiro crie uma referência estável.

## Bônus 2 — Checklist de segurança digital básica

Segurança para iniciante não começa com ferramentas sofisticadas. Começa com hábitos consistentes.

- [ ] Mantenho o sistema atualizado.
- [ ] Uso senha forte e exclusiva na conta principal.
- [ ] Não compartilho minha senha de usuário.
- [ ] Não uso `sudo` sem entender a ação.
- [ ] Prefiro repositórios e sites oficiais.
- [ ] Desconfio de scripts copiados da internet.
- [ ] Não desativo mecanismos de segurança apenas para “fazer funcionar”.
- [ ] Tenho backup de arquivos importantes.
- [ ] Testei se consigo acessar esse backup.
- [ ] Ativei autenticação em dois fatores nas contas que suportam.
- [ ] Evito reutilizar a mesma senha em serviços diferentes.
- [ ] Bloqueio a sessão quando me afasto do computador.
- [ ] Não guardo chaves de recuperação apenas no dispositivo protegido por elas.
- [ ] Leio permissões antes de instalar extensões e aplicativos desconhecidos.

> **ATENÇÃO**
> Linux não torna uma pessoa automaticamente imune a golpes, phishing, senhas fracas ou arquivos maliciosos. O sistema ajuda, mas comportamento continua importando.

## Bônus 3 — Folha rápida dos 20 comandos

| Comando | Para que serve |
|---|---|
| `pwd` | mostrar a pasta atual |
| `ls` | listar arquivos e pastas |
| `cd` | mudar de pasta |
| `mkdir` | criar pasta |
| `touch` | criar arquivo vazio |
| `cp` | copiar |
| `mv` | mover ou renomear |
| `cat` | mostrar conteúdo curto |
| `less` | ler conteúdo maior |
| `head` | mostrar o início |
| `tail` | mostrar o final |
| `grep` | procurar texto |
| `find` | localizar arquivos |
| `df` | consultar espaço dos sistemas de arquivos |
| `du` | consultar espaço ocupado |
| `free` | consultar memória |
| `uname` | informações do sistema/kernel |
| `whoami` | mostrar usuário atual |
| `man` | abrir o manual |
| `history` | mostrar histórico de comandos |

## Bônus 4 — Plano de prática de 30 dias

A proposta não é estudar horas por dia. Use sessões de 15–30 minutos e pule dias quando precisar. O importante é voltar.

### Semana 1 — Orientação

- Dia 1: reveja o que é Linux, kernel e distribuição.
- Dia 2: explore menus, configurações e gerenciador de arquivos.
- Dia 3: atualize o sistema e leia o que está sendo atualizado.
- Dia 4: instale um aplicativo confiável.
- Dia 5: remova um aplicativo que não precisa.
- Dia 6: teste áudio, rede, Bluetooth e suspensão.
- Dia 7: descanso ou revisão.

### Semana 2 — Terminal básico

- Dia 8: `pwd`, `ls` e `cd`.
- Dia 9: `mkdir` e `touch`.
- Dia 10: `cp` e `mv`.
- Dia 11: `cat` e `less`.
- Dia 12: `head`, `tail` e `grep`.
- Dia 13: `find`, `df` e `du`.
- Dia 14: revisão usando apenas o laboratório.

### Semana 3 — Sistema e permissões

- Dia 15: `free`, `uname`, `whoami` e `id`.
- Dia 16: leia `ls -l` em arquivos próprios.
- Dia 17: pratique `chmod u+x` e `chmod u-x` no laboratório.
- Dia 18: abra três páginas de manual com `man`.
- Dia 19: revise quando `sudo` faz sentido.
- Dia 20: escreva três riscos de permissões excessivas.
- Dia 21: descanso ou revisão.

### Semana 4 — Autonomia

- Dia 22: descreva um problema técnico fictício com contexto.
- Dia 23: colete informações do sistema sem alterar nada.
- Dia 24: pesquise uma dúvida usando documentação oficial.
- Dia 25: compare uma resposta antiga com a versão atual do sistema.
- Dia 26: analise um comando encontrado online antes de executá-lo.
- Dia 27: faça uma pequena mudança e registre como desfazer.
- Dia 28: revise seu checklist de backup e segurança.
- Dia 29: escolha um tema que quer aprender depois.
- Dia 30: refaça o checklist final do livro e registre o que hoje parece fácil.

> **DICA DO DEJOTA**
> Se você perder três dias, não “recomece o desafio”. Continue de onde parou. Aprender tecnologia não precisa virar uma sequência perfeita para funcionar.

## Bônus 5 — Recursos confiáveis para continuar

Comece sempre pelos canais do projeto que você está usando. Para Linux em geral, estas categorias são boas referências:

- documentação oficial da sua distribuição;
- páginas de suporte e notas de versão da distribuição;
- manual local acessível pelo comando `man`;
- documentação do kernel em `kernel.org` quando o assunto realmente chegar ao kernel;
- fóruns e comunidades oficiais da distribuição;
- DejotaCode para trilhas e tutoriais voltados a iniciantes.

A ArchWiki é uma referência técnica ampla e muito útil, mesmo para quem não usa Arch Linux, mas exige atenção: alguns procedimentos são específicos do Arch. Use-a para entender conceitos e sempre compare com a documentação da sua própria distribuição antes de alterar o sistema.

### Como avaliar uma fonte

Antes de confiar, pergunte:

1. quem publicou?
2. a página informa versão ou data?
3. a solução explica o que será alterado?
4. existe documentação oficial confirmando a ideia?
5. o procedimento permite desfazer a mudança?
6. outras fontes confiáveis apontam na mesma direção?

> **ATENÇÃO**
> Popularidade não é prova técnica. Um vídeo com milhares de visualizações ainda pode ensinar uma solução desatualizada ou arriscada.

## Fechamento dos bônus

Use esses materiais como ferramentas de apoio, não como tarefas obrigatórias. O objetivo do livro é fazer você depender menos de listas prontas e mais da sua capacidade de entender, consultar e decidir com segurança.