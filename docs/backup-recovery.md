# Backup e recuperação

## Objetivo

Definir o que precisa ser preservado e como gerar evidência de backup antes de mudanças de maior risco.

## Dados persistentes

### D1

O D1 de produção contém dados operacionais como leads, mensagens de contato, métricas agregadas e demais tabelas definidas pelas migrations da API.

Antes de migrations relevantes ou mudanças destrutivas, use o comando versionado no repositório `Dejotacode/dejotacode-api`:

```bash
npm run backup:d1:production -- --dry-run
npm run backup:d1:production
```

O `--dry-run` apenas mostra o destino/comando planejado. A execução real grava o SQL em `.backups/d1/`, calcula SHA-256 e cria um manifesto local com tamanho, hash e commit Git. O script não usa `--skip-confirmation` e não executa restore.

Backups D1 podem conter dados pessoais e operacionais. `.backups/` é ignorado pelo Git e esses arquivos não devem ser anexados a issues públicas, commits ou canais não controlados.

### R2

O bucket de produção armazena mídia e recursos. O projeto ainda não possui rotina automatizada de espelhamento do R2 documentada neste repositório.

Até essa automação existir, alterações em massa ou exclusões de objetos devem ser tratadas como operações de alto risco e exigir inventário prévio dos objetos afetados.

### Conteúdo editorial

O conteúdo versionado em Git é recuperável pelo histórico do repositório. Releases e tags devem apontar para commits exatos para facilitar reconstrução.

## Política inicial de retenção

Enquanto não houver armazenamento de backup dedicado e criptografado, aplicar uma política conservadora e manual:

- manter pelo menos os 3 exports D1 verificados mais recentes;
- sempre gerar e preservar um export antes de migration destrutiva, mudança de schema de risco ou operação de recuperação;
- não excluir automaticamente backups pelo script;
- revisar retenção manualmente apenas depois de existir outro backup verificado;
- se um backup sair da máquina controlada, usar armazenamento com acesso restrito e criptografia adequada.

O manifesto SHA-256 serve para verificar integridade do arquivo antes de qualquer ensaio de restauração.

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

- evoluir o export manual para agendamento apenas quando existir destino seguro e política de credenciais adequada;
- definir estratégia de cópia/espelhamento do R2;
- repetir periodicamente o teste de restauração em ambiente não produtivo;
- registrar RTO/RPO quando o volume e a criticidade justificarem.
