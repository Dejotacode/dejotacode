# DejotaCode v1.10.0

## Resumo

A v1.10.0 consolida o Admin Editorial do DejotaCode como um fluxo de publicação assistida e seguro, integrado ao GitHub, CI, Cloudflare Pages e Cloudflare R2.

O conteúdo público continua tendo Git/Markdown como fonte canônica. D1 permanece responsável apenas por dados operacionais e metadados; não se torna fonte editorial pública.

## Admin Editorial

- Criação e edição de conteúdos existentes em `/admin/editor/`.
- Preview de Markdown antes da publicação.
- Geração, cópia e download do arquivo `.md`.
- Criação automática de branch editorial, commit e Pull Request.
- Consulta de estado do PR, conflito e CI diretamente pelo Admin.
- Ação assistida `Mesclar e publicar` liberada somente após CI aprovado.

## Imagens editoriais no R2

- Upload de JPG, PNG, WebP e AVIF diretamente pelo Editor.
- Limite de 10 MB e texto alternativo obrigatório para imagens.
- Organização em `posts/<slug>/YYYY/MM/<uuid>.<ext>`.
- Inserção automática do Markdown da imagem no cursor.
- Preview renderiza a imagem antes da criação do PR.
- Arquivo binário permanece no R2; D1 guarda somente metadados.

## Segurança da publicação

- Merge restrito a PRs destinados à `main`.
- Merge restrito a branches `content/admin-*`.
- `expectedHeadSha` obrigatório e comparado com o HEAD atual antes da publicação.
- O SHA também é enviado ao endpoint de merge do GitHub para reduzir risco de corrida.
- CI continua obrigatório e precisa terminar com sucesso.
- Sessão Admin e CSRF permanecem obrigatórios nas operações mutáveis.

## UX operacional

- Status do CI atualizado automaticamente a cada 5 segundos por até 3 minutos.
- Polling encerra ao concluir o CI, fechar ou mesclar o PR.
- `Atualizar status` permanece disponível como fallback manual.
- Mensagens de erro de merge não são mais sobrescritas pelo refresh do painel.
- O botão `Mesclar e publicar` desaparece após o PR ser mesclado.

## Entregas editoriais desde v1.7.2

- Phishing: como identificar mensagens suspeitas antes de clicar.
- Tutorial sobre pipe e redirecionamento no Linux.
- Guia de documentação do aprendizado.
- Guia de estudo com IA.
- Guia de DevTools para iniciantes.
- Imagem editorial adicionada ao conteúdo de comandos Linux.

## Infraestrutura de publicação

- Deploy de produção no Cloudflare Pages automatizado pelo CI da `main`.
- Fluxo validado em produção: Admin → PR → CI → merge → Pages → produção.

## Compatibilidade com a API

A API mantém versionamento independente do frontend.

- Repositório: `Dejotacode/dejotacode-api`.
- Package atual: `1.5.0`.
- Commit de produção compatível: `9789fba`.
- Worker de produção validado: `0f80d269-967a-4f11-b7c3-04249dc5c06e`.
- Nenhuma migration D1 foi necessária para este hardening.

## Validação da release

- `astro check`: 0 erros, 0 warnings e 0 hints.
- Build de produção: 46 páginas estáticas.
- QA interno: 1.896 referências verificadas, 0 links quebrados.
- QA estrutural: 46 HTML, 0 páginas com problemas.
- Smoke de produção: 10/10 verificações aprovadas.
- Teste real do PR #80 confirmou polling automático, merge protegido por SHA e estado mesclado.
- PR #81 corrigiu e validou a ocultação do botão de merge após publicação.

## Rollback

O rollback do frontend deve ser tratado separadamente da API. A tag anterior permanece preservada e nenhuma branch histórica foi apagada automaticamente.
