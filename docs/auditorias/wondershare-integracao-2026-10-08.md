# Wondershare — integração local e candidatos editoriais

Estado: aplicação local pronta para revisão; não publicada. Links contextuais não aplicados.

## Aplicação
Recursos recebeu Criação e Produtividade (Filmora, PDFelement, UniConverter) e Manutenção e Recuperação (Recoverit, Dr.Fone). Categorias existentes preservadas: ferramentas digitais e segurança. Os produtos também aparecem nas respectivas listagens existentes, por reutilização dos dados.

Cards reutilizam ResourceCard e ilustrações de categoria existentes. Sem banners novos, preços promocionais ou declaração de uso/teste. Aviso de afiliado visível por card; CTA com sponsored/nofollow/noopener/noreferrer. articleResourceIds não foi alterado.

## Candidatos — apenas mapeados
| Produto | Conteúdo existente | Ponto de entrada e condição |
| --- | --- | --- |
| Filmora | /blog/elevenlabs-para-iniciantes-criar-narracoes-com-ia/ | Passo 6: levar áudio para edição; alternativa opcional, sem declarar uso real. |
| Filmora | /blog/metricool-para-iniciantes-organizar-agendar-conteudo/ | Preparação do vídeo antes do agendamento. |
| Filmora | /blog/febspot-para-iniciantes-monetizacao-indicacao/ e /blog/bilibili-para-iniciantes-monetizacao-brasil/ | Preparação de vídeos próprios; exige pequeno complemento editorial sobre edição. |
| PDFelement | /blog/produto-digital-como-transformar-conhecimento-em-ebook/ | Organização e revisão do PDF; comparar com alternativas e evitar tratar compra como requisito. |
| UniConverter | /blog/elevenlabs-para-iniciantes-criar-narracoes-com-ia/ | Tratamento/conversão do áudio, somente se houver necessidade concreta de formato. |
| UniConverter | /blog/metricool-para-iniciantes-organizar-agendar-conteudo/, /blog/febspot-para-iniciantes-monetizacao-indicacao/ e /blog/bilibili-para-iniciantes-monetizacao-brasil/ | Compatibilidade, formato e compressão antes do upload; acrescentar contexto antes do link. |
| Recoverit | /blog/habitos-seguranca-digital-iniciantes/ | Relação indireta com backup; explicar recuperação como último recurso, sem substituir prevenção. |
| Recoverit | /blog/como-criar-pendrive-bootavel-linux/ | Candidato fraco: tópico de backup. Não recomendar como forma de desfazer formatação; conferir compatibilidade com o ambiente antes de inserir. |
| Dr.Fone | Nenhum artigo ou guia diretamente adequado encontrado | Não inserir por associação genérica. Aguardar conteúdo específico de backup/transferência móvel. |

Categorias candidatas já existentes: Renda Digital (Filmora, UniConverter e PDFelement), Inteligência Artificial (Filmora/UniConverter em fluxo audiovisual), Tecnologia Prática (PDF e dispositivos), Linux e Segurança (Recoverit apenas com contexto e compatibilidade). Sem inserção automática nas páginas de categoria.

Único guia Store existente examinado: Como escolher um pendrive para Linux. Não há encaixe direto suficiente para afiliados Wondershare; mantido sem alteração. Nenhum comparativo específico de PDF, edição, recuperação ou dispositivos móveis encontrado.

## Validação
- Astro check: 0 erros, avisos ou hints.
- Build preview: 115 páginas.
- QA HTML: 115 páginas, 402 imagens, nenhum problema; links internos aprovados.
- Cinco URLs curtas: HTTP 200 no destino Wondershare correto; parâmetros Awin awpid=3118001 preservados.
- Preview: http://localhost:4325/recursos/

## Arquivos alterados nesta etapa
- src/data/recommendedResources.ts
- src/pages/recursos/index.astro
- src/components/resources/ResourceCard.astro
- docs/auditorias/wondershare-integracao-2026-10-08.md

Alterações preexistentes no repositório foram preservadas. Publicação e inserções contextuais aguardam aprovação.

Revisão responsiva concluída: 8 combinações (320, 390, 768 e 1440 px; claro/escuro), temas corretos, sem overflow horizontal ou imagens quebradas. Cinco CTAs e avisos presentes em todas as combinações. Capturas de Criação e Produtividade inspecionadas em mobile claro e desktop escuro.

## Artes próprias — aplicação local
Cinco artes geradas com ferramenta integrada: Filmora (edição), PDFelement (documentos), UniConverter (conversão), Recoverit (recuperação) e Dr.Fone (dispositivos). Prompt comum: cena editorial tecnológica 4:3, grafite/ciano/branco, sem títulos ou textos promocionais, símbolo oficial de referência no canto superior esquerdo; assunto específico por ferramenta. Originais preservados. Arquivos: public/assets/resources/items/{filmora,pdfelement,uniconverter,recoverit,dr-fone}-resource-v1.webp. Todos decodificados (1448×1086), não vazios. Aplicados apenas localmente; aguardam revisão visual do usuário.

Após aplicação das artes: build aprovado; QA HTML/links aprovado; 8 combinações responsivas claro/escuro sem overflow ou imagens quebradas. Enquadramento dos cinco arquivos alinhado ao topo esquerdo para preservar o símbolo no formato atual dos cards. Nenhuma publicação realizada.

08/10/2026: usuário autorizou continuar após revisão das cinco artes. Estado READY; publicação não autorizada nesta etapa. Próximo comando: @dev publicar integração Wondershare na página Recursos. Links contextuais seguem apenas mapeados.


## Wondershare publicada — 08/10/2026
PR #262: https://github.com/Dejotacode/dejotacode/pull/262. Produção: 3dd6089b930fbbe0847a94af5a65675a4fee058d. CI/deploy/smoke: https://github.com/Dejotacode/dejotacode/actions/runs/37750895096 concluído com sucesso. Recursos HTTP 200; cinco links Awin e avisos visíveis, sponsored/nofollow; cinco imagens públicas idênticas aos arquivos aprovados. Links contextuais permanecem apenas mapeados.
