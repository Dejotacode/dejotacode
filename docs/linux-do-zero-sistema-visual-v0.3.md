# Linux do Zero — Sistema visual v0.3

Status: proposta de diagramação pronta para protótipo
Edição: 2026

## Direção visual

O ebook herda a identidade DejotaCode sem copiar a interface do site. A capa usa o universo dark da marca; o miolo usa base clara para leitura longa, impressão e acessibilidade.

Princípios: engenharia visual, precisão, calma, hierarquia forte, pouca decoração e nenhuma imagem sem função didática.

## Paleta editorial

- Carbon: `#0A0D12` — capa, divisórias e código escuro.
- Graphite: `#121721` — superfícies escuras secundárias.
- Slate: `#1E2633` — bordas fortes e elementos estruturais.
- White: `#FFFFFF` — capa e superfícies principais.
- Paper: `#F7F9FC` — fundo interno alternativo.
- Text: `#111827` — texto principal no miolo.
- Muted: `#4A5870` — legendas e apoio.
- Cyan: `#00CBE5` no miolo / `#00E5FF` na capa — assinatura DejotaCode.
- Error: `#B4232F` — risco real, nunca decoração.

Cor nunca será o único sinal de significado.
## Formato e grid

- Página: A4, 210 × 297 mm.
- Margens: 20 mm interna, 17 mm externa, 18 mm superior, 20 mm inferior.
- Grid: 8 colunas com gutter de 4 mm.
- Baseline: 4 mm.
- Comprimento de linha alvo: 55–72 caracteres.
- Corpo: 10,5–11 pt com entrelinha equivalente a 1,5–1,6.
- Rodapé: número da página + seção, sem informação essencial.
- Cabeçalho corrido apenas no miolo; não usar em abertura de capítulo.

## Tipografia

- Display e títulos: Plus Jakarta Sans.
- Texto corrido: Inter.
- Código/terminal: JetBrains Mono.
- H1 de abertura: 30–36 pt.
- H2: 18–22 pt.
- H3: 13–15 pt.
- Corpo: 10,5–11 pt.
- Legenda/nota: 8,5–9 pt.
- Código: 9–9,5 pt.

Evitar pesos excessivos. Usar 700/650 em títulos, 600 em subtítulos e 400/450 no corpo.
## Componentes editoriais

### ENTENDA
Fundo `#EAFBFE`, ícone textual `i`, borda esquerda cyan e título curto. Serve para conceito-chave, não para repetição.

### ATENÇÃO
Fundo `#FFF1F2`, ícone `!`, borda esquerda `#B4232F`. Reservado para risco real: disco, dados, permissões e segurança.

### DICA DO DEJOTA
Fundo branco, borda estrutural Slate e pequeno acento cyan. Tom de mentor, nunca obrigatório.

### SE DER ERRADO
Fundo `#FFF7ED`, ícone de ferramenta e instruções de recuperação. Sempre precisa dizer quando parar.

### PRATIQUE
Fundo `#F4F7FA`, checkbox visual e espaço respirado. Uma ação curta por bloco.

### VOCÊ NÃO PRECISA DECORAR
Tipografia grande e leve, sem caixa pesada. Funciona como pausa cognitiva.

Todos os boxes usam título + ícone/texto; nunca dependem apenas de cor.
## Screenshots e figuras

- Fonte sem anotação preservada em `docs/assets/linux-do-zero/screenshots/`.
- Borda de 1 px equivalente em Slate claro, raio discreto de 3–4 mm.
- Legenda abaixo, alinhada à esquerda, com contexto de versão quando necessário.
- Anotação derivada em arquivo separado; nunca sobrescrever a fonte.
- Setas/contornos em cyan para orientação; vermelho apenas para risco.
- Em screenshots críticos, usar rótulo textual junto ao destaque.
- Não ampliar captura além do tamanho em que texto continue nítido.

## Código e terminal

Bloco Carbon com texto quase branco e acento cyan apenas em rótulos. Sem sintaxe multicolorida nesta edição: menos ruído e melhor consistência de impressão.

Comandos de risco recebem um rótulo `ATENÇÃO` fora do bloco. A interface não deve fazer um comando perigoso parecer convidativo.

## Capa

Capa dark, sem fotografia e sem ilustração genérica. Usar o símbolo DejotaCode em escala grande, parcialmente fora do grid, linhas arquiteturais e um único eixo cyan.

Hierarquia sugerida:

`LINUX DO ZERO` → título principal
`Guia prático para começar com segurança` → subtítulo
`Edição 2026` → metadado
`DejotaCode` → assinatura

A capa deve funcionar também em miniatura de marketplace.
## Abertura de capítulo

Página de respiro com número grande, título, promessa do capítulo e uma linha de orientação. Sem screenshot na abertura. O leitor deve entender onde está antes de receber instruções.

## Tabelas e checklists

- Cabeçalho com fundo Paper ou Carbon, conforme contexto.
- Zebra apenas quando necessário; preferir separadores finos.
- Células com texto curto; listas longas viram blocos, não tabelas.
- Checklists usam quadrado vazio + verbo de ação.
- Bônus imprimíveis evitam fundo escuro em área extensa.

## Acessibilidade e impressão

- Contraste mínimo equivalente a WCAG AA para texto relevante.
- Corpo nunca menor que 10,5 pt.
- Não usar cyan claro como texto corrido em fundo branco.
- Nenhuma instrução depende exclusivamente de cor, posição ou ícone.
- Texto alternativo vem de `docs/linux-do-zero-legendas-acessibilidade-v0.2.md`.
- Evitar páginas com grandes massas escuras no miolo para economizar tinta.
- Links devem continuar reconhecíveis em impressão preto e branco.

## Protótipo de validação

O protótipo v0.3 deve representar seis situações: capa, abertura de capítulo, página de leitura, box de segurança, screenshot com legenda e página de terminal/checklist. Só depois da aprovação desse sistema a diagramação completa deve começar.

## Critério de aprovação

A fase visual pode avançar para diagramação integral quando: hierarquia funciona em A4 e tela; texto longo permanece confortável; boxes são distinguíveis sem depender de cor; screenshots continuam legíveis; e a identidade lembra DejotaCode sem parecer uma página do site impressa.