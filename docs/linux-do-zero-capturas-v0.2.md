# Linux do Zero — Capturas visuais v0.2

Status: seleção de screenshots reais para os capítulos 3, 4 e 5.

## Ambiente de referência

- Ubuntu Desktop 26.04.1 LTS amd64.
- ISO oficial validada por SHA-256 antes do uso.
- Captura produzida em VM descartável QEMU/KVM isolada em Docker.
- Disco de instalação: QCOW2 de 50 GiB, sem acesso ao disco físico do host.
- Interface em Português do Brasil.
- Capturas-base: PNG, 1280×800, sem dados pessoais reais.
- Conta usada nas telas de instalação: dados fictícios.

## Seleção aprovada

Os arquivos finais ficam em `docs/assets/linux-do-zero/screenshots/`.

### Capítulo 3

- `c03-06-menu-boot.png` — menu de boot da mídia.
- `c03-07-experimentar-ou-instalar.png` — escolha entre testar e instalar.
- `c03-08-desktop-live.png` — desktop da sessão live.

As telas C3-01/C3-03 podem ser melhor representadas por captura editorial + bloco de checksum na diagramação. C3-09 será um checklist diagramado, não screenshot.
### Capítulo 4

- `c04-01-idioma.png` e `c04-01b-acessibilidade.png`.
- `c04-02-teclado.png`.
- `c04-03-rede.png`.
- `c04-04-instalacao-interativa.png`.
- `c04-05-aplicativos.png`.
- `c04-06-drivers-codecs.png`.
- `c04-08-apagar-disco.png`.
- `c04-11-criptografia.png`.
- `c04-13-conta.png`.
- `c04-14-resumo.png`.
- `c04-15-instalacao.png`.
- `c04-17-primeiro-boot.png`.

Não foram fabricadas telas de dual boot ou particionamento manual. Esses cenários exigem uma VM preparada especificamente para isso e permanecem fora do fluxo principal do livro.

### Capítulo 5

- `c05-01-desktop.png`.
- `c05-02-atualizador.png`.
- `c05-03-configuracoes.png`.
- `c05-04-arquivos.png`.
- `c05-05-app-center.png`.
- `c05-06-07-gerenciar-apps.png` — cobre aplicativo instalado e ação de desinstalar.
- `c05-09a-bluetooth.png` e `c05-09b-som.png` — para composição com a captura de Rede.
## Pendências conscientes

- C3-04 Rufus: requer sessão Windows real; não será simulado em Ubuntu.
- C3-05 Disks + USB: requer mídia USB física conectada; não será fabricado com disco virtual.
- C4-09 dual boot e C4-10 particionamento manual: só serão capturados se houver necessidade editorial, em VM preparada para esses cenários.
- C4-16 conclusão/reinício: o instalador encerrou a VM após concluir; o primeiro boot foi validado e capturado.
- C5-08 Additional Drivers: a instalação padrão da VM não disponibilizou `software-properties-gtk` e não há hardware proprietário virtual. A orientação textual permanece condicional ao hardware do leitor.

## Critério editorial

Nenhuma tela inexistente foi recriada como se fosse screenshot real. Quando o ambiente de laboratório não reproduziu um cenário, a ausência foi registrada em vez de forçar uma imagem enganosa.

Antes da diagramação final, cada screenshot selecionado receberá legenda, texto alternativo e, quando necessário, anotação visual em arquivo derivado separado. Os PNGs desta pasta permanecem como fontes sem anotação.
## Revisão técnica e acessibilidade

Em 17/09/2026, as 24 capturas selecionadas foram auditadas: todas permanecem em 1280×800, sem EXIF e sem metadados textuais de criação/modificação após a limpeza editorial. Os arquivos brutos continuam preservados fora do repositório.

Legendas, textos alternativos e prioridade de anotações estão definidos em `docs/linux-do-zero-legendas-acessibilidade-v0.2.md`.
