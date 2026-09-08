# Etapa 2 — Home completa

## Entrega

- Cabeçalho fixo e menu móvel acessível sem biblioteca JavaScript.
- Hero e painel visual alinhados à identidade DejotaCode.
- Categorias, tutoriais em destaque, jornada em quatro passos e três blocos de conversão.
- Artigos recentes, chamada “Comece Aqui” e rodapé responsivo.
- Newsletter e material gratuito ligados ao endpoint `POST /api/leads`.
- Feedback de envio acessível e preservação da página quando a API estiver indisponível.

## Segurança e privacidade

O endpoint valida o e-mail no Worker, normaliza o endereço e registra consentimento e data no D1. Nenhuma credencial é enviada ao site estático.
