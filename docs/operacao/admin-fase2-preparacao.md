# Admin — preparação da Fase 2

Status: preparação técnica antes de separar Mídia do Editor.
Revisão: 10/10/2026.

## Objetivo

Separar responsabilidades do Admin sem reescrever a lógica crítica existente.

A Fase 2 terá como destino principal uma rota própria de Mídia, preservando o Editor como ferramenta editorial Git/Markdown.

## Fronteiras aprovadas

### Dashboard

Responsável por:

- visão geral administrativa;
- atalhos operacionais;
- estado editorial resumido;
- acesso às áreas do Admin.

### Conteúdo / Editor

Responsável por:

- criação e edição de Markdown;
- metadados editoriais;
- preview;
- geração e cópia do Markdown;
- Pull Request;
- acompanhamento de CI;
- merge/publicação assistida.

O Editor pode continuar oferecendo uma ação simples para inserir uma imagem no Markdown, mas não deve concentrar a gestão completa da biblioteca.

### Mídia

Responsável por:

- upload;
- biblioteca de imagens;
- busca e filtros;
- contexto e uso/referências;
- relatório de segurança;
- revisão humana;
- gate de limpeza;
- dry-run de exclusão;
- snapshot final;
- exclusão com dupla confirmação;
- histórico e auditoria.

### Métricas

Responsável por:

- eventos agregados;
- conversão;
- DejotaStore;
- produtos;
- páginas;
- campanhas.

## Inventário da Mídia atual

Hoje o subsistema de Mídia está embutido em `src/pages/admin/editor.astro`.

Ele usa, entre outros, os seguintes recursos:

- `POST /api/media/cms` para upload;
- listagem da biblioteca de mídia;
- `GET /api/cms/posts` para cruzar capas do CMS;
- verificação pública de objetos do R2;
- classificação de uso e segurança;
- plano de limpeza sem exclusão;
- `GET /api/media/cms/:id/history` para auditoria;
- `POST /api/media/cms/:id/delete-dry-run`;
- `POST /api/media/cms/:id/delete-snapshot`;
- `DELETE /api/media/cms/:id` com revalidação final.

A lógica atual também cruza referências presentes no Markdown canônico dos posts.

## Sessão administrativa

Antes da extração de Mídia, a sessão começa a ser centralizada em:

`src/scripts/admin-session.ts`

Responsabilidades do módulo:

- consultar sessão administrativa;
- exigir sessão em páginas protegidas;
- fornecer o token CSRF da sessão;
- executar logout administrativo.

Nesta preparação, Dashboard e Métricas passam a usar o módulo compartilhado.

O Editor será migrado separadamente para reduzir risco e facilitar revisão do diff.

## Ordem segura da Fase 2

1. Homologar o módulo compartilhado de sessão.
2. Migrar o Editor para o mesmo módulo em uma mudança isolada.
3. Criar `/admin/midia/` reutilizando a lógica existente, sem reescrever endpoints.
4. Mover biblioteca, segurança, limpeza e auditoria para a nova rota.
5. Manter no Editor somente a integração necessária para inserir/reutilizar mídia no conteúdo.
6. Extrair CSS e componentes de Mídia do CSS monolítico do Editor.
7. Validar sessão, CSRF, upload, leitura, dry-run e proteção contra exclusão insegura.
8. Só depois remover o bloco antigo de Mídia do Editor.

## Guardrails

- Git/Markdown continua sendo a fonte canônica editorial.
- D1 não vira uma segunda fonte editorial.
- Nenhum endpoint de Mídia deve ser reescrito apenas por motivo visual.
- A lógica de exclusão continua exigindo revisão, dry-run, snapshot e confirmação explícita.
- Nenhuma exclusão em lote será adicionada nesta fase.
- Nenhuma mudança em Cloudflare, R2, D1, secrets ou CI/CD sem necessidade comprovada.
- Cada etapa deve passar por PR, CI e homologação antes da etapa seguinte.
