# Etapa 11 — Preparação de produção na Cloudflare

Nenhum recurso foi criado e nenhum deploy foi executado nesta etapa. A preparação impede publicação enquanto o ID real do D1 estiver ausente.

## 1. Entrar na Cloudflare

Na raiz do projeto, execute `npx wrangler login`. Uma página da Cloudflare será aberta para autorizar somente sua conta.

## 2. Criar os recursos

Execute `npx wrangler d1 create dejotacode-production` e copie o `database_id` retornado para `api/wrangler.jsonc`, substituindo `PREENCHER_ID_PRODUCAO`.

Execute `npx wrangler r2 bucket create dejotacode-media`. O R2 pode solicitar a ativação do plano, mesmo quando o uso fica dentro da franquia gratuita.

## 3. Criar o segredo do primeiro administrador

Gere uma frase aleatória longa em um gerenciador de senhas. Execute `npx wrangler versions secret put CMS_BOOTSTRAP_TOKEN --config api/wrangler.jsonc --env production` e cole o valor quando solicitado. Esse formato prepara uma nova versão sem colocá-la no ar antes da hora. Nunca coloque esse valor em arquivo, GitHub ou mensagem.

## 4. Conferir antes de publicar

Execute `npm run preflight:production`. O comando deve terminar com “Pré-deploy aprovado”. Depois execute `npm run typecheck` e `npm run test:quality`.

## 5. Publicar manualmente

Execute `npm run deploy:production`. A sequência aplica as migrações do D1, publica a API, gera o Astro usando a API e publica o site estático.

## 6. Ativar o deploy automático

No repositório GitHub, crie os segredos `CLOUDFLARE_API_TOKEN` e `CLOUDFLARE_ACCOUNT_ID`. O workflow `.github/workflows/deploy-production.yml` executa a mesma ordem a cada push na branch `main` e também pode ser iniciado manualmente.

## 7. Primeira conta editorial

Após o primeiro deploy, use o endpoint de bootstrap uma única vez para criar o administrador. A API rejeita novas inicializações quando já existe qualquer usuário. Em seguida, substitua o segredo por outro valor aleatório ou remova a necessidade operacional dele.

## Checklist final

- O domínio `dejotacode.com.br` está ativo na mesma conta Cloudflare.
- O subdomínio `api.dejotacode.com.br` está livre para o Worker da API.
- O ID do D1 foi substituído.
- O bucket `dejotacode-media` existe.
- O segredo nunca foi salvo em arquivo.
- As políticas de privacidade contêm os dados reais do responsável.
- O conteúdo demonstrativo foi substituído ou aprovado para o lançamento.
