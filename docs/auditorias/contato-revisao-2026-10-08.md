# Contato — revisão local

Revisão sem alterações de interface e sem envio de mensagens.

## Verificado
360, 390, 768 e 1440 px, nos temas claro e escuro: sem overflow horizontal. Rótulos associados, cinco campos obrigatórios com formulário vazio inválido, foco visível. Serviços seleciona orçamento; Parcerias seleciona parceria e três formatos preenchem mensagem; formato desconhecido não preenche. API configurada e botão habilitado no preview; entrega real não testada.

## Pontos visuais
Hero mede 419 px em desktop e 339–367 px em celular. Formulário inicia aproximadamente em 600 px no desktop padrão e 501 px no celular de 390 px. Há espaço grande entre abertura e painéis. Fundo atual difere da composição compacta recém-aprovada em Parcerias. Mapa embarcado ficou vazio nesta inspeção; verificar carregamento externo antes de decidir correção. No celular o formulário já aparece antes do atendimento.

## Proposta
Esboço com abertura compacta, painel de atendimento com ícones oficiais, formulário com título e instrução breve, nome/e-mail lado a lado no desktop, bordas e espaçamentos consistentes com Parcerias. Manter consentimento, validação e lógica de envio. Contato WhatsApp geral hoje usa mensagem específica de serviços: considerar texto neutro na melhoria.

Preview: http://localhost:4322/contato/
Próxima etapa: esboço visual para revisão do usuário. Sem publicação.

## Pesquisa de referências
- Origamid: https://www.origamid.com/contato/ — formulário direto, dados de contato e FAQ.
- Diolinux: https://diolinux.com.br/contato — direciona anúncios, cursos e dúvidas técnicas a destinos diferentes.
- Estudonauta: https://www.estudonauta.com/atendimento/ — FAQ e definição explícita do escopo administrativo.
- Smashing Magazine: https://www.smashingmagazine.com/contact/ — assunto classificado e orientação sobre a mensagem.
- Sayro Digital e Terminal Root: home acessível, sem página de contato equivalente localizada na navegação extraída.
- Curso em Vídeo: home consultada; sem contato equivalente localizado nessa navegação.
- g1: página institucional de contato não pôde ser aberta nesta pesquisa.

Síntese proposta, ainda sem implementação: abertura compacta; atendimento à esquerda/formulário à direita; assuntos rápidos ligados ao seletor existente, sem duplicar cards grandes; formulário simples; FAQ de três dúvidas reais abaixo. Para atendimento online, avaliar substituir iframe de mapa por localização textual e link externo. Preservar identidade e não importar promessas de suporte ou prazo de outras empresas.

## Implementação do esboço aprovada para execução local
Abertura compacta, painel de atendimento com ícones oficiais existentes, formulário com título/instrução, nome/e-mail em duas colunas no desktop, FAQ de três perguntas reais e aviso contextual. Removido iframe de mapa, preservado link externo e localização real. Mensagem do WhatsApp agora é neutra. Cabeçalho e rodapé oficiais preservados. Estilos restritos à contact-page; importação institucional removida desta página. Preservados IDs, validação, consentimento, antispam, analytics e form-adapter. Assunto e formato de Parcerias preservados.

Check sem erros, avisos ou hints; build 115 páginas; QA sem links quebrados e problemas de HTML. Oito combinações de viewport/tema sem overflow, FAQ abre e foco visível. Formulário vazio inválido; serviços e três formatos de parceria conferidos; zero requisições de envio. Entrega real ainda não testada. Capturas desktop claro/escuro e celular conferidas. Ajuste final: textarea de cinco linhas e bordas dos painéis alinhadas no desktop.

Pendente revisão visual do usuário. Sem push ou publicação.

A pedido do usuário, Serviços e Parcerias foram movidos do painel de atendimento para dois cards destacados imediatamente abaixo de “Sua mensagem merece contexto”. Cards empilham no celular. Build e QA passaram; posição, links e ausência de overflow conferidos em 390/1440 px.

Mini mapa de Serra–ES incluído a pedido do usuário: iframe Google Maps de 160px com carregamento lazy, título acessível e link externo preservado. Build e QA passaram; dimensões e overflow conferidos em 390/1440px. Carregamento do conteúdo externo depende do Google Maps.

## Aprovação visual final
Usuário aprovou Contato, incluindo cards de Serviços/Parcerias abaixo do aviso e mini mapa. Publicação conjunta pendente, sem autorização de deploy.
