# DejotaCode v1.15.0 — Relatório de Segurança de Mídia

## Resumo

A v1.15.0 adiciona ao Admin Editor um relatório read-only para avaliar segurança e uso das mídias editoriais antes de qualquer futura limpeza do Cloudflare R2.

O relatório não exclui arquivos e não altera conteúdo, D1 ou R2. Ele apenas cruza sinais já existentes para reduzir o risco de remover uma mídia ainda utilizada.

## Sinais cruzados

- Referências de imagens no Markdown canônico carregado do Git.
- Uso como `coverKey` nos conteúdos do CMS/D1.
- Metadados presentes na tabela `media`.
- Disponibilidade pública do objeto no R2 por requisição `HEAD`.

## Classificação

- **Em uso**: referenciada no Markdown canônico ou usada como capa no CMS.
- **Possivelmente órfã**: mídia editorial em `posts/...`, acessível no R2, mas sem referência Markdown nem capa.
- **Requer revisão**: mídia geral, falha de disponibilidade, inconsistência ou cenário em que não há evidência suficiente para classificá-la como órfã.

A classificação `Possivelmente órfã` nunca é autorização automática para exclusão.

## Validação real em produção

O relatório foi executado no Admin autenticado após o deploy da feature:

- 23 imagens analisadas.
- 22 em uso.
- 0 possivelmente órfãs.
- 1 requer revisão.
- 23/23 objetos verificados como acessíveis no R2.

A imagem do artigo de comandos Linux permaneceu identificada como referência canônica, enquanto as capas protegidas pelo CMS/D1 também foram classificadas como em uso.

## Qualidade

- `astro check`: 0 erros, 0 warnings e 0 hints.
- Build de produção: 46 páginas estáticas.
- QA de links: 1.896 referências internas, 0 quebradas.
- QA estrutural: 46 HTML, 0 páginas com problemas.
- Smoke de produção: 10/10 verificações aprovadas.

## Compatibilidade

- Frontend base anterior: v1.14.0.
- API compatível: DejotaCode API v1.6.1.
- Nenhuma migration ou alteração de contrato de API foi necessária.

## Baseline de crescimento

Nenhuma mudança desta versão altera CTA, funil guia/newsletter, campanhas ou nomes de eventos de analytics. Os checkpoints D+7/D+14 permanecem preservados.
