# Linux do Zero — Capítulo 4

## Instalação passo a passo

### Onde estamos

Você já fez backup, baixou a ISO de uma fonte oficial, verificou o arquivo, criou o pendrive e testou o sistema em modo live.

Agora chegamos à etapa em que mudanças permanentes podem acontecer no disco.

A instalação não precisa ser assustadora, mas exige atenção. O objetivo deste capítulo não é ensinar todas as combinações possíveis de dual boot, RAID, múltiplos discos ou particionamento avançado. A ideia é mostrar um caminho seguro para a primeira instalação.

> **ATENÇÃO**
> Se você ainda não confirmou o backup ou não sabe qual disco pode ser alterado, não avance. Feche o instalador e volte ao capítulo anterior.

## O que você vai conseguir fazer

Ao final deste capítulo, você deverá saber reconhecer as principais telas do instalador, entender as decisões que realmente importam e concluir uma instalação simples sem clicar no automático às cegas.

Você também vai saber identificar situações em que o melhor movimento é parar e pesquisar antes de continuar.
## Passo 1 — Confirme idioma, teclado e conexão

Comece pelas opções mais simples: idioma, layout do teclado e rede.

Não subestime o teclado. Uma senha forte fica bem menos útil se você descobre depois que símbolos como `@`, `/` ou `?` estão em posições diferentes do esperado.

Se o instalador oferecer teste de teclado, use. Digite letras, números e alguns símbolos.

A conexão com a internet pode ajudar o instalador a baixar atualizações e componentes, mas nem toda instalação depende dela para começar. Se a rede estiver instável, não transforme isso em motivo para improvisar.

> **DICA DO DEJOTA**
> Se Wi-Fi, teclado ou vídeo já deram sinais estranhos no modo live, resolva antes da instalação. O instalador não é uma varinha mágica que conserta incompatibilidade sozinho.

## Passo 2 — Entenda a escolha mais importante: o disco

Em algum momento, o instalador perguntará onde o Linux será instalado.

Essa é a tela que merece mais atenção de todo o processo.

Você pode encontrar opções como apagar um disco inteiro, instalar ao lado de outro sistema ou configurar o espaço manualmente. Os nomes mudam entre distribuições e versões, mas a lógica é parecida.

> **ENTENDA**
> O instalador não sabe quais arquivos têm valor emocional ou profissional para você. Ele sabe apenas quais discos e partições existem. A responsabilidade de reconhecer o destino correto continua sendo sua.
### Cenário A — Usar o disco inteiro para Linux

Esse é o cenário mais simples tecnicamente. O disco escolhido será preparado para receber o Linux e o conteúdo anterior poderá ser apagado.

Ele faz sentido quando:

- o computador será dedicado ao Linux;
- o backup já foi confirmado;
- você tem certeza absoluta de qual disco será usado.

> **ATENÇÃO**
> “Apagar disco e instalar” significa exatamente isso. Não trate essa opção como um botão de teste.

### Cenário B — Manter outro sistema

Alguns instaladores conseguem detectar um sistema existente e oferecer instalação ao lado dele.

Isso é conhecido como **dual boot**: dois sistemas instalados no mesmo computador, escolhidos no momento da inicialização.

Para um iniciante, dual boot adiciona variáveis: espaço em disco, bootloader, criptografia existente, BitLocker, partições de recuperação e atualizações de firmware.

Se o seu objetivo principal é aprender Linux, uma máquina dedicada, um segundo disco ou uma máquina virtual pode ser mais simples do que começar pelo cenário mais complexo.

> **VOCÊ NÃO PRECISA DECORAR**
> EFI, partição de recuperação e bootloader vão aparecer ao longo da jornada. Neste momento, você só precisa reconhecer que mexer em um disco com outro sistema exige atenção extra.
### Cenário C — Particionamento manual

O particionamento manual dá mais controle, mas também exige mais conhecimento.

Ele pode ser útil quando você já sabe exatamente o que quer fazer com `/`, `/home`, swap, EFI e outros volumes. Para a primeira instalação, não existe prêmio por escolher a opção mais difícil.

> **DICA DO DEJOTA**
> Se você chegou ao particionamento manual sem saber explicar o papel de cada partição que pretende criar, volte. Controle sem entendimento é só risco com aparência de experiência.

## Passo 3 — Pense na criptografia antes de clicar em instalar

Algumas distribuições oferecem criptografia do disco durante a instalação.

Criptografia protege os dados armazenados caso o computador ou o disco seja roubado. Dependendo da distribuição e do hardware, ela pode usar uma senha, uma frase secreta, TPM ou outra combinação.

A criptografia melhora a proteção, mas cria uma responsabilidade nova: guardar senhas e chaves de recuperação com cuidado.

No Ubuntu 26.04, por exemplo, existe suporte a criptografia completa baseada em TPM em hardware compatível. A própria documentação alerta que mudanças de firmware, configurações de boot ou TPM podem exigir uma chave de recuperação.

> **ATENÇÃO**
> Nunca deixe a única cópia da chave de recuperação dentro do mesmo computador criptografado. Se o sistema pedir essa chave e ela estiver inacessível no próprio disco, você criou um cofre com a chave trancada dentro.
## Passo 4 — Crie seu usuário com calma

O instalador normalmente pedirá um nome, nome do computador, usuário e senha.

A senha da sua conta não deve ser tratada como senha descartável. Em muitas tarefas administrativas, ela será usada para confirmar que você está autorizado a fazer mudanças no sistema.

Evite senhas curtas, previsíveis ou reutilizadas de outros serviços.

Se o instalador oferecer login automático, pense no contexto. Em um computador doméstico fixo pode parecer conveniente; em um notebook, exigir senha no login normalmente protege melhor seus dados.

> **ENTENDA**
> Sua senha de usuário e uma eventual senha de criptografia podem ser coisas diferentes. Uma libera sua sessão; a outra pode proteger o disco antes mesmo de o sistema iniciar.

## Passo 5 — Leia o resumo antes da mudança definitiva

Bons instaladores mostram um resumo antes de alterar o disco.

Esse é o momento de desacelerar.

Confira pelo menos:

- o disco selecionado;
- se outro sistema será mantido ou apagado;
- idioma e teclado;
- fuso horário;
- usuário criado;
- criptografia, se escolhida.

Se algo não fizer sentido, volte. Nenhum instalador sério exige que você continue só porque chegou até ali.
## Passo 6 — Deixe o instalador trabalhar

Depois da confirmação final, o instalador começa a copiar arquivos e configurar o sistema.

Nessa etapa, evite desligar o computador, remover o pendrive cedo demais ou fechar a tampa de um notebook se isso puder suspender a máquina.

Quando a instalação terminar, o sistema normalmente pedirá para reiniciar e, em algum momento, remover a mídia de instalação.

Siga a mensagem apresentada pelo próprio instalador.

> **SE DER ERRADO**
> Se o computador reiniciar e voltar ao instalador, verifique se o pendrive continua definido como primeira opção de boot. Removê-lo e reiniciar novamente costuma resolver esse cenário simples.

## Passo 7 — O primeiro boot não é hora de correr

Ao entrar no sistema instalado pela primeira vez, confirme três coisas antes de personalizar tudo:

1. o sistema inicia normalmente;
2. sua senha funciona;
3. rede, teclado e vídeo continuam funcionando fora do modo live.

Se você ativou criptografia, confirme também que entende como desbloquear o sistema e onde está guardada a chave de recuperação, quando houver.

Não comece instalando vinte aplicativos imediatamente. Primeiro confirme que a base está saudável.

## Erros comuns nesta etapa

### Escolher o disco pelo tamanho sem conferir o nome

Dois discos podem ter capacidades parecidas. Compare modelo, capacidade e contexto antes de confirmar.

### Tratar “instalar ao lado” como algo sem risco

Dual boot é viável, mas ainda altera a estrutura de inicialização e o uso do disco. Backup continua obrigatório.

### Ativar criptografia e ignorar a recuperação

A proteção só é útil se você souber recuperar o acesso de forma legítima.

### Fazer particionamento manual para “aprender mais rápido”

A primeira instalação não precisa virar laboratório de armazenamento. Aprender uma coisa por vez é progresso, não limitação.
## Teste você mesmo

Antes de considerar o capítulo concluído, responda sem abrir o livro:

1. Em qual tela da instalação você deve redobrar a atenção?
2. Qual é a diferença entre usar o disco inteiro e instalar ao lado de outro sistema?
3. Quando o particionamento manual faz sentido?
4. O que a criptografia protege?
5. Onde uma chave de recuperação deve ser guardada?
6. Quais três coisas você deve verificar no primeiro boot?

Se alguma resposta ainda estiver nebulosa, releia apenas a seção correspondente. Você não precisa repetir tudo.

## Checklist do capítulo

- [ ] Confirmei novamente que meu backup existe e pode ser acessado.
- [ ] Sei qual disco pode ser alterado.
- [ ] Entendo se quero Linux sozinho ou junto de outro sistema.
- [ ] Não escolhi particionamento manual sem entender o motivo.
- [ ] Decidi conscientemente sobre criptografia.
- [ ] Se houver chave de recuperação, sei onde guardá-la fora do computador.
- [ ] Criei uma senha de usuário adequada.
- [ ] Revisei o resumo antes da alteração definitiva.
- [ ] Depois da instalação, confirmei boot, senha, rede, teclado e vídeo.

## Próximo passo

Seu Linux agora está instalado. No próximo capítulo, vamos fazer o que muita gente deveria fazer antes de começar a personalizar o sistema: atualizar, entender onde ficam as configurações, instalar programas com segurança e reconhecer os primeiros elementos da interface.

> **DICA DO DEJOTA**
> A melhor primeira instalação não é a mais sofisticada. É aquela em que você consegue explicar as decisões que tomou e ainda sabe como recuperar seus dados se algo sair diferente do esperado.
