# DejotaCode v1.18.0 — Exclusão Controlada de Mídia

Esta release adiciona o fluxo final de exclusão controlada no Admin Editorial, mantendo múltiplas barreiras antes de qualquer remoção.

## Destaques

- dry-run obrigatório antes da exclusão;
- revalidação de referências no GitHub `main`, D1 e R2;
- token temporário de dry-run, mantido apenas em memória no navegador;
- botão destrutivo só aparece após dry-run aprovado e ainda válido;
- confirmação em duas etapas: `objectKey` exato + palavra `EXCLUIR`;
- confirmação final adicional no navegador;
- se qualquer referência reaparecer entre dry-run e DELETE, a API bloqueia a remoção;
- fluxo exclusivo para mídia previamente `candidate + approved`;
- nenhuma exclusão automática ou em lote.

## Validação em produção

- mídia ID 2 validada via dry-run;
- dry-run persistido no D1;
- objeto permaneceu intacto no R2 após o teste;
- smoke de produção 10/10 PASS;
- nenhuma exclusão foi executada durante a homologação.
