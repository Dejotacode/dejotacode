# DejotaCode v1.13.0 — UX da Biblioteca Editorial

## Resumo

A v1.13.0 melhora a usabilidade da biblioteca editorial de imagens adicionada na v1.12.0, reduzindo o comprimento visual do Editor e facilitando encontrar mídias já existentes no Cloudflare R2.

O conteúdo público continua tendo Git/Markdown como fonte canônica. Esta versão não altera o contrato da API nem o baseline de crescimento.

## Melhorias da biblioteca

- Painel da biblioteca recolhível/expansível com `<details>` nativo.
- Busca por texto alternativo e caminho do objeto no R2.
- Busca normalizada para ignorar diferenças de acentuação e caixa.
- Filtro `Todas` para a biblioteca completa.
- Filtro `Enviadas para este post` para objetos em `posts/<slug>/...`.
- Filtro `Biblioteca geral` para imagens fora do namespace `posts/`.
- Contador de resultados filtrados em relação ao total disponível.
- Filtro por post acompanha mudanças do slug durante a edição.

## Segurança e decisões de escopo

- Nenhuma exclusão de mídia foi adicionada.
- Nenhuma mutation adicional no R2 ou D1.
- Nenhuma migration ou alteração de API.
- Reutilização de imagem continua sem criar cópia adicional no R2.
- Sessão Admin continua obrigatória para listar a biblioteca.

## Validação em produção

- Painel recolhido e expandido corretamente.
- Busca por `git` reduziu a listagem de 23 para 5 imagens.
- Filtro `Biblioteca geral` foi aplicado corretamente.
- Grid permaneceu íntegro no tema escuro e no layout responsivo já existente.

## Qualidade

- `astro check`: 0 erros, 0 warnings e 0 hints.
- Build de produção: 46 páginas estáticas.
- QA de links: 1.896 referências internas, 0 quebradas.
- QA estrutural: 46 HTML, 0 páginas com problemas.
- Smoke de produção: 10/10 verificações aprovadas.

## Compatibilidade

- Frontend base anterior: v1.12.0.
- API compatível: DejotaCode API v1.6.1.
- Endpoint utilizado: `GET /api/media/cms`.
- Nenhuma mudança de contrato é necessária na API.

## Baseline de crescimento

Nenhuma mudança desta versão altera CTA, funil guia/newsletter, campanhas ou nomes de eventos de analytics. Os checkpoints D+7/D+14 permanecem preservados.
