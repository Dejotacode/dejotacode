# Rodapé editorial — 9 de outubro de 2026

Aplicação local do esboço aprovado em src/components/Footer.astro.
Preview: http://localhost:4321/. Sem publicação.

- Marca oficial e todos os 19 destinos preservados.
- Desktop: marca e três grupos de navegação.
- Até 800px: marca ocupa toda a largura, Explorar e Projeto em duas colunas e Transparência abaixo em largura completa.
- Setup do Dejota movido para Projeto.
- Ícones sociais sólidos, alvos de 44px, foco visível e respeito à redução de movimento.
- Espaçamento compacto e remoção de estilos sem uso.

## Validação

npm run check: 78 arquivos, zero erros, avisos ou hints.
npm run build: 115 páginas.
npm run qa: 6379 referências internas, nenhum destino quebrado; 471 imagens e 259 controles, nenhuma página com problema.
git diff --check passou.
Lista de hrefs comparada automaticamente com a versão anterior: idêntica.
Preview conferido em 320, 390, 768 e 1440px, nos temas claro e escuro: sem transbordamento horizontal, 19 links e nenhum link sem nome.
Inspeção visual das capturas mobile e desktop realizada.
Em 390px, altura reduzida de 896px para 714px (aproximadamente 20%).
