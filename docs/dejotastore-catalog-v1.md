# DejotaStore — Catálogo inicial v1

Status: pronto para revisão, ainda não aprovado para produção.

## Objetivo

Organizar a primeira versão comercial da DejotaStore sem transformar o site em marketplace. A regra editorial permanece: ensinar primeiro, recomendar depois.

## Escopo desta versão

O catálogo inicial destaca sete produtos físicos com ficha editorial e oferta afiliada registrada:

- Baseus FC11 Power Bank
- Baseus FM11 Power Bank 10.000 mAh
- Fifine AM8 USB/XLR
- Gshield Hub USB-C 6 em 1
- Logitech Pebble 2 M350s
- SanDisk Portable SSD 1 TB
- UGREEN Uno Hub USB-C 6 em 1

## Modelo editorial

Cada produto mantém o status editorial separado do status comercial. `editorialStatus` registra se o item foi pesquisado, testado ou usado; `catalogStage` define se pertence ao catálogo inicial, catálogo geral ou avaliação.

Preço não é tratado como dado permanente. Disponibilidade e valor devem ser conferidos diretamente no parceiro.
## Modelo comercial

As ofertas novas usam a lista estruturada `offers`, com parceiro, URL afiliada, estado ativo, data de verificação e rótulo. O campo legado `affiliateLinks` foi mantido temporariamente para compatibilidade com páginas já publicadas.

Campos adicionais preparados:

- marca;
- tipo de produto;
- verificação editorial;
- compatibilidade por plataforma;
- múltiplas ofertas por produto.

## Interface

A home da Store destaca somente os sete itens marcados como `catalogo-v1`. Os demais produtos não-rascunho permanecem disponíveis nas categorias e páginas individuais.

Os cards mostram marca e quantidade de ofertas verificadas. A página individual prioriza ofertas estruturadas e usa os links antigos apenas como fallback.

As fichas exibem a data da última verificação quando disponível e mantêm disclosure de afiliação próximo aos CTAs externos.

## Integração editorial

O mecanismo Blog → Store existente foi preservado. Não foram adicionados links comerciais novos em artigos nesta etapa; isso continua dependendo de revisão editorial por conteúdo.

As categorias existentes foram mantidas para evitar quebra de URLs e de navegação: Linux, Setup, Programação, Criadores e Ferramentas digitais.
## Validação técnica

Executado em 02/10/2026:

- `npm run build`: aprovado; 103 páginas geradas;
- `npm run check`: 0 erros, 0 warnings, 0 hints;
- `npm run qa`: 5.367 referências internas verificadas, 0 links quebrados;
- QA HTML: 103 páginas analisadas, 0 páginas com problemas.

## Pendências deliberadas

Não foram adicionadas imagens oficiais dos produtos. Imagens só devem entrar depois de confirmar fonte, licença e correspondência exata com a oferta.

Não foram congelados preços ou percentuais de comissão na interface, porque podem mudar.

A migração de todos os produtos antigos para `offers` pode ser feita depois da revisão desta v1.

## Branch de revisão

`feat/dejotastore-catalog-v1`

A branch não deve ser mergeada na main até a revisão final do DejotaCode.

## Evolução futura da home da DejotaStore

Não executar nesta versão. Registrar para planejamento futuro.

A home da DejotaStore hoje destaca os sete produtos físicos do catálogo inicial. No futuro, a área de recomendações pode evoluir de uma vitrine fixa para um catálogo editorial dinâmico, mais próximo da lógica de um blog/feed:

- misturar produtos físicos, ferramentas digitais, serviços e conteúdos comerciais das categorias existentes;
- dar visibilidade equilibrada a Linux, Setup, Programação, Criadores e Ferramentas digitais, evitando que a home pareça apenas uma vitrine de links de Shopee/Mercado Livre;
- ordenar itens por uma regra editorial explícita, com conteúdos/recomendações mais recentes aparecendo primeiro quando fizer sentido;
- preparar paginação, “carregar mais” ou outra forma de navegação quando o volume crescer;
- preservar curadoria e relevância: novidade não deve substituir contexto editorial nem transformar a Store em marketplace;
- manter as páginas de categoria como caminhos de exploração específicos, mesmo que a home passe a funcionar como feed misto.

Antes de implementar, definir o campo canônico de ordenação (por exemplo, `publishedAt`, `updatedAt` ou `catalogPublishedAt`) e a política para itens fixos/destaques editoriais.


## 07/10/2026 — MX Anywhere 3S: preview local aprovado

- Aprovação visual explícita de Dejota pela opção “Aprovar preview”, às 22:23–22:24 (America/Sao_Paulo).
- Produto: `logitech-mx-anywhere-3s`; status editorial preservado: `pesquisado`.
- Imagem aprovada aplicada em `public/assets/store/logitech-mx-anywhere-3s.webp` e associada em `src/data/storeVisuals.ts`.
- Ofertas cadastradas: Shopee `https://s.shopee.com.br/8Kq6zmDSfk` e Mercado Livre `https://meli.la/2kbJ7KA`.
- Validação: `npm run check`, `npm run build:preview` e `npm run qa` concluídos com exit code 0; página e imagem HTTP 200; os dois links e atributos de afiliado presentes no HTML local.
- Preview: http://127.0.0.1:4340/store/logitech-mx-anywhere-3s/
- Estado: APLICADO_LOCALMENTE / PREVIEW_APROVADO / NÃO_PUBLICADO.
- Publicação permanece pendente até todas as imagens planejadas serem aplicadas e revisadas localmente.
- Próximo passo: conferir as imagens restantes da Store e consolidar o estado no Centro de Controle.


## 07/10/2026 — Fila operacional de imagens da Store

Base: conferência local do catálogo e de `src/data/storeVisuals.ts` em `local/dev-20261007`. A existência de uma imagem confirma aplicação, não aprovação visual.

Fluxo por item: `@studio criar imagem → preview → aprovação explícita → @dev aplicar localmente → validação técnica → revisão visual → registro`. Trabalhar um item por vez; não gerar antecipadamente toda a fila. Publicação somente após as imagens planejadas estarem aplicadas e revisadas localmente.

| Ordem | Produto | ID | Estado | Próxima ação |
|---|---|---|---|---|
| 1 | SanDisk Ultra Flair 32 GB | sandisk-ultra-flair-32gb | Imagem genérica | @studio criar imagem SanDisk Ultra Flair 32 GB |
| 2 | Leadlovers | leadlovers-hotmart | Imagem genérica | @studio criar imagem Leadlovers |
| 3 | Programação do Iniciante ao Avançado | programacao-iniciante-avancado-hotmart | Imagem genérica | @studio criar imagem Programação do Iniciante ao Avançado |
| 4 | Segurança Digital Essencial | seguranca-digital-essencial-hotmart | Imagem genérica | @studio criar imagem Segurança Digital Essencial |
| 5 | Hospedagem para o primeiro site | hospedagem-primeiro-site | Imagem genérica | Revisar relação editorial com Hostinger antes de definir arte própria |

Rascunhos: Elementor e Hostinger têm imagens locais aplicadas, mas não devem ser ativados apenas por isso. Extensões da Hotmart permanece com imagem genérica e fora da fila ativa até retomada explícita.

Revisão final: conferir hero da Store, cards, páginas individuais, temas claro/escuro e versão mobile. MX Anywhere 3S tem aprovação visual explícita registrada acima; confirmar os registros de aprovação dos demais itens antes de declarar o conjunto aprovado.

Observações para o Studio: usar a identidade oficial DejotaCode e um único símbolo; não inventar capas oficiais de cursos, telas, certificados ou evidências. Para ferramentas/cursos, adotar composição editorial coerente com a ficha; para produtos físicos, conferir referência do modelo antes da criação.

Próximo comando recomendado: `@studio criar imagem SanDisk Ultra Flair 32 GB`.


## 07/10/2026 — Seis imagens aprovadas e aplicadas localmente

- Instrução posterior de Dejota substituiu a criação um item por vez: criar todas as imagens faltantes, incluindo o rascunho Extensões da Hotmart.
- Aprovação explícita das seis artes: `@studio aprovar todas`, às 22:33.
- Aplicação autorizada: `@dev aplicar todas as imagens aprovadas da Store`.
- IDs aplicados: `sandisk-ultra-flair-32gb`, `leadlovers-hotmart`, `programacao-iniciante-avancado-hotmart`, `seguranca-digital-essencial-hotmart`, `hospedagem-primeiro-site`, `hotmart-extensoes`.
- Arquivos WebP em `public/assets/store/`, associados em `src/data/storeVisuals.ts`; artes conceituais/editoriais, sem reprodução de interfaces ou capas oficiais.
- Cinco páginas ativas e todas as seis imagens verificadas no preview local com HTTP 200 e associação correta; rascunho Hotmart preservado.
- `npm run check`, `npm run build:preview` e `npm run qa`: aprovados. Build: 110 páginas; 0 links internos quebrados; 0 páginas com problemas de QA HTML.
- Estado: ARTES_APROVADAS / APLICADAS_LOCALMENTE / REVISÃO_DA_PÁGINA_PENDENTE / NÃO_PUBLICADO.
- O catálogo atual inteiro tem imagem específica associada; isso não substitui a revisão visual das páginas em claro/escuro e mobile.
- Alterações preexistentes preservadas. Nenhum push ou deploy executado nesta etapa.
- Preview geral: http://127.0.0.1:4340/store/
- Próximo passo: revisão visual das categorias e fichas, seguida de consolidação do Centro de Controle.


## 07/10/2026 — Revisão Store claro, escuro e mobile

- Revisão em Chromium headless: 14 rotas × 4 larguras (320, 390, 768 e 1440 px) × 2 temas = 112 combinações; rodada final sem overflow horizontal, elementos fora da viewport ou imagens quebradas.
- Capturas inspecionadas: home mobile escura, categoria Programação mobile clara e desktop escura, MX Anywhere 3S mobile claro/escuro e desktop claro.
- Problema encontrado: cards 16:9 cortavam a parte superior das artes 4:3, incluindo símbolo DejotaCode.
- Correção: `StoreCard.astro` usa `aspect="card"` e `object-fit:contain`; ficha `store/[slug].astro` usa a mesma proporção e preserva a imagem inteira. Margens podem aparecer quando a proporção da arte difere da área disponível.
- Alternância de tema e persistência após recarga verificadas no mobile.
- `npm run check`, build preview, QA HTML e links aprovados; 110 páginas, 0 links quebrados, 0 páginas com problemas. `git diff --check` aprovado.
- Esta revisão cobre layout/enquadramento e verificação visual das capturas citadas; não constitui auditoria completa WCAG ou validação em todos os navegadores.
- Estado: REVISÃO_TÉCNICA_E_VISUAL_LOCAL_CONCLUÍDA / REVISÃO_FINAL_DEJOTA_PENDENTE / NÃO_PUBLICADO.
- Preview: http://127.0.0.1:4340/store/
- Próximo passo: Dejota revisar o preview corrigido e consolidar o Centro de Controle; nenhuma publicação executada.


## 07/10/2026 — Ajuste de enquadramento após capturas do Dejota

- Seleção do usuário: corrigir enquadramento. Cards e fichas agora usam altura natural da imagem; ficha deixa de esticar para igualar a altura do resumo. Etiquetas ficam abaixo da arte, sem sobreposição.
- Corrigidas faixas vazias provocadas pela proporção fixa e pelo esticamento do layout.
- Limitação confirmada ao abrir o arquivo original: Logitech Pebble 2 M350s já tem o texto Logitech cortado na própria imagem WebP. Corrigir CSS não recupera conteúdo ausente; revisão das artes antigas continua pendente.
- Build preview e QA aprovados: 110 páginas, nenhum link interno quebrado e nenhuma página com problema de HTML. Auditoria responsiva: 112 combinações sem falhas de overflow ou imagens quebradas.
- Preview: http://127.0.0.1:4340/store/
- Alterações anteriores preservadas; nenhuma publicação. Próximo passo: revisar preview e recuperar ou refazer artes antigas com texto cortado.


## 07/10/2026 — Remoção de etiquetas e padronização de cards

- Autorização explícita de Dejota após capturas anotadas: remover categoria/marca sob a imagem das fichas e etiquetas de categoria de todos os cards.
- Faixa da ficha removida; imagem preservada em proporção natural.
- Cards com área de imagem uniforme 4:3, sem encolhimento no flex; contain preserva a arte inteira. Imagens de outra proporção podem ter margens. Badges editoriais preservados.
- Build preview, QA HTML/links, Astro check e diff check aprovados. Dimensões dos 12 cards presentes no preview verificadas: mesma proporção com até 1 px de arredondamento.
- Textos cortados nas artes antigas continuam pendentes de recuperação/refação.
- Estado: APLICADO_LOCALMENTE / REVISÃO_DEJOTA_PENDENTE / NÃO_PUBLICADO.
- Preview: http://127.0.0.1:4340/store/


## 07/10/2026 — Imagens preenchendo os espaços

- Dejota aprovou preencher toda a área dos cards e igualar altura da imagem da ficha ao painel de informações, após capturas anotadas das 23:04/23:05.
- Cards: 4:3 com object-fit cover. Fichas desktop: imagem ocupa toda a coluna e acompanha altura do resumo; no mobile, área 4:3. Sem distorção e sem faixas vazias.
- Conferência da ficha Baseus FC11 em 1440 px: imagem e resumo com 555,94 px de altura. Capturas de cards e ficha inspecionadas.
- Consequência do enquadramento: artes antigas horizontais com textos próximos das bordas sofrem cortes laterais. Refação dessas artes permanece pendente; CSS não recupera textos ausentes do arquivo original.
- Build preview, QA HTML/links, Astro check e diff check aprovados.
- Estado: APLICADO_LOCALMENTE / REVISÃO_DEJOTA_PENDENTE / NÃO_PUBLICADO. Preview: http://127.0.0.1:4340/store/


## 07/10/2026 às 23:10 — Revisão local aprovada por Dejota

- Aprovação explícita: `@control aprovar revisão local da Store`.
- Aprovado o layout atual: cards sem etiquetas de categoria, imagens preenchendo área 4:3; fichas sem faixa de categoria/marca sob a imagem e com imagem acompanhando a altura do resumo no desktop. Badges editoriais mantidos.
- Última validação: build preview, QA HTML/links e Astro check aprovados; 112 combinações responsivas sem falhas.
- Pendência conhecida: correção/refação de artes antigas com textos cortados no arquivo original ou pelo enquadramento. Aprovação do layout não encerra essa pendência.
- Estado: REVISÃO_LOCAL_APROVADA / ARTES_ANTIGAS_COM_CORREÇÕES_PENDENTES / NÃO_PUBLICADO.
- Nenhum push ou deploy autorizado ou executado nesta etapa. Preview: http://127.0.0.1:4340/store/
- Próximos comandos: `@studio corrigir artes com textos cortados`; `@control sincronizar`.


## 07/10/2026 às 23:34 — Sete artes corrigidas aprovadas

- Aprovação explícita de Dejota: `@studio aprovar todas`.
- Conjunto aprovado: Baseus FC11, Baseus FM11, Gshield Hub USB-C 6 em 1, Logitech Pebble 2 M350s, Ugreen Hub USB-C 6 em 1, Metricool e NordVPN.
- Versões finais: sem títulos ou textos promocionais; um único símbolo branco/turquesa DejotaCode no canto superior esquerdo, usando o SVG oficial como referência. Marcas físicas dos produtos preservadas.
- Ordem e arquivos gerados finais: Baseus FC11 = exec-6b86b34e-5ee9-42e0-877a-548de53df5b9.png; Baseus FM11 = exec-82216d8c-ff13-40a4-b83a-d64b00cc332b.png; Gshield = exec-0900bb40-95be-4876-a682-49c28d57df7f.png; Logitech Pebble = exec-a1a0dd18-8804-48ac-b6f9-a2436027fc86.png; Ugreen = exec-f86a53c1-75f2-4cb3-b458-41c4dc31eeed.png; Metricool = exec-85b51414-09c5-4ee6-b0af-bc5fa3847502.png; NordVPN = exec-66cdd7e8-de86-4f10-989a-75dff9e14049.png.
- Estado: ARTES_CORRIGIDAS_APROVADAS / APLICAÇÃO_LOCAL_PENDENTE / NÃO_PUBLICADO.
- Próximo comando: `@dev aplicar todas as imagens aprovadas da Store`. Conferir enquadramento e visibilidade do símbolo nos cards e fichas após aplicação.


## 07/10/2026 às 23:35 — Aplicação das sete artes corrigidas

- Aplicação autorizada: `@dev aplicar todas as imagens aprovadas da Store`.
- Sete arquivos `-sem-texto-v2.webp` adicionados em `public/assets/store/` e associados em `src/data/storeVisuals.ts`: Baseus FC11, Baseus FM11, Gshield, Logitech Pebble 2, Ugreen, Metricool e NordVPN.
- Originais preservados. Metricool e NordVPN usam cópias próprias na Store; imagens das páginas Recursos não foram substituídas.
- Enquadramento das sete versões novas usa posição superior esquerda para preservar a marca nas áreas preenchidas dos cards/fichas. Capturas do catálogo e Baseus FC11 desktop inspecionadas.
- Todas as sete páginas respondem HTTP 200 com arquivo correto e imagem decodificada. Build preview, QA HTML/links, Astro check e diff check aprovados.
- Estado: ARTES_APROVADAS_APLICADAS_LOCALMENTE / REVISÃO_FINAL_DEJOTA_PENDENTE / NÃO_PUBLICADO.
- Preview: http://127.0.0.1:4340/store/
- Próximo comando: `@control aprovar revisão local da Store`. Nenhum push ou deploy executado.


## 07/10/2026 às 23:39 — Revisão final local aprovada

- Aprovação explícita de Dejota: `@control aprovar revisão local da Store`, após aplicação das sete artes corrigidas.
- Conjunto aprovado: layout atual e sete novas artes sem texto promocional, com símbolo no canto superior esquerdo, aplicadas aos dois Baseus, Gshield, Logitech Pebble, Ugreen, Metricool e NordVPN.
- Última validação: build preview, QA HTML/links e Astro check aprovados; 112 combinações responsivas sem falhas.
- Estado: REVISÃO_FINAL_LOCAL_APROVADA / PUBLICAÇÃO_PENDENTE. A antiga pendência de textos cortados nas sete artes substituídas foi resolvida nesta rodada.
- Esta aprovação não autoriza publicação; nenhum push ou deploy executado.
- Próximo passo: `@control sincronizar`; publicação aguarda comando explícito de Dejota.
- Preview: http://127.0.0.1:4340/store/
