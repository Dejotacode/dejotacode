# DejotaCode v1.12.0 — Biblioteca Editorial de Mídia

## Resumo

A v1.12.0 adiciona ao Admin Editor uma biblioteca visual para reutilizar imagens já armazenadas no Cloudflare R2, evitando uploads duplicados durante a edição de conteúdo.

O conteúdo público continua tendo Git/Markdown como fonte canônica. A biblioteca apenas facilita a seleção de mídias já existentes e não transforma D1 ou R2 em fonte editorial.

## Biblioteca de imagens

- Carregamento autenticado via `GET /api/media/cms`.
- Exibição de até 100 mídias retornadas pela API, filtradas no frontend para imagens.
- Miniatura, texto alternativo, tamanho e data de envio por card.
- Ordenação herdada da API: mais recentes primeiro.
- Botão `Inserir` adiciona o Markdown da imagem na posição atual do cursor.
- Botão `Copiar URL` copia a URL pública da imagem.
- Botão `Atualizar biblioteca` permite recarregar a listagem sob demanda.
- Após um novo upload, a biblioteca é atualizada automaticamente.

## Segurança e decisões de escopo

- Nenhuma ação de exclusão foi adicionada à biblioteca.
- A API atual não rastreia referências de imagens dentro do corpo Markdown; excluir mídia por essa interface poderia quebrar conteúdo publicado.
- Reutilizar uma imagem não cria novo objeto no R2.
- Metadados retornados pela API são inseridos no DOM com `textContent`, sem injeção de HTML.
- Sessão Admin continua obrigatória para listar a biblioteca.

## Validação em produção

- 23 imagens foram carregadas corretamente na biblioteca.
- Miniaturas, alt, tamanho e data foram exibidos corretamente.
- A imagem editorial de Git e GitHub foi reutilizada sem novo upload.
- O Markdown foi inserido automaticamente no artigo selecionado.
- O preview renderizou a imagem imediatamente.
- Nenhum Pull Request foi criado durante o teste funcional.

## Qualidade

- `astro check`: 0 erros, 0 warnings e 0 hints.
- Build de produção: 46 páginas estáticas.
- QA de links: 1.896 referências internas, 0 quebradas.
- QA estrutural: 46 HTML, 0 páginas com problemas.
- Smoke de produção: 10/10 verificações aprovadas.

## Compatibilidade

A v1.12.0 usa o contrato já existente da API. Nenhuma alteração de API ou migration é necessária.

- Frontend base anterior: v1.11.0.
- API compatível: DejotaCode API v1.6.1.
- Endpoint utilizado: `GET /api/media/cms`.

## Baseline de crescimento

Nenhuma mudança desta versão altera CTA, funil guia/newsletter, campanhas ou nomes de eventos de analytics. Os checkpoints D+7/D+14 permanecem preservados.
