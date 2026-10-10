# 0001 — Organização documental por responsabilidade

Status: vigente (decisão aceita). Escopo: documentação do site DejotaCode. Responsável: @control. Revisão: 10/10/2026.

## Contexto
Documentos de regras, registros de etapas, notas de versão e materiais editoriais estavam misturados na raiz e em docs.

## Decisão
Organizar por finalidade/assunto, com entrada única em docs/README.md e regra canônica em [organização documental](../organizacao-documental.md). CHANGELOG.md resume versões; docs/releases preserva notas completas. Atualizar antes de duplicar; separar status do assunto e preservar documentos substituídos.

## Alternativas
Um arquivo único para todo o acervo tornaria consulta e revisão extensas. Manter tudo na raiz não define destinos. Categorias profundas sem conteúdo aumentariam manutenção.

## Consequências
Links e instruções de agentes passam a usar os destinos atuais. Brand, assets e prototypes conservam caminhos usados por ferramentas. Verificação local em scripts/check-documentation.py. Mudanças em código, publicação e migrations continuam fora desta decisão.

## Histórico
Decisão aplicada localmente por autorização do usuário em 10/10/2026. Nenhuma publicação ou nova versão de produto criada.
