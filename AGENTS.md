## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)


## DejotaCode — regras vigentes
Antes de editar ou criar página, conteúdo, produto, imagem ou componente, ler docs/README.md, docs/padroes/frontend-master.md e a família relevante em docs/padroes/visual-system.md.
Ícones: docs/padroes/icon-system.md e src/data/categoryIcons.ts. Marca/mídia: docs/padroes/media-registry.md.
Imagens: antes de propor, gerar ou substituir qualquer capa, ler o conteúdo completo e consultar primeiro o acervo local em /home/dejota/Workspace/media-dejotacode/acervo/catalogo.html e catalogo.json. Manter mídia adequada; reutilizar/adaptar quando pertinente. Nova imagem somente quando nenhuma opção servir, com justificativa registrada. Não presumir um estilo obrigatório. Se o acervo estiver inacessível, registrar PENDENTE e não gerar automaticamente. Conferir origem/licença, versão preferida, símbolo oficial e recortes independentemente do build. Checklist obrigatório: docs/operacao/editorial-workflow.md.
Reutilizar tokens de src/styles/tokens.css, componentes layout/ui/content e variantes documentadas. Não escolher estilo pela tag isolada.
Registrar cada modelo e rota em docs/auditorias/frontend-review.md; documentar novas variantes antes de usá-las em várias páginas.
Preservar conteúdo, rotas, SEO, links comerciais, analytics e funcionalidades.
Trabalho atual: /home/dejota/Workspace/fullstack/dejotacode, preview 4321. Não iniciar 4322.
Validar check/build/QA, 320/390/768/1440px, temas claro/escuro, teclado, estados e variações reais dos modelos.
Não publicar, push ou deploy sem instrução explícita do usuário. Autorizações locais incluem edições reversíveis e commits locais.

## Organização documental vigente
Antes de criar ou mover documentação, consultar docs/README.md e docs/organizacao-documental.md; atualizar fonte existente antes de duplicar, classificar finalidade/status e seguir destino do manual. Validar com python3 scripts/check-documentation.py.

## Encerramento e limpeza de worktrees
Ao concluir tarefa, preview ou release, aplicar docs/operacao/operations.md, seção "Encerramento e limpeza de pastas temporárias — regra vigente", para /home/dejota/Workspace/fullstack/. Conferir uso por processos e outros chats, Git, ignorados e dados exclusivos; preservar/verificar o que não é regenerável e remover somente cópias encerradas. A regra foi autorizada pelo usuário em 13/10/2026; proceder quando os critérios forem comprovados, sem pedir novamente a mesma autorização. Preservar principal, APIs, integrações, trabalho ativo e backups necessários. Na dúvida, manter e registrar pendência. Não apagar branches/stashes, parar serviços ativos ou publicar por inferência. Registrar resultado e atualizar caminhos de retomada.

## Inicialização e continuidade entre chats
Antes de executar qualquer @, ler docs/README.md, docs/estado-atual.md e a seção "Continuidade entre chats" de docs/organizacao-documental.md. Confirmar projeto, tarefa e fontes atuais; localizar o registro da tarefa e preservar decisões/aprovações no escopo dado. @control, @radar, @research, @dev, @studio, @metrics e @store são funções de trabalho, não serviços nem agentes persistentes. Control/Studio arquivados são histórico. Consultar configurações conhecidas antes de pedir novo login; distinguir presença, autenticação, licença e funcionamento sem expor secrets. Se os documentos não estiverem acessíveis, declarar a limitação; não afirmar sincronização automática. Ao transferir trabalho entre chat normal e Chat Work, registrar briefing, fontes, versões, aprovações, bloqueios e próximo passo conforme o manual.

## Ambiente independente e Codespaces
No Codespace, a raiz é /workspaces/dejotacode; não presumir acesso aos caminhos da máquina. Conferir branch, SHA, diff e regras atualizadas. Porta 4321 privada; nunca usar 4322. Não copiar secrets, acervo privado ou alterações locais sem revisão. Ver procedimento em docs/operacao/operations.md.
