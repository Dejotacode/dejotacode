# Fluxo editorial do DejotaCode

## Fonte de verdade

O conteúdo público continua canônico em `src/content/posts/*.md`. O Astro gera o site estático a partir desses arquivos. D1 não é fonte editorial pública.

## Admin Editorial

A rota `/admin/editor/` oferece criação/edição assistida, frontmatter estruturado, Markdown, preview, cópia/download `.md` e upload de imagens. A sessão Admin e CSRF são obrigatórios nas operações mutáveis da API.

## Criar ou atualizar conteúdo

1. selecionar um conteúdo existente ou iniciar um novo conteúdo;
2. revisar título, slug, descrição, categoria, tipo, dificuldade, data, leitura, tags e estados;
3. editar Markdown e revisar o preview;
4. quando necessário, enviar JPG/PNG/WebP/AVIF ao R2 com `alt` útil;
5. gerar o Markdown final;
6. criar Pull Request pelo Admin.

O Worker cria branch `content/admin-*`, grava `src/content/posts/<slug>.md`, cria commit e abre PR para `main`.

## Mídia R2

Imagens editoriais são armazenadas no R2 em `posts/<slug>/YYYY/MM/<uuid>.<ext>`. O D1 guarda metadados operacionais. O Markdown contém a URL pública da imagem, preservando Git/Markdown como registro do conteúdo publicado.

Tipos aceitos no Editor: JPG, PNG, WebP e AVIF; limite atual de 10 MB. Imagens exigem texto alternativo.

## Revisar e publicar

Antes do merge, revisar diff, conteúdo, mídia e CI. O Admin consulta estado do PR e CI automaticamente; `Mesclar e publicar` só é liberado para PR aberto, mergeável e com CI aprovado.

A API restringe a publicação a base `main`, branch `content/admin-*` e `expectedHeadSha` igual ao HEAD revisado. O SHA também é enviado ao merge do GitHub.

Após o merge, o push na `main` dispara o workflow de produção do frontend, que executa qualidade, deploy no Cloudflare Pages e smoke test. Tag e GitHub Release continuam separadas desse fluxo.

## Guardrails

- não publicar diretamente no D1;
- não expor token GitHub, Cloudflare ou secrets no frontend;
- não mesclar PR com CI pendente/falho ou HEAD diferente do revisado;
- preservar slug quando possível;
- usar `updatedAt` para mudanças materiais quando aplicável;
- mudanças de URL exigem avaliação explícita de redirecionamento e SEO;
- exclusões em massa no R2 continuam operação de alto risco.
