# Auditoria de acessibilidade e consistência visual — v1.9.0

Data: 2026-09-16

## Escopo

Auditoria estática/read-only do build atual, sem mudanças no runtime, CTA, formulários ou funil de conversão.
Foram avaliadas as 40 páginas HTML geradas, layouts, componentes globais e tokens de tema.

## Acessibilidade — evidências positivas

- Todas as 40 páginas possuem `lang="pt-BR"`.
- Todas possuem landmark `<main>`, alvo `#conteudo` e skip link funcional para o conteúdo.
- Todas possuem exatamente um `h1`; a heurística não encontrou saltos de nível de heading.
- Imagens geradas não apresentaram ausência evidente de `alt` na varredura estática.
- Navegação principal/mobile possui `aria-label` e estado atual com `aria-current`.
- Menu mobile expõe `aria-expanded`, `aria-controls`, nome acessível e suporte a `Escape`.
- Toggle de tema mantém `aria-pressed` e nome acessível atualizado.
- Há foco global visível com `:focus-visible` e token dedicado de foco.
- Existe tratamento de `prefers-reduced-motion` no CSS global e em componentes com transição.
- Formulários de contato, newsletter, busca e Admin possuem labels válidos; os alertas iniciais da heurística eram falsos positivos por labels envolvendo diretamente inputs.

## Contraste dos tokens principais

A checagem matemática WCAG dos pares principais encontrou contraste AA ou superior nos casos amostrados:

- dark text/bg: 18.31:1
- dark muted/bg: 9.50:1
- dark subtle/bg: 6.10:1
- dark accent/bg: 12.65:1
- light text/bg: 16.82:1
- light muted/bg: 6.82:1
- light subtle/bg: 4.51:1
- light accent-strong/bg: 4.97:1
- accent contrast/accent: 9.81:1

`light subtle/bg` passa AA para texto normal, mas com margem pequena; deve ser preservado ou melhorado em futuras alterações de paleta.

## Consistência visual

- Cores funcionais estão centralizadas em `src/styles/tokens.css` para temas dark/light.
- Fora dos tokens, foram encontrados apenas usos pontuais esperados: `theme-color` dos layouts e sombra decorativa da homepage.
- Header, footer, cards, formulários e páginas institucionais usam os mesmos tokens de texto, superfície, borda, foco e acento.
- Os dois temas compartilham a mesma estrutura sem duplicar componentes.

## Limitações da auditoria

Esta etapa não substitui testes manuais com navegador e tecnologias assistivas. Permanecem para validação posterior:

- ordem de foco e navegação completa apenas por teclado;
- leitura com NVDA/Orca/VoiceOver;
- reflow em 200%/400% e zoom real;
- contraste de todos os estados hover/disabled sobre fundos compostos;
- comportamento do menu mobile e mensagens dinâmicas em leitor de tela;
- Core Web Vitals e acessibilidade por Lighthouse/axe em navegador real.

## Decisão

Nenhum problema observado exige alteração antes do baseline D+7/D+14.
Correções cosméticas ou hardening não crítico devem permanecer congelados para não misturar QA com mudanças de produto durante a medição da v1.7.0.

## Próximo checkpoint seguro

Após a medição, executar validação manual responsiva e por teclado em desktop/tablet/mobile, seguida de Lighthouse/axe. Qualquer correção deve ser isolada por causa e não alterar simultaneamente o funil de conversão.
