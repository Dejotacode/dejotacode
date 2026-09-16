# Backup e recuperação

## Objetivo

Definir o que precisa ser preservado e como gerar evidência de backup antes de mudanças de maior risco.

## Dados persistentes

### D1

O D1 de produção contém dados operacionais como leads, mensagens de contato, métricas agregadas e demais tabelas definidas pelas migrations da API.

Antes de migrations relevantes ou mudanças destrutivas, gerar export SQL remoto a partir do repositório da API:

```bash
npx wrangler d1 export DB \
  --env production \
  --remote \
  --output <arquivo-backup.sql>
```

Não use `--skip-confirmation` por padrão em operações manuais de produção.

### R2

O bucket de produção armazena mídia e recursos. O projeto ainda não possui rotina automatizada de espelhamento do R2 documentada neste repositório.

Até essa automação existir, alterações em massa ou exclusões de objetos devem ser tratadas como operações de alto risco e exigir inventário prévio dos objetos afetados.

### Conteúdo editorial

O conteúdo versionado em Git é recuperável pelo histórico do repositório. Releases e tags devem apontar para commits exatos para facilitar reconstrução.

## Recuperação

### Frontend

Reconstruir e redeployar um commit/tag previamente homologado. Não depende de restauração de banco.

### D1

Restauração é uma operação de produção potencialmente destrutiva. Não deve ser automatizada sem:

1. identificar o incidente e o ponto de recuperação;
2. preservar um export do estado atual;
3. validar o arquivo de backup;
4. definir janela de manutenção quando necessário;
5. executar restauração somente com aprovação explícita.

### R2

Recuperação depende da existência de cópia dos objetos fora do bucket afetado. Enquanto não houver espelhamento automatizado, o principal controle é evitar exclusões em massa e manter os assets fonte versionados ou arquivados quando possível.

## Ensaio validado

O ensaio de restauração da v1.9.0 foi concluído com sucesso em D1 local isolado. Evidências e limites estão em [`d1-restore-rehearsal-v1.9.0.md`](d1-restore-rehearsal-v1.9.0.md).

## Próximas melhorias

- automatizar export periódico do D1 para armazenamento seguro;
- definir política de retenção;
- definir estratégia de cópia/espelhamento do R2;
- repetir periodicamente o teste de restauração em ambiente não produtivo;
- registrar RTO/RPO quando o volume e a criticidade justificarem.
