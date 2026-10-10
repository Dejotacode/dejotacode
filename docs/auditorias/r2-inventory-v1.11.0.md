# Inventário R2 — v1.11.0

## Objetivo

Registrar um snapshot operacional reproduzível da mídia editorial sem alterar ou baixar objetos do bucket de produção.

## Método

A API dedicada expõe o comando:

```bash
npm run inventory:r2:production
```

O script consulta apenas `object_key`, `content_type`, `size_bytes` e `created_at` na tabela `media` do D1 e valida a URL pública de cada registro com requisição `HEAD`.

Nenhum `PUT`, `DELETE`, restore ou download de conteúdo é executado.

## Snapshot de 16/09/2026

- objetos registrados no D1: 23;
- bytes registrados: 27.598.894 (~26,3 MiB);
- `images/`: 22 objetos;
- `posts/`: 1 objeto;
- `downloads/`: 0 objetos;
- tipo registrado: 23 × `image/png`;
- URLs públicas verificadas: 23;
- respostas HTTP 200: 23;
- falhas: 0.

## Limitação conhecida

O Wrangler atual não oferece listagem completa do bucket por `r2 object list`. Portanto este inventário parte dos metadados D1 e não consegue detectar objetos órfãos existentes no R2 sem registro correspondente em `media`.

Essa limitação deve ser preservada nos relatórios para não transformar o snapshot em uma afirmação de completude do bucket.

## Estratégia de proteção

Até existir destino externo seguro para espelhamento:

- não executar exclusão em massa no R2;
- gerar o inventário antes de qualquer manutenção de mídia;
- preservar os assets fonte quando existirem;
- para uma exclusão individual, confirmar primeiro o `object_key` e o uso editorial;
- antes de operação destrutiva em lote, criar cópia dos objetos afetados fora do bucket e validar a restauração em ambiente não produtivo.

## Próximo nível

Um espelhamento automatizado só deve ser introduzido quando houver:

- destino de armazenamento definido;
- credenciais separadas e com menor privilégio possível;
- política de retenção;
- criptografia e controle de acesso adequados;
- teste documentado de restore.
