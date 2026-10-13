---
title: "Banco de dados em produção: cuidados antes de executar qualquer comando"
description: "Veja um checklist prático para reduzir erros ao consultar ou alterar um banco de produção."
publishedAt: 2026-10-13
updatedAt: 2026-10-13
category: programacao
type: tutorial
readingTime: 3
difficulty: intermediario
featured: false
draft: false
tags: [banco de dados, producao, sql, backups, seguranca]
---

Banco de produção guarda dados que usuários e sistemas realmente dependem. Um comando simples executado no lugar errado pode causar indisponibilidade ou perda de informação.

## 1. Confirme o ambiente

Antes de qualquer comando, verifique host, banco, projeto e credenciais. Terminais e ferramentas visuais devem deixar produção claramente distinguível de desenvolvimento.

## 2. Prefira leitura primeiro

Antes de `UPDATE` ou `DELETE`, execute uma consulta que mostre exatamente quais registros seriam afetados.

## 3. Restrinja o escopo

Evite comandos sem filtro quando a intenção é alterar poucos registros. Confira a quantidade esperada antes de confirmar.

## 4. Use transações quando aplicável

Uma transação permite revisar parte do efeito e fazer rollback antes do commit, dependendo do banco e da operação. Depois do commit, um rollback comum não desfaz a mudança. Nem toda operação ou efeito externo participa da transação; confirme o comportamento do banco antes de depender dela.

## 5. Tenha backup e restauração testados

Backup que nunca foi restaurado é apenas uma esperança. Documente onde está, como recuperar e qual perda de dados é aceitável.

## 6. Use permissões menores

Nem toda ferramenta precisa de acesso de escrita. Contas de leitura reduzem o impacto de um erro em tarefas de análise.

## 7. Registre mudanças

Mudanças manuais importantes devem deixar evidência: motivo, autor, horário, comando e resultado. Remova credenciais, dados pessoais e valores sensíveis dos registros compartilhados. Evite consultas pesadas ou transações longas em produção: mesmo leitura pode consumir recursos e afetar o serviço.

## Exemplo de conferência em ambiente de estudo

O exemplo abaixo usa PostgreSQL e uma tabela fictícia `tarefas`, com colunas `id` e `status`. Execute apenas em um banco de estudo preparado para isso. Ele mostra a conferência de uma alteração e termina em `ROLLBACK`, sem orientar a executar o mesmo comando em produção:

```sql
BEGIN;

SELECT id, status
FROM tarefas
WHERE id = 42
FOR UPDATE;

UPDATE tarefas
SET status = 'revisada'
WHERE id = 42 AND status = 'pendente'
RETURNING id, status;

ROLLBACK;
```

O filtro de estado limita a atualização à condição esperada. `RETURNING` permite conferir as linhas efetivamente alteradas. Se nenhuma linha aparecer, não remova o filtro por impulso: confira o identificador e o estado existente. O bloqueio usado no exemplo também pode fazer outras operações esperarem; mantenha a transação curta.

Uma consulta de leitura feita antes da alteração não congela o banco. Outra sessão pode mudar os dados entre as etapas. Locks, isolamento e condições da atualização precisam ser escolhidos para o caso concreto; esse exemplo não resolve todos os cenários de concorrência.

## O plano de recuperação vem antes do comando

Registre a mudança esperada, a quantidade de linhas e como confirmar o resultado. Defina quem pode interromper a operação e o que fazer se houver divergência. Antes do commit, uma transação aplicável pode ser revertida; depois, pode ser necessária uma mudança compensatória ou restauração planejada.

Restaurar um backup pode afetar dados válidos gravados desde sua criação. Confira o ponto de recuperação, o tempo de recuperação e o escopo antes de usar restauração como resposta automática. Registre o resultado final sem copiar dados sensíveis para logs compartilhados.

Para aprender políticas de acesso em um backend integrado, veja [Supabase para iniciantes](/blog/supabase-para-iniciantes/).

## Checklist rápido

- ambiente confirmado;
- consulta de leitura revisada;
- quantidade de registros conhecida;
- backup/restauração disponíveis;
- rollback entendido;
- permissão adequada;
- mudança registrada.


## Referências desta revisão

Documentação consultada em 13/10/2026; recursos e condições podem mudar.

- [PostgreSQL: transações e rollback](https://www.postgresql.org/docs/current/tutorial-transactions.html)
- [PostgreSQL: SELECT e bloqueio de linhas](https://www.postgresql.org/docs/current/sql-select.html)
