# Setup do Dejota — revisão local

Rota: /store/setup-do-dejota/. Interface não alterada.
Página atual é um placeholder de curadoria: hero com Fifine AM8/Pebble 2, chips de uso confirmado e painel de preparação. Não há catálogo do setup efetivo.

## Evidências
Oito combinações 360/390/768/1440 e claro/escuro: HTTP 200, imagens carregadas e sem overflow. Hero de 686px no celular, 576px em 768 e 438px em 1440. Captura desktop mostra fundo cinza fora do padrão recente e recorte de texto na imagem Pebble.
Fifine AM8 e Pebble 2 estão como pesquisado, apesar da abertura Uso real/Uso confirmado: apresentação pode insinuar uso não confirmado. MX Anywhere 3S também pesquisado. Apenas Metricool e ElevenLabs estão como uso no catálogo consultado; não presumir inclusão no setup sem contexto editorial.

## Proposta
Confirmar equipamentos realmente usados antes de apresentá-los como setup pessoal. Abertura compacta com foto real se disponível; blocos equipamentos/ferramentas, cada item com modelo, finalidade real, imagem adequada, status e link de ficha. Separar sugestões pesquisadas dos itens de uso efetivo; transparência de afiliados. Reaproveitar dados/componentes sem alterar classificação automaticamente. Composição e tokens coerentes com páginas aprovadas. Imagens gerais já possuem auditoria futura; recorte identificado entra como evidência.

Próxima etapa: esboço visual e confirmação de itens. Sem publicação.

## Pesquisa e confirmação de uso pelo usuário
Referências: https://wesbos.com/uses (documento vivo com contexto, hardware, software, backup e transparência afiliada); https://carlosazaustre.es/uses (seções por função e explicação por item); https://www.stefanjudis.com/uses/; https://diolinux.com.br/video/veja-como-e-o-meu-computador-gamer.html (setup de trabalho/jogos, separar uso de recomendações).

Usuário confirmou uso: TV Samsung 43 polegadas como monitor; teclado Logitech sem fio; mouse Logitech sem fio; hub USB; SSD SATA 128GB para sistema; HD Samsung 160GB pessoal; HD de marca desconhecida 500GB backup/arquivos. Modelos exatos não confirmados. Não equiparar automaticamente a Pebble/MX Anywhere/MX Keys/Fifine.

Leitura local em dispositivo dejotacode: Intel Core i5-3470 3.20GHz, 4 núcleos/4 threads; cerca de 16GB RAM (MemTotal 16259968kB); placa H61 V1.3 fabricante não identificado; gráficos integrados Intel da geração Ivy Bridge; CachyOS. Receptor Logitech Nano e teclado/mouse Wireless presentes, modelos comerciais não resolvidos. Discrepância de armazenamento: somente WDC WD6400BPVT-75HXZT3 SATA 640135028736 bytes (~640GB) detectado; discos informados pelo usuário não encontrados nessa leitura. Não descartar declaração nem publicar inventário reconciliado sem confirmar. Nenhum serial/UUID incluído no registro público.

Proposta de composição: abertura compacta; computador principal e especificações; tela/periféricos; armazenamento dividido por finalidade; ferramentas de trabalho; data de atualização e transparência. Usar fotografia real se houver; não representar imagem gerada como foto do setup. Próxima etapa: esboço com itens confirmados e modelos pendentes.

## Implementação local do esboço
Página refeita com abertura compacta, ilustração decorativa em HTML/CSS (não é foto do setup), especificações consultadas, quatro periféricos informados, três usos de armazenamento, VS Code/Git, transparência e links Store/Como avaliamos. Removidas imagens Fifine/Pebble e promessas indevidas de uso desses modelos. Modelos comerciais continuam pendentes. Diferença de armazenamento explicitada sem inventar vínculo entre discos. Não alteradas fichas ou classificações de produtos, nem adicionados links afiliados por aproximação de modelo.

Estilos próprios em setup.css usando tokens existentes. Acrescentados ícones keyboard/mouse/usb-hub ao componente e ao tipo oficiais, sem alterar o desenho dos existentes ou categorias. Cabeçalho e rodapé preservados.

Check/build e QA passaram na implementação. Revisão visual local em andamento; publicação não autorizada.

Revisão final: oito combinações de viewport/tema sem overflow, foco visível, destinos Store/Como avaliamos HTTP 200. Capturas desktop/celular inspecionadas.

## Aprovação visual
Usuário aprovou o visual local. Modelos e divergência de armazenamento seguem pendentes; publicação não autorizada.

## Reconferência local — 09/10/2026, oitava etapa
Leitura somente: i5-3470, quatro núcleos/threads; RAM aproximadamente 16 GB; placa H61 V1.3, fabricante não identificado; vídeo Intel integrado; CachyOS. EDID apresenta SAMSUNG, sem modelo comercial legível. Entradas Logitech Wireless Keyboard PID:4023 e Wireless Mouse PID:4022 não identificam modelos comerciais com segurança. Nenhum serial, UUID ou identificador pessoal foi registrado.
Armazenamento conectado: WDC WD6400BPVT-75HXZT3 SATA, aproximadamente 640 GB comerciais (596,2 GiB); zram é memória comprimida, não outro disco físico. SSD 128 GB, HD Samsung 160 GB e HD 500 GB não aparecem nesta leitura. Usuário respondeu que precisa conferir; manter pendência, sem substituir sua declaração ou relacionar os discos por inferência.
Página e catálogo preservados. Modelos de TV, teclado, mouse e hub continuam pendentes. Esta etapa não altera interface e não exige novo build; validações da etapa anterior permanecem como evidências anteriores. Preview http://localhost:4321/store/setup-do-dejota/. Sem publicação.


## Armazenamento confirmado — 09/10/2026
Dejota confirmou que o disco anteriormente informado como 500 GB é o Western Digital WD6400BPVT de 640 GB detectado localmente. Foto confirma SSD Rapidin SATA de 128 GB e Samsung HM160HI de 160 GB em case USB. Finalidades mantidas conforme declaração do usuário; a foto não certifica conexão atual nem disco de inicialização. Página /store/setup-do-dejota/ atualizada, sem números de série. Pendências de modelos da TV, teclado, mouse e hub permanecem. Sem publicação.


## Tela e periféricos confirmados — 09/10/2026
Dejota informou teclado Logitech K270 e mouse Logitech M150. Foto da tela de informações da TV confirma Samsung UN43T5300AGXZD, usada como monitor de 43 polegadas conforme declaração anterior. Apenas o modelo foi transcrito; números de série e identificadores do dispositivo excluídos. Modelos do teclado/mouse registrados como declaração do usuário, sem inferir especificações adicionais. No inventário de equipamentos, somente o modelo do hub USB continua pendente. Página atualizada localmente; sem publicação.
