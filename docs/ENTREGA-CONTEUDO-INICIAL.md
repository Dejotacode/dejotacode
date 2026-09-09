# DejotaCode — Conteúdo inicial v1

Este pacote contém 10 artigos e 10 tutoriais para importação no Cloudflare D1.

## Arquivos

- `api/seeds/initial-content.json`: fonte editorial legível e editável.
- `api/seeds/initial-content.generated.sql`: importação pronta para D1.
- `scripts/generate-content-seed.mjs`: valida o JSON e recria o SQL.
- `docs/FONTES-E-REVISAO.md`: fontes primárias e checklist editorial.

## Estado editorial

Todos os 20 conteúdos entram com status `review`. Nada é publicado automaticamente. Cada texto deve ser revisado no CMS antes de mudar para `published`.

## Segurança da importação

- A importação usa o primeiro usuário `admin` ativo como autor.
- As categorias são resolvidas pelos slugs já existentes no D1.
- `INSERT OR IGNORE` preserva conteúdos com slugs já cadastrados.
- Executar o mesmo seed novamente não duplica registros.
- O pacote não contém credenciais, tokens, IDs de conta ou configurações Wrangler.

## Validação realizada

- JSON válido.
- 10 registros `article` e 10 registros `tutorial`.
- 20 slugs únicos e válidos.
- Oito categorias reconhecidas.
- Todos os conteúdos possuem pelo menos três seções.
- SQL executado em SQLite compatível com o schema do projeto.
- Relações de autor e categoria verificadas.
- Segunda importação manteve o total em 20 registros.

## Importação

A importação deve ser feita primeiro no D1 preview. Antes de executar, gere um export de segurança e confira que o repositório está limpo. A aplicação e a revisão serão realizadas passo a passo com orientação.
