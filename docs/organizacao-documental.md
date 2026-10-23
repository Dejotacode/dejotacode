# Organização documental do DejotaCode

Status: vigente. Escopo: criação, atualização, localização e revisão de documentação. Responsável: @control. Revisão: 13/10/2026.

## Antes de criar um arquivo
1. Confirmar o projeto: regra do site fica aqui; ferramenta de máquina fica em Workspace/tools; estados de coordenação ficam no documento vigente de cada tarefa. O Control arquivado é somente histórico.
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
| Planejamento de produtos independentes do ecossistema | docs/projetos/ (não incorpora código, banco ou deploy desses produtos ao site) |
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

## Continuidade entre chats — regra vigente de 13/10/2026

Este é o contrato canônico dos comandos de trabalho e da passagem entre chat normal e Chat Work. A divisão abaixo registra a forma de trabalho informada pelo usuário. Os comandos @ são papéis de conversa; não são agentes permanentes, serviços nem automações de sincronização.

### Funções e fontes

| Comando | Responsabilidade | Fonte a consultar |
|---|---|---|
| @control | Conferir contexto, organizar tarefas, decisões, aprovações, bloqueios e próximos passos; reconciliar registros | docs/README.md, docs/estado-atual.md, documento vigente da tarefa |
| @radar | Triar descobertas, e-mails autorizados e oportunidades; organizar referências no Raindrop; verificar duplicação antes de encaminhar | Workspace/tools/dejotacode-radar/README.md e conteúdos existentes |
| @research | Aprofundar pesquisa, comparar fontes e verificar fatos; apoiar @radar, @store e @studio | Fontes originais, data da verificação e briefing da tarefa |
| @dev | Implementar e validar código, integração, SEO técnico e publicação explicitamente autorizada | AGENTS.md, Documento Mestre, arquitetura e runbook relevante |
| @studio | Selecionar/adaptar/criar imagens e preparar áudio/vídeo; entregar preview para revisão | Registro de mídia, acervo, checklist editorial e briefing; configuração histórica de vídeo exige revalidação |
| @metrics | Medir GSC/GA4, analytics e resultados editoriais/comerciais; distinguir QA de tráfego real | Workspace/tools/dejotacode-analytics/README.md e protocolos de medição em docs/operacao |
| @store | Conferir produtos, programas, links, transparência e condições comerciais | docs/operacao/monetizacao-parceiros.md e fichas existentes |
| @dejotacode | Solicitação editorial legada, sempre com projeto e tarefa explícitos; não substitui seleção de contexto | Documento Mestre e checklist editorial |
| @project dejotacode | Indicar o contexto de trabalho; não executa uma tarefa | Este manual e estado-atual |

@metrics não é sinônimo de Metricool: Metricool é uma ferramenta para redes e agendamento. @radar usa Raindrop como acervo de referências, não como prova de publicação. @studio não inicia o aplicativo Studio arquivado. Outros @ não são considerados configurados apenas por aparecerem em um texto; verificar definição e escopo.

### Divisão operacional

Chat normal: consulta autorizada de e-mail, descoberta, pesquisa, organização no Raindrop, comparação com conteúdos existentes e preparação do briefing. Deve separar pesquisa, experiência do usuário e comprovação documental.

Chat Work: ler o briefing e as regras vigentes; implementar localmente, consultar o acervo antes de imagem nova, produzir mídia quando os recursos/licenças estiverem confirmados, validar, entregar preview, registrar revisão e executar publicação/agendamento somente no escopo autorizado.

As funções podem colaborar nos dois modos conforme ferramentas realmente disponíveis. O modo escolhido não comprova acesso a arquivos, conta, API, licença ou sessão autenticada.

### Inicialização obrigatória

1. Confirmar projeto, tarefa e modo; ler AGENTS.md quando houver acesso ao repositório, docs/README.md, docs/estado-atual.md e este manual.
2. Localizar o documento da tarefa e os padrões relevantes. Confirmar arquivos atuais, branch, diff e processos antes de editar. Preview principal 4321; não iniciar 4322.
3. Informar o que foi lido, estado comprovado, trabalho já concluído, pendências e próximo passo. Não reabrir tarefa encerrada por menção histórica.
4. Consultar configurações conhecidas antes de pedir novo login ou recriar integração. Registrar separadamente: arquivo presente, autenticação atual, licença, quota e funcionamento. Nunca imprimir secrets.
5. Sem acesso à fonte canônica, declarar exatamente a limitação e usar o pacote de passagem fornecido como contexto com data, sem afirmar sincronização completa.
6. Preservar trabalho simultâneo de outros chats. Não presumir propriedade de todo o diff nem publicar alterações alheias.

Instruções do projeto ChatGPT podem ser compartilhadas por chats do mesmo projeto, mas arquivos locais precisam estar acessíveis ou fornecidos como fontes. Este documento não instala instruções nas configurações do ChatGPT e não garante leitura automática em um chat externo. Memória e buscas de conversa ajudam na recuperação; não substituem a consulta ao registro atual.

### Pacote de passagem

Atualizar o documento existente da tarefa; não criar uma segunda fila concorrente. Quando o chat normal não puder escrever no repositório, entregar o pacote completo para o Chat Work registrar.

Campos: ID estável da tarefa; projeto; origem/destino e papel responsável; data/fuso America/Sao_Paulo; objetivo; resumo; fontes/links e data de verificação; conteúdo existente; decisões e experiência declarada pelo usuário; concluído; pendente/bloqueios; arquivos/assets e versões; aprovações com escopo; verificações realizadas; próxima ação.

Estados por item: pesquisado → preparado → em revisão → aprovado para produção → integrado/validado → autorizado para publicação → publicado/agendado → homologado/concluído. Bloqueios são registrados em qualquer etapa. Texto, imagem, voz, vídeo, QA e publicação têm estados próprios.

Aprovação de pauta ou imagem não equivale a autorização de publicação. Aprovações já dadas permanecem válidas para seu escopo; não pedir novamente sem mudança material. Se a versão aprovada mudar, registrar o que requer nova revisão. Não inventar data de agendamento, prova de pagamento, licença ou execução.


### Modelo de registro e passagem de tarefa

Usar este modelo no documento existente da tarefa, adaptando suas seções sem substituir decisões ou evidências anteriores. Não criar arquivo por chat nem copiar credenciais.

| Campo | Preenchimento |
|---|---|
| ID e projeto | Identificador estável e DejotaCode |
| Objetivo e responsável | Resultado esperado e função @ |
| Atualização | Data/hora em America/Sao_Paulo |
| Fonte vigente | Caminho do registro e fontes realmente consultadas |
| Versão | Arquivos/assets e commit ou identificação da versão local |
| Decisões | Escolhas confirmadas e experiência declarada pelo usuário |
| Estados | Texto, imagem, áudio, vídeo, QA e publicação separadamente; não aplicável quando couber |
| Aprovações | Versão, escopo e referência da autorização; não inferir aprovação |
| Evidências | Verificações realizadas e resultados; separar registro histórico de consulta atual |
| Bloqueios | O que falta e o que depende do usuário ou de acesso externo |
| Próxima ação | Passo concreto, responsável e condições necessárias |
| Origem/destino | Chat normal ou Work; pacote de passagem quando necessário |

### Instruções compartilhadas e guia portátil

Instruções compartilhadas do ChatGPT devem apontar para este contrato de continuidade e para as fontes vigentes. Sua presença no repositório não comprova aplicação na interface. Registrar instalação somente após evidência ou confirmação do titular.

Quando uma mudança relevante afetar regras, fontes, aprovações ou próxima ação, atualizar primeiro o registro canônico. Atualizar o guia portátil de passagem quando houver uma cópia compartilhada identificada e acesso para editá-la, mantendo data e fontes; caso contrário, registrar que o guia precisa ser atualizado. O guia resume e aponta para as fontes; não cria outra fila ou substitui o repositório.

### Conferência de retomada e acesso

Em cada novo chat, informar fontes efetivamente lidas e limitações. Para integrações necessárias à tarefa, distinguir configuração presente, autenticação atual, licença/quota e operação realmente testada. Consultar apenas o necessário; não recriar login por ausência de memória nem gerar mídia para testar acesso.

Teste nos dois modos, chat normal e Work: reconhecer as funções @, arquivos atuais, aplicativos arquivados, tarefas encerradas e pendências vigentes; preservar aprovações e declarar falta de acesso quando houver. Registrar resultado por modo. A leitura bem-sucedida neste chat não garante acesso em outro.

### Encerramento e retomada

Ao terminar: atualizar a fonte da tarefa, apontar evidências e pendências, atualizar estado-atual quando houver mudança relevante e fornecer o comando de retomada com ID/caminho. Aplicar a regra de limpeza apenas a cópias comprovadamente encerradas.

Comando curto: `@control projeto dejotacode — sincronizar antes de executar. Ler AGENTS.md, docs/README.md, docs/estado-atual.md, docs/organizacao-documental.md e o registro da tarefa. Informar fontes lidas, estado vigente e próximo passo. Não usar o Control/Studio arquivado como estado ativo.`

Este fluxo não publica, reinicia aplicativos arquivados, cria sincronização automática ou altera infraestrutura.

## Mudanças e validação
Mover por responsabilidade, corrigir links relativos, referências explícitas e consumidores. Conferir documentos existentes antes de substituir.
python3 scripts/check-documentation.py verifica estrutura, cobertura dos índices e links locais Markdown; não valida conteúdo técnico, HTTP remoto ou todos os fragmentos.
Publicação/merge/push continuam exigindo instrução específica. Organização documental não executa migration, envio, deploy ou testes de produção.
