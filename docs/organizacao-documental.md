# Organização documental do DejotaCode

Status: vigente. Escopo: criação, atualização, localização e revisão de documentação. Responsável: @control. Revisão: 10/10/2026.

## Antes de criar um arquivo
1. Confirmar o projeto: regra do site fica aqui; ferramenta de máquina fica em Workspace/tools; estados de coordenação ficam no Control.
2. Procurar documento existente sobre o assunto. Atualizar antes de criar uma fonte concorrente.
3. Identificar finalidade: regra/referência, instrução prática, explicação, plano, decisão ou registro de execução.
4. Usar a tabela de destinos. Criar divisão adicional somente se houver conteúdo suficiente.
5. Declarar status, escopo, responsável e revisão; incluir o arquivo no índice da sua área.
6. Conferir links e executar python3 scripts/check-documentation.py.

## Destinos
| Tipo | Destino |
|---|---|
| Apresentação e entrada | README.md na raiz; docs/README.md para documentação |
| Resumo por versão | CHANGELOG.md na raiz |
| Instruções dos agentes/contribuição | AGENTS.md, CLAUDE.md, CONTRIBUTING.md na raiz |
| Design, tokens, componentes, ícones e mídia | docs/padroes/ |
| Arquitetura e fronteiras site/API/Admin | docs/arquitetura/ |
| Escolha técnica importante e seu motivo | docs/decisoes/ |
| Desenvolvimento, publicação, recuperação e procedimentos | docs/operacao/ |
| Planejamento e critérios editoriais/comerciais | docs/editorial/ |
| Materiais do produto Linux do Zero | docs/editorial/linux-do-zero/ |
| Notas completas de entrega | docs/releases/ |
| Auditoria, revisão e evidência de validação | docs/auditorias/ |
| Documento substituído ou etapa arquivada | docs/historico/ |
| Conteúdo publicado de artigo/produto | src/content/ na coleção existente |
| Configuração compartilhada da máquina | /home/dejota/Workspace/tools/ |
| Dados privados e backups | destino privado fora do repositório público |

## Diretórios de suporte existentes
docs/brand, docs/assets e docs/prototypes conservam caminhos usados por ferramentas e arquivos de produção. Seus índices explicam o conteúdo. Não confundir esses materiais com imagens públicas em public/assets.
docs/editorial-backlog mantém o backlog existente; docs/history mantém o acervo legado. Novos documentos substituídos usam docs/historico; não abrir outra pasta archive ou history paralela. Não mover recursos usados por scripts sem rever consumidores.

## Status e autoridade
Usar vigente, proposta, registro ou substituído. Registro identifica uma etapa ou evidência, sem afirmar que a situação continua atual. A data sozinha não define validade.
Cada regra tem uma fonte canônica indicada no índice. Documento Mestre rege os padrões comuns; os catálogos detalham seus exemplos. Arquitetura define fronteiras; runbooks descrevem operação. Relatos de execução não mudam regras automaticamente.
Em conflito, registrar decisão em docs/decisoes, indicar fonte afetada e atualizar índices; não escolher silenciosamente pela data mais recente. Documento substituído aponta para o sucessor e permanece preservado.

## Nomes e modelos
Arquivos novos: nomes descritivos, minúsculos, sem espaços, com hífen. Nomes históricos preservados, inclusive RELEASE_NOTES_V*.md; não renomear para embelezar.
Regra permanente: nome estável sem data, por exemplo publicacao-do-site.md.
Registro de execução: assunto-aaaa-mm-dd.md. Decisão nova: 0001-assunto.md com contexto, alternativas, decisão e consequências.
Não criar final-final-2, duplicar texto aprovado ou assumir que extensão/data define destino.

Cabeçalho:
Status: vigente | proposta | registro | substituído
Escopo: o que este documento cobre
Responsável: função que mantém
Revisão: AAAA-MM-DD
Referências: fonte canônica e documentos relacionados

## Fluxo dos comandos
@control projeto dejotacode: consultar índice e estado-atual, localizar contexto operacional no Control, conferir evidências reais antes de propor ação.
@dev: consultar instruções do repositório e padrão da área antes de código/documentação.
@store e @studio: consultar escopo editorial e padrões relevantes, mantendo estados no Control.
Esses comandos são instruções de trabalho; este manual não cria uma automação de chat ou executa publicação.

## Mudanças e validação
Mover por responsabilidade, corrigir links relativos, referências explícitas e consumidores. Conferir documentos existentes antes de substituir.
python3 scripts/check-documentation.py verifica estrutura, cobertura dos índices e links locais Markdown; não valida conteúdo técnico, HTTP remoto ou todos os fragmentos.
Publicação/merge/push continuam exigindo instrução específica. Organização documental não executa migration, envio, deploy ou testes de produção.
