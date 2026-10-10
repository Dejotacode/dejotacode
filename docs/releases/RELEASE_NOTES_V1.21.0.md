# DejotaCode v1.21.0 — Snapshot Final de Pré-Exclusão

## Destaques

- adiciona etapa explícita de snapshot final na Zona de risco;
- exige dry-run válido antes de permitir gerar o snapshot;
- registra e exibe `snapshotId` e horário de captura para a mídia selecionada;
- associa o snapshot à mesma janela de validade do dry-run;
- só exibe o botão de exclusão após snapshot final válido;
- envia `snapshotId` no contrato de exclusão para validação da API;
- preserva o histórico/auditoria de mídia da v1.20.0.

## Segurança

- nenhuma exclusão automática ou em lote;
- nenhum DELETE real foi executado durante desenvolvimento ou homologação;
- novo dry-run invalida qualquer snapshot mantido na sessão da interface;
- snapshot expirado ou de outra janela de dry-run bloqueia a confirmação destrutiva;
- a API continua revalidando GitHub, D1 e R2 antes de qualquer exclusão real;
- snapshot é persistido de forma append-only na API v1.11.0.

## Validação

- Astro check: 0 erros / 0 warnings / 0 hints;
- build local: 46 páginas;
- CI do PR funcional: PASS;
- CI da main: PASS;
- deploy Cloudflare Pages: PASS;
- smoke test de produção: PASS;
- HTML de produção confirma a etapa “Gerar snapshot final” na Zona de risco;
- API v1.11.0 e migration 0009 já homologadas em produção.
