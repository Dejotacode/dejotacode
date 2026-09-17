# Contribuindo com o DejotaCode

Obrigado pelo interesse em melhorar o DejotaCode.

## Fluxo

1. crie uma branch curta e descritiva a partir de `main`;
2. mantenha a mudança focada em um único objetivo;
3. execute as validações locais antes do push;
4. abra um Pull Request explicando impacto, testes e riscos;
5. aguarde CI aprovado antes do merge.

## Validação local

```bash
npm ci
npm run check
npm run build:production
npm run qa
```

Não versione secrets, `.env.*.local`, tokens ou credenciais. Mudanças visuais devem preservar os tokens e a identidade DejotaCode. Mudanças operacionais devem atualizar a documentação relevante em `docs/`.
