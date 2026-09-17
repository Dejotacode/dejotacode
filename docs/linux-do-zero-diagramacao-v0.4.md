# Linux do Zero — Diagramação integral v0.4

Status: prova técnica integral gerada e revisada
Edição: 2026

## Fonte canônica

Os arquivos Markdown continuam sendo a fonte canônica do conteúdo. O HTML em `docs/prototypes/linux-do-zero-full-v0.4/index.html` é gerado automaticamente e não deve ser editado manualmente.

Gerador:

```bash
python3 scripts/build-linux-ebook.py
```

Exportação de prova em PDF, quando Firefox e geckodriver estiverem disponíveis:

```bash
python3 scripts/print-linux-ebook.py --output /caminho/linux-do-zero-proof.pdf
```

## Resultado atual

- 10 blocos editoriais: introdução, capítulos 1–8 e bônus.
- 24 screenshots reais inseridos nos pontos planejados.
- 71 callouts reconhecidos e estilizados.
- Capa, página editorial, sumário e aberturas de capítulo.
- Código e terminal em tratamento próprio.
- Prova técnica atual: 84 páginas A4.
## QA executado

As provas intermediárias revelaram três problemas de paginação: um título de etapa isolado antes de uma sequência de screenshots, dois boxes “DICA DO DEJOTA” quase órfãos em páginas próprias e o fundo de prévia aparecendo na área vazia da última página. O gerador passou a agrupar título + primeira figura e parágrafo + dica quando necessário, e o CSS de impressão foi corrigido para fundo branco.

Foram inspecionadas diretamente páginas da capa, sumário, Capítulo 3, Capítulo 4, terminal e fechamento dos bônus. Também foi renderizada uma versão reduzida das 84 páginas para auditoria de densidade; nenhuma página quase vazia permaneceu. Não foram encontrados cortes de texto, screenshots fora da página ou boxes sobrepostos após as correções.

A prova PDF é mantida fora do Git enquanto ainda for artefato de QA. O repositório guarda o gerador Markdown → HTML, o HTML reproduzível, o CSS e o exportador Firefox/geckodriver. Os arquivos Markdown continuam sendo a fonte canônica.

## Decisões de produção

- HTML/protótipo mantém Plus Jakarta Sans na experiência visual.
- A impressão usa Inter nos títulos para maior robustez do motor PDF.
- Screenshots permanecem fontes PNG sem anotação; anotações futuras devem ser derivadas.
- Não fabricar screenshots de cenários que o laboratório não reproduziu.
- Grandes fundos escuros ficam concentrados na capa e aberturas, preservando o miolo para leitura e impressão.

## Antes do PDF comercial final

Ainda faltam acabamento de metadados e paginação final, revisão ortográfica de prova, inclusão de números de página/rodapés quando o motor final estiver fechado e preflight do PDF comercial. Esses itens pertencem à fase de finalização, não ao manuscrito ou à diagramação-base.
