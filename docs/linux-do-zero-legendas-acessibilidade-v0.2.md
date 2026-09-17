# Linux do Zero — Legendas e acessibilidade visual v0.2

Status: especificação editorial das 24 capturas selecionadas para os capítulos 3, 4 e 5.

## Princípios

- A legenda explica por que a imagem importa; não repete apenas o que já está visível.
- O texto alternativo descreve a informação necessária para compreender a imagem sem vê-la.
- Anotações devem ser usadas apenas quando ajudam a localizar uma decisão ou risco.
- Nenhuma anotação pode depender somente de cor; usar contorno, seta, ícone e texto curto.
- As imagens-fonte permanecem sem anotações; versões derivadas usarão sufixo `-annotated`.
- Interfaces podem mudar entre versões. O texto deve ensinar a decisão, não decorar a posição de um botão.

## Capítulo 3 — Preparação, backup e teste

| Arquivo | Legenda proposta | Texto alternativo | Anotação |
|---|---|---|---|
| `c03-06-menu-boot.png` | Menu de inicialização da mídia do Ubuntu; o nome e as opções podem variar conforme a versão e o firmware. | Tela preta do GRUB com a opção “Try or Install Ubuntu” selecionada. | Não. |
| `c03-07-experimentar-ou-instalar.png` | Antes de instalar, o Ubuntu permite experimentar o sistema sem alterar o disco. | Instalador do Ubuntu mostrando as opções “Instalar Ubuntu” e “Experimentar Ubuntu”. | Sim: destacar “Experimentar Ubuntu”. |
| `c03-08-desktop-live.png` | A sessão live permite testar o desktop e o hardware antes da instalação; alterações normalmente não persistem após reiniciar. | Desktop padrão do Ubuntu executado a partir da sessão live, antes da instalação. | Não. |

C3-01 e C3-03 serão resolvidos na diagramação com captura editorial da fonte oficial e bloco de checksum; C3-09 será um checklist diagramado.

## Capítulo 4 — Instalação passo a passo

| Arquivo | Legenda proposta | Texto alternativo | Anotação |
|---|---|---|---|
| `c04-01-idioma.png` | O instalador começa pela escolha do idioma; use o idioma em que você se sente mais confortável para interpretar avisos. | Tela de boas-vindas do instalador Ubuntu com “Português do Brasil” selecionado. | Não. |
| `c04-01b-acessibilidade.png` | Recursos de acessibilidade podem ser configurados antes de continuar a instalação. | Tela de acessibilidade do Ubuntu com opções de visualização, audição, digitação, apontar e clicar e ampliação. | Não. |
| `c04-02-teclado.png` | Confirme o layout do teclado e teste caracteres antes de criar sua senha. | Tela de layout de teclado com “Português (Brasil)” selecionado e campo para teste. | Sim: destacar o campo de teste. |
| `c04-03-rede.png` | A internet ajuda na compatibilidade e em pacotes extras, mas o instalador também permite continuar sem conexão. | Tela de conexão à internet com conexão via cabo selecionada e opção de continuar sem internet. | Não. |
| `c04-04-instalacao-interativa.png` | Este livro acompanha a instalação interativa, que guia cada decisão passo a passo. | Tela de tipo de instalação com “Instalação interativa” selecionada. | Sim: contorno na opção interativa. |
| `c04-05-aplicativos.png` | A instalação padrão começa com o essencial; aplicativos adicionais podem ser instalados depois. | Tela de seleção de aplicativos com “Instalação padrão” selecionada. | Sim: destacar a instalação padrão. |
| `c04-06-drivers-codecs.png` | Drivers de terceiros e formatos de mídia adicionais são opções condicionais ao hardware e às necessidades do leitor. | Tela “Otimize seu computador” com caixas para drivers de terceiros e suporte a formatos de mídia. | Não. |
| `c04-08-apagar-disco.png` | Esta opção apaga o conteúdo do disco selecionado; só avance quando tiver certeza do destino e do backup. | Tela de tipo de instalação com “Apagar o disco e instalar o Ubuntu” selecionado e aviso de que dados e partições serão apagados. | Sim: box “PARE AQUI SE...” e destaque do aviso. |
| `c04-11-criptografia.png` | A criptografia deve ser escolhida junto com um plano de recuperação de acesso. | Tela de criptografia e sistema de arquivos com opções sem criptografia, com senha e com suporte de hardware. | Sim: nota curta sobre recuperação. |
| `c04-13-conta.png` | Use uma conta pessoal, nome de usuário simples e senha forte; no exemplo, todos os dados são fictícios. | Tela de criação da conta com nome “dejotacode”, computador “linux-do-zero”, usuário “iniciante” e senha mascarada. | Não. |
| `c04-14-resumo.png` | Antes de instalar, revise especialmente disco, método de instalação e criptografia. | Tela “Revise suas escolhas” mostrando disco vda, apagar disco e instalar Ubuntu, instalação padrão, sem criptografia e partições EFI e ext4. | Sim: destacar disco, método e criptografia. |
| `c04-15-instalacao.png` | Depois de confirmar, aguarde a conclusão da instalação sem desligar o computador. | Tela do Ubuntu 26.04.1 LTS durante a instalação, com barra de progresso na parte inferior. | Não. |
| `c04-17-primeiro-boot.png` | A tela de login confirma que o Ubuntu instalado iniciou pelo disco. | Tela de login do Ubuntu com a conta fictícia “dejotacode”. | Não. |

C4-09 dual boot e C4-10 particionamento manual permanecem fora do fluxo principal; não serão simulados como se fossem telas reais do cenário do leitor.

## Capítulo 5 — Primeiros passos depois da instalação

| Arquivo | Legenda proposta | Texto alternativo | Anotação |
|---|---|---|---|
| `c05-01-desktop.png` | O desktop recém-instalado deve ser conhecido antes de receber personalizações. | Desktop padrão do Ubuntu 26.04.1 LTS com dock lateral e pasta pessoal. | Sim: pequenos rótulos para dock, área do sistema e pasta pessoal. |
| `c05-02-atualizador.png` | Comece verificando as atualizações oferecidas pelo próprio sistema. | Janela “Atualizador de programas” informando que há atualizações disponíveis, com botões “Lembre-me mais tarde” e “Instalar agora”. | Sim: destacar “Instalar agora” sem indicar urgência artificial. |
| `c05-03-configuracoes.png` | Configurações concentra os ajustes de rede, Bluetooth, tela, som, energia e aparência. | Janela Configurações do Ubuntu aberta na seção Rede, com categorias visíveis na barra lateral. | Não. |
| `c05-04-arquivos.png` | A pasta pessoal organiza documentos, downloads, imagens, vídeos e outros arquivos do usuário. | Janela Arquivos aberta na pasta pessoal, exibindo pastas padrão como Documentos, Downloads, Imagens e Vídeos. | Não. |
| `c05-05-app-center.png` | Para começar, procure aplicativos pelo Centro de Aplicativos em vez de baixar executáveis aleatórios. | Centro de Aplicativos do Ubuntu na tela Explorar, com campo de busca e categorias. | Sim: destacar busca e identificação da origem do aplicativo. |
| `c05-06-07-gerenciar-apps.png` | A área Gerenciar mostra aplicativos instalados, atualizações e a ação de desinstalar. | Centro de Aplicativos na área Gerenciar, mostrando atualizações disponíveis e aplicativos instalados com botões “Desinstalar”. | Sim: destacar um botão “Desinstalar” apenas como exemplo de reversibilidade. |
| `c05-09a-bluetooth.png` | Se nenhum adaptador Bluetooth for detectado, o próprio sistema informa a ausência do hardware. | Configurações na seção Bluetooth exibindo a mensagem “Nenhum Bluetooth encontrado”. | Não. |
| `c05-09b-som.png` | Use as configurações de som para verificar saída, volume e dispositivos de entrada. | Configurações na seção Som mostrando dispositivo de saída, volume, balanço e entrada. | Não. |

C5-09 deve ser diagramado como composição de Rede + Bluetooth + Som, com três recortes equilibrados e uma única legenda.

## Prioridade de anotações derivadas

Alta: `c04-08-apagar-disco.png`, `c04-14-resumo.png` e `c03-07-experimentar-ou-instalar.png`.

Média: `c04-02-teclado.png`, `c04-04-instalacao-interativa.png`, `c04-05-aplicativos.png`, `c04-11-criptografia.png`, `c05-01-desktop.png`, `c05-02-atualizador.png`, `c05-05-app-center.png` e `c05-06-07-gerenciar-apps.png`.

As demais funcionam melhor sem marcação adicional.

## Critério de acessibilidade para o PDF

A imagem nunca será a única fonte de uma instrução crítica. Avisos sobre apagar disco, backup, criptografia, senha e parada segura também precisam existir como texto normal do livro. Textos alternativos devem ser incorporados ao PDF final quando o fluxo de diagramação permitir; se a ferramenta de exportação não preservar tags de acessibilidade, a informação equivalente continuará no texto e na legenda imediatamente próximos da imagem.
