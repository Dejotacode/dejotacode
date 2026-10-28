> Referência atual de frontend: [Documento Mestre](../padroes/frontend-master.md), [sistema visual](../padroes/visual-system.md), [registro de mídia](../padroes/media-registry.md). Revisão 09/10/2026.

# Fluxo editorial do DejotaCode

## Fonte de verdade

O conteúdo público continua canônico em `src/content/posts/*.md`. O Astro gera o site estático a partir desses arquivos. D1 não é fonte editorial pública.

## DejotaCode Studio — interface principal

Revisão: 28/10/2026. O Studio local em /admin/ é a entrada principal. A operação diária usa uma worktree editorial limpa, separada do desenvolvimento com outras frentes; consultar o caminho ativo em docs/estado-atual.md e no registro da tarefa. Conteúdo em /admin/conteudo/ cria e salva Markdown no projeto; salvar não publica. O endereço antigo /admin/editor/ redireciona para Conteúdo somente no desenvolvimento. O build público exclui todas as rotas /admin/.

Mídia e métricas mantêm as operações existentes dentro da navegação do Studio. Não existe mais um layout ou menu Admin separado. Upload, revisão, auditoria e operações de mídia continuam autenticados e preservam seus gates próprios.

## Criar, revisar e publicar

1. Criar ou abrir o artigo no Conteúdo do Studio.
2. Revisar metadados, texto, mídia e preview; salvar o arquivo local.
3. Isolar o pacote em uma área editorial alinhada com official/main.
4. Abrir Publicação e revisar o manifesto.
5. Para um Markdown elegível, preparar a publicação no Studio e revisar o arquivo completo.
6. Confirmar a criação do PR; a sessão e o CSRF do Worker continuam obrigatórios.
7. Abrir o diff no GitHub, consultar o CI e revisar o HEAD. Somente PR aberto, mergeável e CI aprovado permite integração.
8. Confirmar a revisão e digitar PUBLICAR para integrar e iniciar o deploy automático.

A preparação local verifica novamente branch, base, mudanças fora dos artigos, rascunho e dependências. Markdown completo, comentários YAML e campos adicionais são preservados. Se o arquivo mudar após a revisão, preparar novamente. Pacotes com mudanças em capa, código ou produto exigem fluxo isolado próprio. Falha de rede durante criação exige conferir o GitHub antes de repetir.

O Worker existente continua criando branch content/admin-* e PR para main. Nenhum token fica no frontend. A autorização do usuário em cada publicação é independente da criação/salvamento do artigo.

## Checklist obrigatório de conteúdo e mídia

Status: vigente. Revisão: 13/10/2026. Fonte visual canônica: [registro de mídia](../padroes/media-registry.md).

Antes de criar, substituir ou enviar mídia, inclusive pelo Admin:

- [ ] Ler o arquivo completo e comparar com conteúdos existentes; preservar texto correto e evitar duplicação.
- [ ] Consultar o catálogo do acervo indicado no registro de mídia; registrar opções e justificar manutenção, reuso, adaptação ou lacuna real para nova criação.
- [ ] Se o acervo não estiver disponível, registrar pendência e interromper a geração automática.
- [ ] Conferir origem/licença ou natureza ilustrativa, produto e contexto; não inventar experiência, teste ou resultados.
- [ ] Conferir versão preferida, símbolo oficial e exceções de fornecedor/captura; não empilhar assinaturas.
- [ ] Integrar pelo mecanismo editorial existente e revisar alt, links, metadados, CTA e transparência comercial.
- [ ] Conferir mídia resolvida e recortes em 320/390/768/1440 px, claro/escuro; registrar separadamente revisão visual e QA técnico.
- [ ] Executar check/build/QA pertinentes após integração; manter novos conteúdos em `draft: true` até revisão final e autorização explícita de publicação.
- [ ] Registrar por item texto, imagem, integração, QA e pendências. Aprovação antiga da imagem não aprova automaticamente o novo uso.

Este checklist rege também trabalho local em Markdown; upload, PR, merge e deploy não são autorização automática. Sem aprovação visual comprovada, registrar revisão pendente.

## Mídia R2

Imagens editoriais são armazenadas no R2 em `posts/<slug>/YYYY/MM/<uuid>.<ext>`. O D1 guarda metadados operacionais. O Markdown contém a URL pública da imagem, preservando Git/Markdown como registro do conteúdo publicado.

Tipos aceitos no Editor: JPG, PNG, WebP e AVIF; limite atual de 10 MB. Imagens exigem texto alternativo.

## Revisar e publicar

Antes do merge, revisar diff, conteúdo, mídia e CI. O Admin consulta estado do PR e CI automaticamente; `Mesclar e publicar` só é liberado para PR aberto, mergeável e com CI aprovado.

A API restringe a publicação a base `main`, branch `content/admin-*` e `expectedHeadSha` igual ao HEAD revisado. O SHA também é enviado ao merge do GitHub.

Após o merge, o push na `main` dispara o workflow de produção do frontend, que executa qualidade, deploy no Cloudflare Pages e smoke test. Tag e GitHub Release continuam separadas desse fluxo.

## Guardrails

- não publicar diretamente no D1;
- não expor token GitHub, Cloudflare ou secrets no frontend;
- não mesclar PR com CI pendente/falho ou HEAD diferente do revisado;
- preservar slug quando possível;
- usar `updatedAt` para mudanças materiais quando aplicável;
- mudanças de URL exigem avaliação explícita de redirecionamento e SEO;
- exclusões em massa no R2 continuam operação de alto risco.
