# Etapa 6 — Biblioteca de mídias R2

O CMS aceita JPG, PNG, WebP, AVIF, PDF e ZIP de até 10 MB. Imagens exigem texto alternativo. Os objetos são gravados no R2 com chave imutável organizada por tipo, ano e mês; o D1 guarda apenas metadados pesquisáveis.

Se a gravação dos metadados falhar, o objeto recém-enviado é removido do R2. A entrega pública recebe cache imutável de um ano porque cada atualização gera uma nova chave.
