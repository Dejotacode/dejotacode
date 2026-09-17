# Linux do Zero — Capítulo 6

## Terminal sem medo: 20 comandos essenciais

### Onde estamos

Você já consegue usar o Linux pela interface gráfica. Agora vamos conhecer o terminal como uma ferramenta de precisão: ele permite dizer ao sistema exatamente o que você quer fazer e enxergar resultados de forma clara.

Não existe prêmio por abandonar a interface gráfica. O objetivo é saber usar os dois caminhos.

> **VOCÊ NÃO PRECISA DECORAR**
> Você não precisa memorizar vinte comandos hoje. Precisa reconhecer para que eles servem e saber onde consultar quando esquecer.

## Antes de começar — crie uma área segura

Abra o terminal e descubra onde você está:

```bash
pwd
```

Depois crie uma pasta exclusiva para os exercícios:

```bash
mkdir -p ~/linux-do-zero-lab
cd ~/linux-do-zero-lab
```

Tudo deste capítulo será praticado dentro dessa pasta sempre que possível.

> **ATENÇÃO**
> Confira o resultado de `pwd` antes de executar comandos que movem, sobrescrevem ou removem arquivos.

## Os 20 comandos

### 1. `pwd` — onde estou?
Mostra o caminho da pasta atual.

### 2. `ls` — o que existe aqui?
Lista arquivos e pastas. Use `ls -la` para ver itens ocultos e mais detalhes.

### 3. `cd` — mudar de pasta
`cd pasta` entra em uma pasta; `cd ..` sobe um nível; `cd ~` volta para sua pasta pessoal.

### 4. `mkdir` — criar pasta
```bash
mkdir projetos
```

### 5. `touch` — criar arquivo vazio
```bash
touch notas.txt
```

### 6. `cp` — copiar
```bash
cp notas.txt copia-notas.txt
```

### 7. `mv` — mover ou renomear
```bash
mv copia-notas.txt arquivo-renomeado.txt
```

### 8. `cat` — mostrar conteúdo curto
```bash
cat notas.txt
```

### 9. `less` — ler conteúdo maior
```bash
less /etc/os-release
```
Pressione `q` para sair.

### 10. `head` — ver o começo
```bash
head /etc/os-release
```

### 11. `tail` — ver o final
```bash
tail /etc/os-release
```

### 12. `grep` — procurar texto
```bash
grep NAME /etc/os-release
```

### 13. `find` — localizar arquivos
```bash
find ~/linux-do-zero-lab -name "*.txt"
```

### 14. `df` — espaço dos sistemas de arquivos
```bash
df -h
```
A opção `-h` mostra tamanhos em unidades mais fáceis de ler.

### 15. `du` — tamanho ocupado por arquivos e pastas
```bash
du -sh ~/linux-do-zero-lab
```

### 16. `free` — uso de memória
```bash
free -h
```

### 17. `uname` — informações do sistema
```bash
uname -a
```

### 18. `whoami` — qual usuário está ativo?
```bash
whoami
```

### 19. `man` — manual do comando
```bash
man ls
```
Use as setas para navegar e `q` para sair.

### 20. `history` — histórico recente
```bash
history
```

## E o `rm`?

Você vai encontrar `rm` cedo ou tarde. Ele remove arquivos, mas não faz parte da nossa lista principal justamente porque queremos introduzi-lo com cuidado.

Dentro da pasta de laboratório, crie um arquivo descartável:

```bash
touch apagar-depois.txt
```

Confirme que ele existe com `ls`. Só então remova:

```bash
rm apagar-depois.txt
```

> **ATENÇÃO**
> Não copie exemplos com `rm -r`, curingas como `*` ou `sudo rm` sem entender exatamente o caminho atingido. No terminal, a lixeira nem sempre participa da história.

## O que acabou de acontecer

Você usou o terminal para navegar, criar, copiar, mover, ler, pesquisar e consultar o sistema. Nenhum desses comandos exige “ser programador”. Eles apenas oferecem uma forma textual e precisa de executar tarefas.

## Teste você mesmo

Sem olhar o exemplo anterior, tente:

1. entrar em `~/linux-do-zero-lab`;
2. criar uma pasta chamada `desafio`;
3. entrar nela;
4. criar `lembrete.txt`;
5. listar o conteúdo;
6. copiar o arquivo;
7. localizar os dois arquivos com `find`;
8. conferir quanto espaço o laboratório ocupa.

Se esquecer um comando, consulte. Esse é o exercício.

## Checklist do capítulo

- [ ] Sei descobrir em qual pasta estou.
- [ ] Sei listar e navegar por diretórios.
- [ ] Sei criar, copiar e mover arquivos simples.
- [ ] Sei ler e pesquisar conteúdo.
- [ ] Sei consultar espaço, memória e informações do sistema.
- [ ] Sei abrir o manual de um comando.
- [ ] Entendi por que remoção merece mais cuidado.

## Próximo passo

Agora que você sabe se orientar no terminal, vamos entender quem pode ler, alterar ou executar cada arquivo. Isso nos leva a usuários, grupos e permissões.

> **DICA DO DEJOTA**
> Quando esquecer um comando, não pense “eu não aprendi”. Pense “eu sei o que preciso procurar”. Isso já é autonomia.