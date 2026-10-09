# Repaginação local de Recursos

Preview: http://127.0.0.1:4325/recursos/
Sem publicação.

## Escopo
Abertura curta; lista alfabética das 22 ferramentas sem duplicação; busca por nome e finalidade com normalização de acentos; sete filtros por necessidade combinados com a busca; contador, estado vazio e limpar filtros; fallback sem JavaScript.
Seis links de categoria, preservando rotas. Imagens, links de afiliado, SEO e registros originais preservados.
Cards compactos no hub; aviso para todas as recomendações afiliadas; contexto, custo, público, registro editorial e limitações no expansor.
Material próprio Linux do Zero separado, após o diretório.

## Status
Uso declarado somente quando já documentado nos registros. Pesquisado identifica informações conferidas sem afirmar teste. Recursos sem evidência de uso ou pesquisa seguem em avaliação. Registro editorial original permanece nos detalhes.

## Arquivos
- src/pages/recursos/index.astro
- src/components/resources/ResourceCard.astro
- src/styles/resources.css
- src/data/resourceDiscovery.ts
- docs/recursos-repaginacao-2026-10-08.md

## Verificação
Check Astro: sem erros, avisos ou dicas. Preview: 115 páginas. QA de HTML/links aprovado. Revisão visual e funcional nos temas claro/escuro e larguras 320, 390, 768 e 1440.

## Revisão final antes de publicar

Paginação 9/9/4, persistência na URL/histórico e fallback sem JavaScript. Seções finais: paginação, categorias, transparência, painel Linux do Zero. Tutoriais ElevenLabs/Metricool mantêm Aprenda a usar; demais conteúdos usam Ver conteúdo. Status mantidos conservadores. Build de produção e check aprovados: 115 páginas, 403 imagens, QA sem problemas. Publicação ainda pendente. Arquivo de dados recommendedResources.ts também inclui articleCta explícito.

## Publicação

Publicação autorizada. PR #264; commit f09705f8f97bca5527ece0b4c72eadcbe8c7160b; deploy 37815889481 aprovado. Navegação validada em https://dejotacode.com.br/recursos/.
