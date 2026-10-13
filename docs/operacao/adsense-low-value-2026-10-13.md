# AdSense — correção de “conteúdo de baixo valor” — 2026-10-13

## Motivo

O AdSense verificou a propriedade de `dejotacode.com.br`, mas sinalizou **conteúdo de baixo valor**. A auditoria encontrou uma Store comercial indexável com várias fichas curtas e links de afiliados, enquanto a documentação oficial do AdSense exige conteúdo original/informativo suficiente e alerta contra páginas de afiliados sem valor adicional relevante.

## Correção aplicada

- toda a área `/store/` recebe `noindex, follow` temporariamente;
- URLs `/store/` são removidas do sitemap XML;
- produtos, guias, categorias, paginação, metodologia e setup continuam acessíveis aos usuários;
- nenhum produto ou link foi apagado;
- o Blog e demais áreas editoriais permanecem indexáveis;
- `npm run qa` possui um gate que falha se uma página da Store voltar a ser indexável ou reaparecer no sitemap.

## Critério para reindexar a Store

A Store só deve voltar ao índice de forma gradual após revisão editorial das fichas, priorizando conteúdo próprio e útil: contexto de uso, critérios, limitações, alternativas, evidência do nível de avaliação, compatibilidade e ligação clara com conteúdo educativo. Não usar contagem de palavras isolada como critério de qualidade.

## Reenvio ao AdSense

Após a publicação e validação em produção, confirmar que o problema foi corrigido no painel do AdSense e solicitar nova revisão. Não solicitar revisão antes de a versão corrigida estar servida em produção.
