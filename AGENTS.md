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
Desenvolvimento com outras frentes: /home/dejota/Workspace/dejotacode-fullstack/dejotacode. Operação diária do Studio: /home/dejota/Workspace/dejotacode-fullstack/dejotacode-studio-operacao, worktree editorial limpa, preview principal 4321. Não iniciar 4322. Preservar a árvore de desenvolvimento; não fazer reset/pull em workspace misto. A separação operacional do Studio foi solicitada pelo usuário em 28/10/2026.
Validar check/build/QA, 320/390/768/1440px, temas claro/escuro, teclado, estados e variações reais dos modelos.
Não publicar, push ou deploy sem instrução explícita do usuário. Autorizações locais incluem edições reversíveis e commits locais.

## Organização documental vigente
Antes de criar ou mover documentação, consultar docs/README.md e docs/organizacao-documental.md; atualizar fonte existente antes de duplicar, classificar finalidade/status e seguir destino do manual. Validar com python3 scripts/check-documentation.py.
