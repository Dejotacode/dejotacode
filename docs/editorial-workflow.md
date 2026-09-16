# Fluxo editorial do DejotaCode

## Fonte de verdade

O frontend moderno usa `src/content/posts/*.md` como fonte editorial. Publicação é feita pelo build estático do Astro e pelo deploy do frontend; o D1 não é fonte de conteúdo público nesta arquitetura.

## Criar conteúdo

1. partir de `main` limpa e atualizada;
2. criar branch de escopo editorial;
3. adicionar um arquivo Markdown em `src/content/posts/`;
4. preencher todos os campos exigidos por `src/content.config.ts`;
5. usar slug estável, título descritivo e descrição objetiva;
6. definir categoria, tipo, dificuldade, tempo de leitura e tags coerentes;
7. manter `draft: true` enquanto o conteúdo não estiver pronto para publicação.

## Revisar

Antes de remover o estado de rascunho, revisar:

- clareza e precisão técnica;
- coerência com a trilha e a categoria;
- links internos e próximo passo do leitor;
- título, descrição e intenção de busca;
- imagens e assets, quando existirem;
- ausência de segredos, dados pessoais ou material não autorizado.

## Publicar e atualizar

Para publicar, alterar apenas o necessário, executar `npm run check`, `npm run build:production` e `npm run qa`, abrir PR e integrar somente com CI verde. Deploy e release continuam operações separadas.

Atualizações preservam o slug sempre que possível. Quando o conteúdo mudar de forma material, preencher `updatedAt`. Mudanças de URL exigem avaliação explícita de redirecionamento e SEO.

## Assets e capas

Preferir arquivos otimizados, nomes previsíveis em kebab-case e texto alternativo útil. Não versionar assets temporários ou cópias redundantes. A biblioteca R2 legada não deve ser tratada como fonte editorial do frontend moderno sem uma futura migração arquitetural explícita.
