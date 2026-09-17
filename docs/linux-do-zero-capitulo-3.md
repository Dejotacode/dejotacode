# Linux do Zero — Capítulo 3

## Preparação, backup e teste antes da instalação

### Onde estamos

Você já entendeu o que é Linux e aprendeu a escolher uma distribuição sem transformar a decisão em campeonato. Agora começa a parte prática de verdade.

Antes de instalar qualquer coisa, porém, vamos preparar o terreno.

Este capítulo existe para diminuir risco. A instalação não deve começar pelo botão "Instalar". Ela começa pelo backup, pela origem correta da imagem, pela verificação do arquivo e por um teste em modo live.

> **ATENÇÃO**
> Instalar um sistema operacional pode alterar partições e apagar dados se a opção errada for escolhida. Por isso, nenhuma etapa deste capítulo deve ser tratada como burocracia.

## O que você vai conseguir fazer

Ao final deste capítulo, você será capaz de:
- preparar seus arquivos antes da instalação;
- baixar uma imagem ISO de fonte oficial;
- entender o que é checksum;
- criar um pendrive inicializável com segurança;
- iniciar uma sessão live;
- testar o Linux sem instalar nada no disco.
## Passo 1 — Faça backup antes de qualquer mudança

Backup é uma cópia de segurança dos seus arquivos importantes.

Pode parecer óbvio, mas esta é a etapa que mais reduz o impacto de um erro. Se suas fotos, documentos, projetos e senhas exportadas existem em apenas um lugar, então você ainda não tem uma cópia de segurança.

> **ENTENDA**
> Pense no backup como a chave reserva de casa. Você espera nunca precisar dela, mas o dia em que precisar não é o momento de descobrir que ela não existe.

Copie pelo menos os arquivos que você não aceitaria perder para outro dispositivo ou serviço confiável. Depois, abra alguns arquivos dessa cópia para confirmar que ela realmente funciona.

Não basta arrastar uma pasta e presumir que terminou. Verificar a cópia faz parte do backup.

### O que vale revisar
- Documentos e trabalhos pessoais.
- Fotos e vídeos.
- Projetos e arquivos de estudo.
- Favoritos ou dados importantes do navegador.
- Chaves ou arquivos de autenticação que você saiba que usa.
- Arquivos salvos fora das pastas mais óbvias.

> **DICA DO DEJOTA**
> Se você não sabe onde seus arquivos importantes estão, não tenha pressa para instalar. Primeiro organize o que precisa ser preservado.
## Passo 2 — Baixe a ISO somente do projeto oficial

A instalação normalmente começa com um arquivo de imagem chamado **ISO**. Ele contém o sistema e pode ser gravado em um pendrive para iniciar o computador.

Baixe a ISO no site oficial da distribuição escolhida ou em um espelho indicado por esse projeto. Evite links encurtados, fóruns aleatórios e arquivos repostados por terceiros.

> **ENTENDA**
> A ISO é como uma imagem pronta de um disco de instalação. Você não deve apenas "abrir" esse arquivo: ele será usado para criar uma mídia inicializável.

Não baixe a ISO diretamente para o pendrive que será usado na instalação. Primeiro salve o arquivo no computador, verifique-o e só depois grave-o no dispositivo USB.

### Arquitetura do computador

Em PCs comuns atuais, a imagem geralmente é indicada como `64-bit`, `x86_64` ou `amd64`. Esses nomes podem parecer diferentes, mas normalmente apontam para a mesma família de processadores usada na maioria dos computadores com Intel ou AMD.

Dispositivos ARM, alguns notebooks específicos e placas como Raspberry Pi podem exigir imagens próprias.

> **VOCÊ NÃO PRECISA DECORAR**
> Se você usa um PC convencional recente com Windows em processador Intel ou AMD, a imagem de 64 bits para PC costuma ser a opção esperada. Quando houver dúvida, consulte a página oficial de requisitos da distribuição antes de baixar.
## Passo 3 — Verifique a integridade do arquivo

Depois do download, a distribuição costuma publicar um valor de verificação, normalmente SHA256 ou SHA512.

Esse valor funciona como uma impressão digital matemática do arquivo. Se o arquivo mudar — por corrupção no download ou adulteração — o resultado calculado deixa de coincidir com o valor oficial.

> **ENTENDA**
> Imagine duas malas fechadas. Por fora elas parecem iguais. O checksum funciona como uma conferência do conteúdo sem precisar abrir e comparar item por item.

Em Linux, um exemplo de verificação SHA256 é:

```bash
sha256sum nome-do-arquivo.iso
```

O terminal exibirá uma sequência longa de letras e números. Compare exatamente com o valor publicado pelo projeto oficial.

Se o valor não coincidir, não continue. Apague o arquivo e faça o download novamente a partir da fonte oficial.

> **ATENÇÃO**
> Um checksum igual confirma a integridade em relação ao valor publicado. Projetos como Debian e Linux Mint também oferecem assinaturas criptográficas dos arquivos de checksum para verificar a autenticidade da origem. Nesta edição, vamos manter a prática inicial simples e segura; a verificação de assinatura pode ser aprofundada depois.
## Passo 4 — Crie o pendrive inicializável

Para iniciar o computador pela ISO, você precisa **gravar** a imagem no pendrive usando uma ferramenta apropriada. Copiar o arquivo `.iso` para o pendrive como se fosse uma foto não produz a mesma coisa.

Ferramentas comuns incluem balenaEtcher, Rufus, Disks e Startup Disk Creator. Use a ferramenta indicada pela documentação da distribuição e pelo sistema que você já utiliza.

> **ATENÇÃO**
> Criar o pendrive inicializável apaga os dados do dispositivo USB selecionado. Confirme duas vezes se escolheu o pendrive correto antes de iniciar.

Uma sequência segura é:
1. conectar o pendrive;
2. abrir a ferramenta de criação de mídia;
3. selecionar a ISO verificada;
4. selecionar o pendrive correto;
5. confirmar que não há arquivos importantes nele;
6. iniciar a gravação;
7. aguardar a conclusão antes de remover o dispositivo.

> **DICA DO DEJOTA**
> Se o computador mostrar mais de um dispositivo removível, compare nome e capacidade antes de confirmar. Não confie apenas na posição em que o item aparece na lista.
## Passo 5 — Inicie pelo pendrive e use o modo live

Com o pendrive pronto, reinicie o computador e abra o menu de inicialização. A tecla varia conforme o fabricante; F12, Esc, F9 e F2 são exemplos comuns.

Escolha o dispositivo USB e procure uma opção parecida com **Try**, **Testar** ou **Experimentar sem instalar**.

No modo live, o sistema roda a partir do pendrive. Isso permite conhecer a interface e testar boa parte do hardware sem instalar Linux no disco interno.

> **ENTENDA**
> O modo live é como visitar uma casa antes de assinar o contrato. Você consegue circular, testar portas e perceber problemas importantes antes de se comprometer.

### O que testar
- Wi‑Fi e conexão de rede.
- Teclado e touchpad.
- Som e microfone.
- Brilho da tela.
- Webcam, se for importante para você.
- Suspensão e retomada, quando possível.
- Resolução e comportamento da tela.

A sessão live pode ser mais lenta do que uma instalação real porque o sistema está sendo executado a partir do USB. Algumas funções também podem se comportar de forma diferente.

> **SE DER ERRADO**
> Se o computador não iniciar pelo USB, não conclua imediatamente que "Linux não funciona". Primeiro confira se o pendrive foi criado corretamente, tente outra porta USB e consulte a documentação do fabricante sobre o menu de boot e UEFI.
## Teste você mesmo

Antes de instalar, faça este exercício de 10–15 minutos:

1. confirme que seu backup existe e abra pelo menos dois arquivos da cópia;
2. anote a URL oficial da distribuição escolhida;
3. identifique qual arquivo ISO você pretende baixar;
4. localize o checksum oficial correspondente;
5. prepare um pendrive sem arquivos importantes;
6. crie a mídia inicializável;
7. entre no modo live e teste Wi‑Fi, som, teclado e tela.

Não instale ainda. O objetivo deste exercício é terminar o capítulo com a certeza de que o ambiente está preparado.

## Checklist do capítulo

- [ ] Tenho uma cópia funcional dos meus arquivos importantes.
- [ ] Baixei ou localizei a ISO em fonte oficial.
- [ ] Sei o que é checksum e por que verificá-lo.
- [ ] Confirmei a integridade da ISO.
- [ ] Usei um pendrive que pode ser apagado.
- [ ] Sei que gravar a ISO é diferente de copiar o arquivo.
- [ ] Consegui iniciar uma sessão live.
- [ ] Testei o hardware básico antes da instalação.
- [ ] Ainda não alterei as partições do computador.

## Próximo passo

Agora temos algo muito melhor do que entusiasmo: temos preparação.

No próximo capítulo vamos entrar no instalador e entender cada decisão antes de confirmar. Partições, usuário, senha, criptografia e destino do sistema deixarão de ser telas misteriosas e passarão a ter significado.

> **DICA DO DEJOTA**
> Chegar ao instalador preparado já é uma vitória. Em instalação de sistema, saber quando **não** clicar é tão importante quanto saber qual botão apertar.
