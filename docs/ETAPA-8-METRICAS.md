# Etapa 8 — Métricas e conversão

Visualizações, cliques em botões, inscrições e contatos são somados por dia, rota e campanha. O sistema não cria identificador de visitante e não persiste IP, agente do navegador ou fingerprint.

O endpoint público `/api/stats` alimenta os números da Home. O painel `/admin/metricas` apresenta totais dos últimos 30 dias e as páginas mais lidas. O rate limiter de métricas aceita até 60 eventos por minuto por origem de rede e seus contadores ficam na infraestrutura nativa da Cloudflare.
