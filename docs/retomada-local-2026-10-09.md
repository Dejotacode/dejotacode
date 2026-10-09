# Retomada das melhorias locais — 09/10/2026

## Fonte de trabalho desta rodada

Pasta: `/home/dejota/Workspace/fullstack/dejotacode-blog-release`.
Branch: `release/blog-editorial-20261008`.
Preview: http://localhost:4322/.

Esta pasta contém a rodada local de refinamentos de artigos, trilhas, produto Linux do Zero, Serviços, Parcerias, Contato, Setup, Portfólio, Sobre, catálogo/categorias/fichas da Store e propostas da Home. Consultar os registros por página antes de editar; aprovações e pendências variam por etapa. Publicação conjunta ainda não autorizada.

## Incidente e recuperação

Neste chat foi iniciado um preview da pasta `/home/dejota/Workspace/fullstack/dejotacode` e aplicada ali uma Home editorial. Essa versão permanece naquela pasta para comparação; não foi copiada para esta rodada. A troca de porta, isoladamente, não determina qual checkout está sendo servido.

Após identificar a divergência, o servidor da outra pasta foi parado. O preview desta pasta foi iniciado em background na porta 4322. Diretório do processo confirmado por `/proc/<pid>/cwd`. Doze rotas principais responderam HTTP 200. Nenhuma alteração de página foi realizada na recuperação.

## Continuidade

A Home recuperada apresenta o título “Seu primeiro passo na tecnologia começa aqui.”. O usuário também aprovou uma referência editorial e pediu degradê como o da Store. Comparar essas direções antes de substituir a Home recuperada; preservar as demais páginas e os componentes compartilhados.

Comando de retomada: `@control dejotacode — continuar as melhorias locais em /home/dejota/Workspace/fullstack/dejotacode-blog-release, preview 4322. Ler docs/retomada-local-2026-10-09.md e conferir pasta/branch/processo antes de alterar.`

Para iniciar: `npm exec astro dev -- --port 4322 --background`, executado nesta pasta. Gerenciar com `npm exec astro dev status` e `npm exec astro dev stop`. Não iniciar outro checkout na mesma porta ou consolidar branches automaticamente.

## Home transferida por autorização do usuário

Após recuperar o preview, Dejota pediu trazer a Home editorial deste chat para esta pasta. Transferidos somente src/pages/index.astro e src/styles/home.css. Versão anterior preservada em /tmp/recovered-home-before-transfer-{index.astro,home.css}; demais arquivos src/public conferidos por hash e preservados. A direção ativa agora é a Home editorial compacta com hero degradê, trilhas com ícones oficiais e painéis secundários compactos. Sem publicação.
