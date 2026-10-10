# Linux do Zero — página de venda
Implementação local aprovada a partir de esboço e pesquisa de No Starch Press, Refactoring UI, Refactoring Guru e NN/g.

## Mudanças
Abertura compacta com título curto, benefício, preço e compra. CTA secundário leva às amostras.
Capa real, preço R$ 19,90, checkout Kiwify, acesso e reembolso preservados.
Duas amostras reais ampliáveis por links para nova aba, acessíveis sem JavaScript.
Oito capítulos e público preservados com espaçamento menor e ícones oficiais.
Comparação trilha gratuita/e-book. Autoria com foto real já existente, eliminando repetição da página do autor.
Todas as seis perguntas do FAQ mantidas. Cabeçalho, rodapé, schema e rotas preservados.

## Validação
check: 77 arquivos, zero erros/avisos/hints. Build 115 páginas. QA zero links quebrados e problemas HTML.
Chromium: 8 combinações claro/escuro x 360/390/768/1440, sem overflow e imagens carregadas.
CTA de amostras, FAQ e foco de teclado testados. Checkout URL preservada; nenhuma compra realizada.
Hero desktop 1077 → 599 px; celular 360 px 1510 → 1144 px.
Captura desktop clara inspecionada. Sem validação completa em Firefox ou entrega de analytics.
Sem push ou publicação.

Preview http://localhost:4322/produtos/linux-do-zero/

## Galeria de amostras
PDF final v0.7 de 88 páginas conferido. Amostras: página 9 (conceitos), 42 (revisão da instalação) e 59 (comandos). Novos WebP renderizados diretamente do PDF, sem editar o conteúdo. Galeria com legenda objetiva e dialog nativo; anterior/próxima, setas, Escape, fechar e retorno do foco. Links diretos preservam acesso sem JavaScript. Check/build/QA passaram.
