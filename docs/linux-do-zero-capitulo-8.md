# Linux do Zero — Capítulo 8

## Problemas comuns e como procurar solução com segurança

### Onde estamos

Você chegou ao ponto em que o Linux já não é mais um sistema desconhecido. Agora precisa aprender algo que nenhum livro consegue evitar: eventualmente alguma coisa não vai funcionar como você esperava.

Autonomia não significa nunca ter problema. Significa saber investigar sem piorar a situação.

> **ENTENDA**
> Resolver problemas é menos parecido com adivinhar uma senha e mais parecido com investigar uma cena: observe primeiro, altere depois.

## O que você vai conseguir fazer

Ao final deste capítulo, você será capaz de:

- descrever um problema de forma útil;
- coletar informações básicas do sistema;
- procurar mensagens de erro com contexto;
- avaliar se uma solução encontrada é confiável;
- testar uma mudança por vez;
- desfazer experimentos quando possível;
- saber quando parar e pedir ajuda.

## Passo 1 — Transforme “não funciona” em uma descrição

Antes de pesquisar, responda:

1. O que eu estava tentando fazer?
2. O que eu esperava que acontecesse?
3. O que aconteceu de verdade?
4. Apareceu alguma mensagem de erro?
5. Isso funcionava antes?
6. O que mudou desde então?

Uma descrição como “o Wi-Fi cai depois de voltar da suspensão” é muito mais útil que “Linux está com problema na internet”.

### Ficha rápida de diagnóstico

Antes de pedir ajuda, tente registrar:

- distribuição e versão;
- versão do kernel;
- modelo do computador ou hardware relevante;
- o que você estava tentando fazer;
- mensagem exata exibida;
- o que mudou recentemente.

## Passo 2 — Colete informações sem alterar nada

Alguns comandos de consulta ajudam a entender o ambiente:

```bash
uname -r
cat /etc/os-release
free -h
df -h
```

Eles mostram versão do kernel, distribuição, memória e espaço em disco sem modificar o sistema. Essa diferença é importante: alguns comandos **consultam** o estado; outros **alteram** arquivos ou configurações. Antes de executar algo encontrado online, pergunte: “isso só observa ou modifica alguma coisa?”.

> **DICA DO DEJOTA**
> Antes de mexer, registre o estado atual. Uma captura de tela ou um arquivo de texto com a mensagem original pode economizar muito tempo depois.

## Passo 3 — Pesquise a mensagem exata, mas com contexto

Se houver um erro curto, pesquise uma parte distintiva da mensagem junto com o nome da distribuição e, quando fizer diferença, a versão.

Prefira nesta ordem:

- documentação oficial;
- wiki ou fórum oficial do projeto;
- issue tracker ou repositório oficial;
- comunidades conhecidas com respostas explicadas;
- blogs e vídeos apenas quando a solução puder ser entendida e verificada.

> **ATENÇÃO**
> Data importa. Uma solução correta para uma versão antiga pode ser inadequada hoje. Compare a versão do seu sistema com a do tutorial.

### Sinais de uma solução suspeita

Desconfie quando a instrução:

- manda desativar uma proteção sem explicar o motivo;
- coloca `sudo` em tudo;
- pede para apagar arquivos do sistema por tentativa;
- baixa e executa um script desconhecido diretamente;
- não informa para quais versões funciona;
- não explica o que será alterado nem como desfazer;
- promete “corrigir qualquer Linux” com um único comando.

> **ATENÇÃO**
> Antes de publicar logs, capturas de tela ou saída do terminal, confira se não há nome de usuário, caminhos pessoais, e-mail, chaves, tokens ou outros dados sensíveis.

## Passo 4 — Leia o comando antes de copiar

Quando uma resposta sugerir terminal, pergunte:

- esse comando apenas consulta ou também altera?
- usa `sudo`?
- remove ou sobrescreve arquivos?
- muda permissões?
- adiciona um repositório externo?
- baixa e executa algo diretamente da internet?

Se você não consegue responder, ainda não está pronto para executar.

> **VOCÊ NÃO PRECISA DECORAR**
> Você pode consultar `man`, documentação e explicações antes de executar. Cautela não é insegurança; é método.

## Passo 5 — Mude uma coisa por vez

Se você aplicar cinco soluções seguidas e o problema desaparecer, não saberá qual delas resolveu. Pior: pode ter criado outro problema escondido.

Anote cada tentativa e o resultado. Um registro simples já ajuda:

| Tentativa | O que mudei | Resultado | Desfiz? |
|---|---|---|---|
| 1 |  |  |  |

## Passo 6 — Saiba quando parar

Pare antes de continuar se a solução pedir:

- apagar partições;
- alterar bootloader sem backup;
- desativar proteções que você não entende;
- desativar criptografia ou mecanismos de boot sem entender o efeito;
- trocar permissões de grandes partes do sistema;
- executar script desconhecido como administrador;
- remover muitos pacotes essenciais.

Nesses casos, procure documentação melhor ou peça ajuda mostrando exatamente o que já investigou.

> **SE DER ERRADO**
> Volte à última configuração conhecida, reverta a mudança quando possível e preserve a mensagem original do erro. A pior hora para apagar evidências é justamente quando você precisa entender o que aconteceu.

## Problemas comuns de iniciante

### Disco cheio
Sintomas podem incluir atualizações que falham ou aplicativos sem espaço para salvar. Verifique primeiro com `df -h` antes de apagar qualquer coisa.

### Aplicativo não abre
Tente iniciar pela interface e, se necessário, procure logs ou execute pelo terminal apenas para observar a mensagem de erro. Não reinstale o sistema inteiro por causa de um programa.

### Wi-Fi ou áudio intermitente
Registre modelo do hardware, distribuição, kernel e quando o problema acontece. “Às vezes falha” vira uma investigação muito melhor quando você identifica o gatilho.

### Atualização interrompida
Não faça tentativas aleatórias com remoção de pacotes. Procure a documentação da sua distribuição sobre recuperação do gerenciador de pacotes.

## Teste você mesmo

Escolha um problema fictício: “o navegador não abre”. Escreva uma investigação sem alterar o sistema:

1. descreva o resultado esperado;
2. registre a mensagem exibida;
3. anote distribuição e versão;
4. escolha três fontes que consultaria primeiro;
5. explique quais sinais fariam você rejeitar uma solução encontrada.

## Checklist do capítulo

- [ ] Sei transformar um problema em uma descrição objetiva.
- [ ] Sei coletar informações básicas sem alterar o sistema.
- [ ] Dou preferência a documentação oficial e fontes explicadas.
- [ ] Comparo versão e data antes de seguir um tutorial.
- [ ] Leio comandos antes de executá-los.
- [ ] Faço uma mudança por vez.
- [ ] Sei quando parar e pedir ajuda.

## Encerramento da jornada principal

Você começou perguntando o que era Linux. Agora consegue escolher uma distribuição, preparar a instalação, instalar com cuidado, atualizar o sistema, usar o terminal, entender permissões e investigar problemas.

Isso não significa que você “terminou Linux”. Significa algo melhor: você construiu uma base para continuar aprendendo sem depender de copiar passos às cegas.

> **DICA DO DEJOTA**
> A autonomia não aparece quando você sabe todas as respostas. Ela aparece quando você sabe fazer perguntas melhores, testar com cuidado e reconhecer os limites do que ainda não entende.
