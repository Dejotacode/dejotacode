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

O bucket de produção armazena mídia e recursos. O inventário read-only da v1.11.0 é reproduzível pela API com `npm run inventory:r2:production` e está documentado em [`../auditorias/r2-inventory-v1.11.0.md`](../auditorias/r2-inventory-v1.11.0.md).

O inventário parte dos metadados D1 e valida URLs públicas com `HEAD`; ele não detecta objetos órfãos sem registro em `media`.

O projeto ainda não possui espelhamento externo automatizado do R2. Até existir destino seguro, alterações em massa ou exclusões de objetos devem ser tratadas como operações de alto risco e exigir inventário prévio e cópia dos objetos afetados fora do bucket.

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

O ensaio de restauração da v1.9.0 foi concluído com sucesso em D1 local isolado. Evidências e limites estão em [`../auditorias/d1-restore-rehearsal-v1.9.0.md`](../auditorias/d1-restore-rehearsal-v1.9.0.md).

## Próximas melhorias

- evoluir o export manual para agendamento apenas quando existir destino seguro e política de credenciais adequada;
- definir destino seguro e implementar cópia/espelhamento do R2;
- repetir periodicamente o teste de restauração em ambiente não produtivo;
- registrar RTO/RPO quando o volume e a criticidade justificarem.


## Acervo de imagens — backup local validado (10/10/2026)

Status: registro. Snapshot de Workspace/media-dejotacode, incluindo catálogo, 106 imagens arquivadas e intermediários das capas. Restauração temporária isolada conferiu todos os arquivos por SHA-256; 49 fontes da receita verificadas e uma reconstrução reproduziu o hash aprovado. [Evidência e lacunas](../auditorias/acervo-backup-validation-20261010.json). Originais e backups anteriores preservados, sem publicação ou cópia externa. Cópia na mesma máquina/sistema de arquivos não protege contra perda física do disco. Mestres gerados no ChatGPT não estão incluídos nesse snapshot.

Atualização após os lotes de destaques/programação: snapshot novo preserva as 113 imagens do catálogo e os novos intermediários, com restauração integral validada; backup anterior mantido. A evidência vinculada acima identifica o snapshot mais recente.

Após o lote de IA, snapshot atualizado com 117 imagens do catálogo e 167 arquivos totais; restauração integral sem divergências. Backups anteriores preservados.


Revisão das capas de IA em 10/10/2026: snapshot local atualizado, 179 arquivos restaurados e comparados por SHA-256, incluindo 121 imagens no acervo. Todos idênticos; 49 fontes/entregas históricas e reconstrução isolada conferidas. Evidência em ../auditorias/acervo-backup-validation-20261010.json. Cópia na mesma máquina não protege contra perda do disco; sem cópia externa.

Atualização da primeira capa humana Linux: 183 arquivos restaurados com hashes idênticos, 122 imagens no acervo. Evidência em ../auditorias/acervo-backup-validation-20261010.json. Preservados snapshots anteriores, sem cópia externa.

Lote Linux humano concluído localmente: snapshot de 201 arquivos restaurados idênticos por SHA-256, incluindo 128 imagens arquivadas. Receita histórica: 49 fontes/entregas e reconstrução isolada conferidas. Evidência em ../auditorias/acervo-backup-validation-20261010.json; sem cópia externa, sem publicação.

Lote segurança digital: snapshot de 212 arquivos restaurados idênticos por SHA-256, incluindo 130 imagens arquivadas. Receita histórica: 49 fontes/entregas e reconstrução isolada conferidas. Evidência em ../auditorias/acervo-backup-validation-20261010.json; sem cópia externa ou publicação. Capas Store NordPass/NordVPN preservadas em uso.

Primeiro lote renda digital: snapshot de 225 arquivos restaurados idênticos por SHA-256, incluindo 134 imagens arquivadas. Receita histórica: 49 fontes/entregas e reconstrução isolada conferidas. Evidência em ../auditorias/acervo-backup-validation-20261010.json; sem cópia externa ou publicação.

Segundo lote renda digital: snapshot de 237 arquivos restaurados idênticos por SHA-256, incluindo 138 imagens arquivadas. Receita histórica: 49 fontes/entregas e reconstrução isolada conferidas. Evidência em ../auditorias/acervo-backup-validation-20261010.json; sem cópia externa ou publicação.

Terceiro lote renda digital: snapshot de 243 arquivos restaurados idênticos por SHA-256, incluindo 140 imagens arquivadas. Receita histórica: 49 fontes/entregas e reconstrução isolada conferidas. Evidência em ../auditorias/acervo-backup-validation-20261010.json; sem cópia externa ou publicação.
