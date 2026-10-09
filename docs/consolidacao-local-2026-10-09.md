# Estado atual — consolidação local DejotaCode
Data: 09/10/2026
Pasta canônica para continuar: /home/dejota/Workspace/fullstack/dejotacode
Branch local: local/consolidacao-editorial-20261009
Preview: http://localhost:4321/
Publicação: NÃO autorizada; nenhum push/deploy faz parte desta etapa.

## Recuperação
As duas versões completas antes da integração foram registradas em branches de backup:
- backup/principal-20261009-0233 — ae92014579623fd6689fcce34bbc1deb96637cd1
- backup/editorial-20261009-0233 — 3e622b49b6494d513daeb8fcf80aacc5facf1ef2

Snapshots incluem alterações tracked e arquivos novos não ignorados. Arquivos ignorados de ambiente e dependências permaneceram nos respectivos diretórios; não fazem parte dos commits. A pasta editorial anterior permanece preservada para referência.

## Integração
Merge local das duas snapshots. Dez conflitos resolvidos por comparação:
- Layouts, componentes e ícones: versão editorial já auditada.
- editorialVisuals: versão principal, com o mesmo mapeamento; diferença era ordenação.
- Documentação do Blog: versão editorial contém todo o registro principal e as etapas adicionais.
- Catálogo Store, imagens/repaginação de Recursos e Wondershare: registros mais completos do principal, incluindo publicações anteriores.
- Configuração de extensões VS Code e documento exclusivo da Home preservados.

Verificação de hashes: todos os arquivos src/public da versão editorial foram preservados integralmente, exceto a ordenação equivalente em editorialVisuals. Nenhum arquivo src/public do principal foi removido. Conteúdos, imagens e links afiliados coincidentes foram preservados.

Documentos anteriores que citam 4322, a pasta release ou trabalho não commitado são históricos. Este arquivo define a pasta e o preview atuais.

## Próximas etapas
1. Refinar apresentação de Privacidade e 404.
2. Confirmar equipamentos/armazenamento do Setup.
3. Validar envio real dos formulários com a API configurada.
4. Atualizar capturas do Portfólio depois de estabilizar a interface.
5. Aplicar Documento Mestre de padronização em etapa própria após finalizar as estruturas.
6. Revisão final do usuário; publicação exige autorização específica.
