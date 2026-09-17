# Linux do Zero — Capítulo 7

## Arquivos, usuários e permissões sem mistério

### Onde estamos

Você já sabe navegar pelo sistema e usar comandos básicos. Agora vamos entender uma das ideias mais importantes do Linux: nem todo usuário pode fazer tudo, e nem todo arquivo deve aceitar qualquer alteração.

Permissões existem para limitar danos e organizar responsabilidades.

> **ENTENDA**
> Pense numa casa compartilhada. Algumas portas são de uso comum, outras pertencem a uma pessoa, e algumas áreas exigem uma chave especial. Permissões são uma forma de dizer quem pode fazer o quê.

## O que você vai conseguir fazer

Ao final deste capítulo, você será capaz de:

- identificar seu usuário e grupos;
- ler permissões com `ls -l`;
- entender leitura, escrita e execução;
- alterar uma permissão simples em arquivo de teste;
- reconhecer quando `sudo` é realmente necessário;
- evitar permissões excessivas como solução automática.

## Passo 1 — Descubra quem você é no sistema

```bash
whoami
id
```

`whoami` mostra o usuário atual. `id` mostra também identificadores e grupos associados.

## Passo 2 — Leia permissões com `ls -l`

Entre no laboratório e crie um arquivo:

```bash
cd ~/linux-do-zero-lab
touch permissoes.txt
ls -l permissoes.txt
```

Você verá uma linha parecida com:

```text
-rw-r--r-- 1 usuario usuario 0 ... permissoes.txt
```

O primeiro caractere indica o tipo do item. Depois vêm três blocos:

- permissões do dono;
- permissões do grupo;
- permissões dos demais usuários.

As letras principais são:

- `r` — leitura;
- `w` — escrita;
- `x` — execução.

> **VOCÊ NÃO PRECISA DECORAR**
> Leia da esquerda para a direita. Primeiro identifique o dono, depois o grupo, depois os demais. Com prática, a linha deixa de parecer um código secreto.

## Passo 3 — Altere uma permissão simples

Vamos tornar um arquivo executável apenas como exercício:

```bash
printf '#!/bin/sh\necho "Olá, Linux"\n' > ola.sh
chmod u+x ola.sh
ls -l ola.sh
```

Agora execute:

```bash
./ola.sh
```

`chmod u+x` significa: adicionar (`+`) permissão de execução (`x`) ao usuário dono (`u`).

> **ENTENDA**
> Usar a forma simbólica, como `u+x`, ajuda o iniciante a enxergar a intenção. Números como `755` existem e são comuns, mas não precisam ser seu primeiro idioma de permissões.

## Passo 4 — Entenda `sudo`

`sudo` permite executar uma ação com privilégios administrativos quando sua conta está autorizada.

Ele não é um prefixo mágico para fazer comandos “funcionarem”.

> **ATENÇÃO**
> Se um comando falhou e você não entendeu o motivo, não coloque `sudo` automaticamente na frente. Primeiro descubra o que ele tenta modificar.

O sistema pede senha porque está elevando o nível de confiança daquela ação. Use essa pausa a seu favor: releia o comando antes de confirmar.

## Passo 5 — Evite permissões amplas demais

Você pode encontrar na internet soluções do tipo “use `chmod 777`”. Isso dá leitura, escrita e execução para todos os grupos de permissão naquele item.

Às vezes há cenários técnicos específicos, mas para resolver um erro comum de iniciante quase sempre é um sinal para investigar melhor.

> **DICA DO DEJOTA**
> A melhor permissão é a menor que permite a tarefa legítima acontecer. Mais acesso não significa mais correto.

## Erros comuns

### Usar `sudo` para qualquer erro
Permissão negada pode ter causas diferentes. Elevar privilégios sem entender só aumenta o impacto possível.

### Tornar tudo executável
Arquivos de texto, imagens e documentos não precisam de permissão de execução apenas porque “talvez ajude”.

### Alterar dono de arquivos do sistema por tentativa
Mudar propriedade pode quebrar expectativas de serviços e pacotes. Pratique apenas no laboratório.

## Teste você mesmo

1. entre em `~/linux-do-zero-lab`;
2. crie `teste-permissao.txt`;
3. use `ls -l` e identifique dono, grupo e demais;
4. crie um script simples como o exemplo anterior;
5. adicione execução apenas ao dono;
6. confirme a mudança com `ls -l`;
7. remova a permissão com `chmod u-x ola.sh` e observe o resultado.

## Checklist do capítulo

- [ ] Sei qual usuário está ativo.
- [ ] Entendo os três grupos de permissões.
- [ ] Reconheço `r`, `w` e `x`.
- [ ] Consigo usar `chmod` de forma simples e consciente.
- [ ] Sei que `sudo` aumenta privilégios e risco.
- [ ] Não uso `chmod 777` como solução genérica.
- [ ] Pratico mudanças de permissão apenas em arquivos que posso perder.

## Próximo passo

Você já instalou o sistema, aprendeu o terminal e entende permissões básicas. Falta uma habilidade que separa dependência de autonomia: saber investigar problemas sem piorá-los.

> **DICA DO DEJOTA**
> Segurança não é impedir você de usar o computador. É garantir que cada ação tenha o alcance necessário — e não muito mais.