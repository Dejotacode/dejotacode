# Revisão das categorias da Store — 2026-10-09

Revisão local, sem alteração de interface, push ou publicação.

As cinco rotas usam src/components/store/StoreCategoryPage.astro. Contagens atuais: Linux 2, Setup 4, Programação 2, Criadores 3 e Ferramentas digitais 8 produtos. Nos previews em 390 e 1440 px, tema escuro, não foram encontrados overflow horizontal ou imagens ausentes; a indicação da categoria atual está presente.

## Diferenças para a Store aprovada

- Compactar abertura e navegação entre categorias.
- Aproximar cards do catálogo aprovado: apresentação editorial opt-in, imagens 16:10 e CTA contornado.
- Produtos sem oferta ativa: usar Conhecer recomendação, como no catálogo principal.
- Preservar guias existentes, com apresentação mais compacta.
- Incluir encerramento compacto com transparência comercial e acesso à metodologia.
- Unificar filtro e ordenação: hoje o template filtra draft e categoria, mas não catalogStage=avaliacao. Consistência preventiva; não foi constatada publicação de itens em avaliação.

## Próxima etapa

Criar esboço seguindo a Store aprovada e, após escolha visual, implementar no template compartilhado. Preservar conteúdo, ofertas, links, analytics e alterações preexistentes. Setup permanece distinto de Setup do Dejota.

Após implementação: validar ambos os temas, 360/390/768/1440 px e teclado.

## Implementação local concluída

O usuário substituiu a escolha do esboço pela aplicação direta do padrão aprovado da Store. StoreCategoryPage.astro importa store-catalog.css e usa o opt-in editorial de StoreCard nas cinco categorias. Abertura compactada; navegação e encerramento reutilizam o padrão do catálogo; guias preservados com ícones oficiais e chamada Ler guia. Cards e imagens existentes preservados. Filtro exclui itens em avaliação e ordenação alfabética segue o catálogo principal. Nenhuma alteração nos dados, ofertas ou analytics. Comentário do CSS compartilhado atualizado para refletir a inclusão das categorias.

Validação: npm run check (77 arquivos, zero erros/avisos/hints); build de 115 páginas; QA sem links internos quebrados ou problemas de HTML; git diff --check passou. Quarenta combinações das cinco categorias em 360/390/768/1440 px e temas claro/escuro sem overflow ou imagens ausentes. Foco por teclado visível. Store principal, paginação e detalhe SanDisk responderam HTTP 200; opt-in permaneceu desligado no detalhe. Capturas Linux desktop escuro e celular claro inspecionadas.

Sem push ou publicação. Revisão visual pelo usuário e consolidação futura pendentes.

## Revisão final do resultado

Comparação de estilos computados revelou que o CSS base do componente prevalecia em alguns estilos opt-in nas categorias: border-radius de 16 px em vez de 9 px. Corrigida a especificidade dos seletores de StoreCard editorial em store-catalog.css, mantendo escopo opt-in. Nova comparação confirmou 9 px em todas as categorias e no catálogo principal. Check, build, QA e diff-check repetidos com sucesso. As 40 combinações responsivas foram repetidas sem falhas. Capturas Ferramentas digitais desktop escuro e Criadores celular claro inspecionadas.

Imagens existentes preservadas. A capa do Elementor tem paleta comercial roxa diferente da identidade predominante; considerar na auditoria global de imagens já pendente, sem substituição nesta etapa. Quatro categorias ainda não têm guias publicados; o estado vazio continua explícito. Não foi dada aprovação visual em nome do usuário. Sem publicação.

Categorias aprovadas visualmente pelo usuário. Próxima etapa: fichas de produtos. Publicação não autorizada.
