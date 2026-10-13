# Store — régua editorial e futura indexação

Data: 13/10/2026

## Objetivo

Manter a DejotaStore útil para o usuário sem expor ao Google páginas comerciais rasas. A Store permanece com `noindex, follow` enquanto as fichas são aprofundadas e avaliadas individualmente.

## Regra atual

- nenhuma página `/store/` deve voltar ao índice por padrão;
- produtos só podem ser considerados para futura indexação individual depois de revisão editorial;
- links comerciais continuam com transparência e atributos adequados;
- conteúdo editorial precisa existir independentemente da comissão de afiliado.

## Régua mínima para uma ficha candidata

Uma página só entra na fila de futura indexação se tiver, no mínimo:

1. contexto claro de para quem serve;
2. indicação de quando não faz sentido;
3. limitações e pontos de atenção reais;
4. origem da avaliação: uso, teste ou pesquisa claramente identificados;
5. transparência comercial;
6. conexão com conteúdo educativo do DejotaCode;
7. informação útil suficiente para a página continuar fazendo sentido mesmo sem o link afiliado;
8. revisão de atualidade antes de qualquer mudança de `noindex`.

## Classificação inicial

### Preparadas como referência editorial

- `elevenlabs` — uso real no DejotaCode, contexto de produção, limitações, critérios de escolha e tutorial relacionado.
- `jornada-python-hotmart` — pesquisa com fonte oficial, ressalva de não uso, critérios de decisão e três conteúdos educativos relacionados.

Essas páginas **continuam noindex**. O status significa apenas que já representam o padrão de profundidade desejado.

### Precisam aprofundar antes de qualquer avaliação de indexação

- `leadlovers-hotmart` — contexto editorial coerente, mas ainda curto e sem experiência prática validada;
- `fifine-am8-usb-xlr` — boa ficha de catálogo e oferta verificada, porém análise editorial ainda curta;
- produtos físicos e ferramentas com texto predominantemente descritivo devem permanecer nesta classe até revisão individual.

### Manter como catálogo/rascunho por enquanto

- `hostinger-hospedagem` — `draft: true`, parceria ainda não validada para publicação comercial;
- `hotmart-extensoes` — `draft: true`, afiliação/HotLink ainda pendente de validação;
- páginas comerciais muito curtas ou sem diferenciação editorial permanecem somente como catálogo e `noindex`.

## Critério para remover `noindex` no futuro

A remoção de `noindex` nunca será em lote. Deve acontecer página por página, somente após:

- revisão editorial concluída;
- conteúdo original suficiente;
- oferta/parceria atualizada quando aplicável;
- links internos coerentes;
- canonical e metadados revisados;
- QA e CI aprovados;
- decisão explícita registrada no projeto.

## Relação com o AdSense

Esta política existe também para evitar que páginas comerciais curtas voltem a compor o inventário indexável enquanto o domínio está em processo de reavaliação do AdSense por "conteúdo de baixo valor".
