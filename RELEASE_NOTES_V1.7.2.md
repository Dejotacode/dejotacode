# DejotaCode v1.7.2

## Resumo

A v1.7.2 consolida a revisão visual e de qualidade dos artigos após a publicação da v1.7.1, preservando a identidade do projeto e sem alterar a arquitetura de produção.

## Melhorias nos artigos

- Corrigido o contraste do botão de próximo passo em tema escuro e claro.
- Corrigida a legibilidade dos blocos de código no tema claro.
- Adicionado botão de cópia em blocos de código e comandos.
- Blocos `bash` exibem a ação `Copiar comando`.
- Blocos de outras linguagens exibem `Copiar código`.
- Adicionado feedback visual `Copiado ✓` após a cópia.
- Hover do CTA reforçado sem alterar a identidade visual.

## Conteúdo Linux

Os tutoriais Linux passaram a apresentar comandos principais em blocos `bash`, permitindo copiar diretamente `pwd`, `ls`, `ls -la`, `cd`, `mkdir` e `ls -l`.

## HTML, tema e Admin

- Script da newsletter da homepage movido para dentro do layout válido.
- Corrigida uma expressão CSS inválida no container do Admin.
- `theme-color` simplificado para HTML válido e atualizado dinamicamente conforme o tema ativo.
- Login e métricas do Admin continuam sem overflow horizontal em 1440, 768 e 390 px.

## Validação

- `astro check`: 0 erros, 0 warnings e 0 hints.
- Build de produção: 41 páginas estáticas.
- QA interno: 1.682 referências verificadas, 0 links quebrados.
- QA estrutural: 41 HTML, 0 páginas com problemas.
- Validator.nu: 41/41 páginas HTML, 0 erros.
- Responsividade dos artigos e Admin verificada em desktop, tablet e mobile.
- CTA de próximo passo validado em tema claro e escuro.
- Hover do CTA confirmado por inspeção de estilo computado.

## Segurança

O site copia comandos para a área de transferência; não tenta executar comandos no terminal local. Navegadores não devem ter permissão para executar shell arbitrário diretamente.
