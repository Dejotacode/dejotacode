# Trilhas — repaginação local, 2026-10-08

Status: implementação local para revisão. Sem push ou publicação.

## Escopo
- Listagem com abertura compacta, três orientações com ícones oficiais, cinco cards sem esticar o último, etapas e minutos estimados, convite discreto ao Blog.
- Template individual com capa oficial proporcional, objetivo compacto, progresso junto às etapas, leitura e conclusão separadas.
- Começar/continuar aponta para a próxima etapa essencial pendente; ao concluir, permite rever a sequência.
- Mantidos os dados, 27 etapas, cinco trilhas, rotas, schema, armazenamento e eventos de analytics.
- Mantida distinção entre etapas essenciais e opcionais. Progresso total considera as essenciais, conforme regra anterior.
- E-book Linux do Zero com capa real, produto próprio, preço e CTA comercial preservados.
- Busca mantém os estilos anteriores dos cards por escopo; minutos detalhados são opt-in na listagem Trilhas.
- Estilos usam tokens compartilhados para temas claro e escuro, foco visível e redução de movimento.
- Storage indisponível não interrompe interação da visita.

## Validação
- npm run check: 77 arquivos, zero erros, avisos ou hints.
- npm run build: 115 páginas.
- npm run qa: 6246 referências internas, zero links quebrados; 481 imagens; zero páginas com problemas de HTML.
- Cinco páginas internas: 27 etapas, CTA principal único, IDs únicos.
- git diff --check passou.
- Preview listagem e Linux: HTTP 200.

## Revisão pendente
Inspeção visual no navegador nos temas claro/escuro e em 360, 390, 768 e 1440 px; testar conclusão, recarga, reset e continuar com armazenamento real; verificar eventos com analytics ativo.
Nenhuma inspeção visual ou teste de interação em navegador foi afirmado nesta etapa.

## Preview
http://localhost:4322/trilhas/
http://localhost:4322/trilhas/linux-do-zero/


## Conferência do preview — concluída
- Chromium headless local: 32 combinações de rota, tema e largura, em 360, 390, 768 e 1440 px. Listagem, Linux, Renda Online e busca: sem overflow horizontal, imagens carregadas.
- Linux: marcar/desmarcar, próxima etapa, persistência após recarga, 100% nas essenciais sem exigir opcional, rever, reset e armazenamento bloqueado passaram.
- Foco visível verificado em modalidade de teclado no botão principal.
- Capturas desktop da listagem e Linux inspecionadas nos temas claro/escuro.
- Não constitui auditoria completa de acessibilidade ou validação em Firefox. Entrega de eventos no serviço de analytics não foi verificada.
- Detalhe visual identificado: a capa atual de Programação contém texto incorporado que fica recortado no card. Recomendada futura capa oficial sem texto incorporado; asset preservado nesta revisão.
- Resultado bruto temporário: /tmp/trails-review-results.json no dispositivo de desenvolvimento.

## Destaque do e-book aprovado
Capa real ampliada, título Aprofunde seus estudos, 88 páginas em destaque, preço R$ 19,90 separado e botão Conhecer o e-book. Borda e fundo sutis com tokens oficiais. Aplicado somente na trilha Linux. Check sem erros, build 115 páginas, QA sem problemas; oito combinações tema/largura sem overflow. Sem publicação.

Correção solicitada: card do e-book fora da seção e borda Seu caminho de aprendizagem, como bloco independente abaixo, preservando destaque e CTA.
