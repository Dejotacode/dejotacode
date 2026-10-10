# Auditoria de performance e peso de assets — v1.9.0

Data: 2026-09-16
Escopo: inspeção read-only do build local homologado e de respostas HTTP da produção.

## Guardrails

- nenhuma mudança em CTA, formulários, funil ou instrumentação;
- nenhuma alteração em D1, Worker, DNS, R2, secrets ou deploy;
- baseline D+7/D+14 da v1.7.0 preservado.

## Build estático

- `dist/`: ~2.6 MB no total;
- 40 documentos HTML;
- 7 arquivos JavaScript e 5 CSS em `_astro`;
- JS + CSS somados: 54.371 bytes sem compressão;
- imagens: 35 arquivos, 822.541 bytes no build;
- fontes: 15 arquivos WOFF2, com subsets por `unicode-range`.

A maior parte das imagens do build são Open Graph e não representa custo automático de navegação das páginas.

## JavaScript cliente

O JavaScript entregue é pequeno. Entre os bundles observados:

- adaptador de formulários: 2.615 B bruto;
- script de artigo: 1.948 B bruto;
- script de newsletter: 1.535 B bruto;
- analytics: 775 B bruto;
- BaseLayout: 720 B bruto.

Não foi identificado bundle pesado de framework cliente ou hidratação ampla.

## CSS

Os maiores CSS gerados ficaram entre ~6 KB e ~15 KB brutos. Na homepage, os três arquivos principais somam cerca de 33,5 KB brutos e aproximadamente 10,7 KB em gzip local.

## Fontes

As três famílias variáveis são Plus Jakarta Sans, Inter e JetBrains Mono. O CSS usa `font-display: swap` e `unicode-range`, portanto o navegador não precisa baixar todos os 15 subsets em uma visita comum.

O inventário completo das fontes pesa mais que JS/CSS e deve ser tratado como principal área de observação antes de qualquer otimização prematura.

## Produção

As páginas HTML auditadas são servidas com Brotli (`content-encoding: br`). Os HTMLs usam `cache-control: public, max-age=0, must-revalidate`, coerente com revalidação de documentos.

Assets com hash em `/_astro/` foram observados com `cache-control: public, max-age=14400, must-revalidate` (4 horas).

## Oportunidade futura

Como os assets `/_astro/` têm nomes content-hashed, uma política de cache mais longa/imutável pode reduzir revalidações em visitas recorrentes. Não foi aplicada agora porque é mudança de comportamento de entrega/CDN e não é necessária para preservar a estabilidade atual.

## Conclusão

A fotografia atual não mostra excesso relevante de JavaScript cliente. O build é majoritariamente HTML estático, CSS pequeno e mídia/OG. As prioridades futuras de performance são validar Core Web Vitals em navegador real, observar custo efetivo das fontes e revisar cache de assets hashed após o ciclo de baseline.
