# DejotaCode v1.14.0 — Uso de Mídia Editorial

## Resumo

A v1.14.0 adiciona ao Admin uma camada de observabilidade sobre o uso das imagens editoriais, preparando o terreno para futuras rotinas seguras de limpeza do R2 sem introduzir exclusão nesta versão.

## Detecção de uso

- O Admin varre o Markdown canônico dos conteúdos carregados do Git.
- URLs públicas de mídia do domínio oficial da API são convertidas novamente em `objectKey`.
- A biblioteca identifica quais objetos estão referenciados por conteúdo canônico.
- O filtro `Em uso` exibe somente essas imagens.
- O filtro `Não referenciadas` exibe mídias sem referência detectada no Markdown canônico.

## Contexto de edição

- Ao editar um post, a biblioteca também identifica imagens presentes no Markdown local atual.
- Essas imagens recebem o selo `Usada neste post`.
- Esse estado local não altera a classificação canônica até que o conteúdo seja publicado pelo fluxo Git/PR.

## Segurança e decisões de escopo

- Nenhuma exclusão de mídia foi implementada.
- `Não referenciada` não significa automaticamente `segura para excluir`; ainda podem existir usos fora do corpo Markdown que precisem ser auditados antes de qualquer limpeza.
- Git/Markdown continua sendo a fonte canônica do conteúdo editorial.
- D1 e R2 continuam apenas como infraestrutura de metadados e mídia.

## Validação em produção

- Biblioteca total: 23 imagens.
- Referências canônicas detectadas: 1.
- O filtro `Em uso` retornou apenas a imagem do artigo `comandos-linux-para-iniciantes`.
- O card exibiu corretamente `Em uso no conteúdo canônico`.

## Qualidade

- `astro check`: 0 erros, 0 warnings e 0 hints.
- Build de produção: 46 páginas estáticas.
- QA de links: 1.896 referências internas, 0 quebradas.
- QA estrutural: 46 HTML, 0 páginas com problemas.
- Smoke de produção: 10/10 verificações aprovadas.

## Compatibilidade

- Frontend base anterior: v1.13.0.
- API compatível: DejotaCode API v1.6.1.
- Nenhuma migration ou alteração de contrato da API é necessária.

## Baseline de crescimento

Nenhuma mudança desta versão altera CTA, funil guia/newsletter, campanhas ou nomes de eventos de analytics. Os checkpoints D+7/D+14 permanecem preservados.
