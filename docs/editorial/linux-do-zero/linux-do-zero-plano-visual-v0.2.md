# Linux do Zero — Plano visual v0.2

Status: planejamento aprovado para produção
Edição: 2026
Referência visual principal: Ubuntu 26.04 LTS

## Objetivo

Definir todas as capturas de tela, diagramas e ativos visuais antes de produzir imagens, evitando retrabalho e garantindo que cada visual tenha função didática.

Princípio central: imagem só entra quando ajuda o leitor a reconhecer uma tela, entender uma decisão ou reduzir risco.

## Regras visuais

- Capturas próprias, atuais e em português quando a interface oferecer tradução estável.
- Ubuntu 26.04 LTS será a referência visual principal.
- Não mostrar dados pessoais, nomes reais, e-mails, IPs públicos, chaves, tokens ou históricos privados.
- Usar resolução e escala consistentes em toda a obra.
- Evitar excesso de setas, círculos e caixas; destacar apenas o ponto necessário.
- Telas de alto risco recebem anotação visual mais forte.
- Comandos simples devem aparecer como blocos tipográficos; screenshot de terminal só quando a saída visual for parte da explicação.
- Cada imagem precisa de legenda curta e texto alternativo planejado.

## Padrão de arquivo

Formato de captura: PNG.
Nome: `cXX-NN-descricao-curta.png`.
Exemplo: `c04-03-selecao-disco.png`.
## Capítulo 3 — Preparação, backup e teste

Prioridade visual: alta.

| ID | Visual | Objetivo didático | Anotação |
|---|---|---|---|
| C3-01 | Página oficial de download do Ubuntu | Mostrar onde começa um download confiável | Destacar domínio e botão de download |
| C3-02 | Arquivo ISO salvo no computador | Diferenciar baixar de gravar | Sem anotação pesada |
| C3-03 | Checksum oficial + resultado local | Mostrar a comparação de integridade | Destacar valores correspondentes |
| C3-04 | Rufus no Windows com ISO selecionada | Mostrar origem, dispositivo e ação de gravar | Destacar dispositivo USB e aviso de apagamento |
| C3-05 | Disks no Ubuntu com USB selecionado | Alternativa nativa para quem já usa Linux | Destacar dispositivo correto |
| C3-06 | Menu de boot genérico/foto controlada | Mostrar que o USB precisa ser escolhido no boot | Sem citar tecla universal |
| C3-07 | Tela Try or Install Ubuntu | Mostrar a diferença entre testar e instalar | Destacar `Try Ubuntu` |
| C3-08 | Desktop da sessão live | Mostrar que o sistema pode ser explorado antes da instalação | Legenda sobre sessão temporária |
| C3-09 | Checklist visual de hardware | Reforçar Wi-Fi, áudio, teclado, tela, webcam e Bluetooth | Ícones simples, não screenshot |

### Observações do capítulo 3

Rufus só aparece como caminho principal para Windows; no Ubuntu, usar Disks conforme documentação oficial. Não criar screenshot de terminal apenas para `sha256sum` se o bloco de código diagramado for mais claro. O menu de boot varia por fabricante, então uma única tela não deve ser apresentada como universal.

## Capítulo 4 — Instalação passo a passo

Prioridade visual: crítica.

As imagens deste capítulo devem acompanhar exatamente as decisões que podem alterar o disco. A captura não deve incentivar o leitor a avançar automaticamente.| ID | Visual | Objetivo didático | Anotação |
|---|---|---|---|
| C4-01 | Idioma e acessibilidade | Orientar sem sobrecarregar | Sem anotação |
| C4-02 | Layout de teclado | Reforçar teste de símbolos | Destacar campo de teste |
| C4-03 | Conexão de rede | Mostrar que rede é útil, não obrigatória | Nota curta |
| C4-04 | Tipo de instalação interativa | Mostrar caminho padrão do livro | Destacar `Interactive installation` |
| C4-05 | Seleção de aplicativos | Mostrar escolha padrão | Destacar seleção recomendada do livro |
| C4-06 | Otimização e software de terceiros | Explicar drivers e codecs | Destacar opções sem transformar em regra universal |
| C4-07 | Disk setup | Mostrar as três famílias de decisão | Forte destaque no destino do disco |
| C4-08 | Erase disk and install Ubuntu | Tornar explícito o apagamento | Box visual `PARE AQUI SE...` |
| C4-09 | Install alongside | Mostrar que dual boot é outro cenário | Tarja `fora do fluxo principal` |
| C4-10 | Manual partitioning | Reconhecer a tela sem ensinar o procedimento | Tarja `avançado` |
| C4-11 | Encryption and file system | Mostrar onde a criptografia é escolhida | Nota sobre recuperação |
| C4-12 | Passphrase/recovery | Reforçar armazenamento seguro | Nunca capturar segredo real |
| C4-13 | Criação do usuário | Mostrar campos de conta | Usar dados fictícios |
| C4-14 | Resumo antes da instalação | Ensinar a revisar antes de confirmar | Destacar disco, método e criptografia |
| C4-15 | Instalação em andamento | Mostrar que é hora de esperar | Sem anotação |
| C4-16 | Installation complete | Mostrar reinício | Destacar instrução de remover USB |
| C4-17 | Login/primeiro boot | Confirmar conclusão do processo | Sem dados reais |

### Regra de segurança do capítulo 4

Qualquer screenshot de disco deve ser produzido em ambiente de teste, máquina virtual ou equipamento descartável, nunca no computador principal com dados pessoais. As imagens precisam mostrar claramente qual opção apaga dados e quais cenários não fazem parte do caminho principal do livro.

## Capítulo 5 — Primeiros passos depois da instalação

Prioridade visual: alta.| ID | Visual | Objetivo didático | Anotação |
|---|---|---|---|
| C5-01 | Desktop Ubuntu recém-instalado | Apresentar a base sem customização | Identificar Dock, menu e área do sistema |
| C5-02 | Software Updater | Mostrar primeira atualização | Destacar ação principal |
| C5-03 | Configurações | Ensinar onde procurar ajustes | Destacar categorias, não posições rígidas |
| C5-04 | Files | Mostrar pasta pessoal e organização básica | Destacar Documents/Downloads sem dados reais |
| C5-05 | App Center | Mostrar instalação confiável de aplicativo | Destacar origem e botão Install |
| C5-06 | Aplicativo instalado | Completar ciclo instalar → abrir | Sem anotação pesada |
| C5-07 | Remoção pelo App Center | Mostrar que experimentar é reversível | Destacar Remove |
| C5-08 | Additional Drivers | Mostrar caminho seguro para drivers proprietários quando necessário | Destacar `proprietary, tested` quando aplicável |
| C5-09 | Configurações de som/rede/Bluetooth | Mostrar onde validar periféricos | Preferir composição de 2–3 recortes, não várias páginas |

### Observações do capítulo 5

Não produzir lista visual de “apps obrigatórios”. O objetivo é ensinar onde atualizar, configurar, instalar, remover e revisar drivers. App Center e Software Updater devem aparecer com interface limpa e sem conta pessoal conectada.

## Capítulos 1 e 2 — Diagramas conceituais

Prioridade visual: média.

- C1-01: diagrama simples `hardware → kernel Linux → sistema/aplicativos`, sem tentar representar toda a arquitetura real.
- C1-02: analogia visual `kernel + ferramentas + interface = distribuição`, com nota de que é simplificação didática.
- C2-01: quadro de critérios `hardware / estabilidade / documentação / manutenção`.
- C2-02: mapa neutro das quatro distribuições citadas, sem ranking, troféus ou indicação de vencedora.

## Capítulo 6 — Terminal

Prioridade visual: média.

- Preferir blocos de código diagramados a screenshots do terminal.
- C6-01: anatomia `comando [opções] [alvo]`.
- C6-02: agrupamento dos 20 comandos por função.
- C6-03: sequência segura `criar → confirmar → remover → confirmar` para `rm`.## Capítulo 7 — Permissões

Prioridade visual: média.

- C7-01: diagrama de `-rw-r--r--` separando tipo, dono, grupo e demais.
- C7-02: legenda `r / w / x` para arquivos, com nota de que diretórios têm comportamento próprio.
- C7-03: sequência `chmod u+x` → conferir com `ls -l` → `chmod u-x`.
- Não usar screenshots de arquivos reais do sistema.
- Não transformar `755` ou `777` em elemento visual principal.

## Capítulo 8 — Diagnóstico seguro

Prioridade visual: média-alta.

- C8-01: ficha rápida de diagnóstico preenchida com dados fictícios.
- C8-02: fluxo `observar → registrar → pesquisar → avaliar → alterar uma coisa → verificar`.
- C8-03: quadro `consulta x alteração` com exemplos seguros.
- C8-04: sinais de solução suspeita.
- C8-05: tabela de tentativas `mudança / resultado / reversão`.
- C8-06: exemplo de captura antes/depois com dados sensíveis borrados ou fictícios.

## Bônus

- B1-01: checklist pós-instalação em formato imprimível A4.
- B2-01: checklist de segurança em formato imprimível A4.
- B3-01: cheat sheet dos 20 comandos em uma página.
- B4-01: plano de 30 dias em calendário simples de quatro semanas.
- B5-01: pirâmide de fontes `documentação oficial → comunidade oficial → fontes explicadas`.

Os bônus devem funcionar também separados do ebook, sem depender de uma página anterior para serem compreendidos.## Especificação de captura

- Resolução-base sugerida: 1920×1080 ou superior, sem zoom artificial do sistema.
- Escala do desktop: manter o mesmo fator durante uma sessão de captura.
- Recortar apenas depois da captura original; preservar a imagem-fonte sem anotações.
- Manter duas versões quando houver anotação: `-raw.png` e `-annotated.png`.
- Não usar JPEG para interface ou texto.
- Setas e contornos devem ter espessura consistente e contraste suficiente em fundo claro e escuro.
- Não depender apenas de cor para indicar risco; usar também texto/ícone.
- Evitar mouse sobre o elemento principal se o cursor cobrir informação.

## Ordem de produção

1. Preparar ambiente visual limpo e dados fictícios.
2. Capturar Capítulo 3.
3. Capturar Capítulo 4 em ambiente descartável/VM.
4. Capturar Capítulo 5 após instalação limpa.
5. Produzir diagramas dos capítulos 1, 2, 6, 7 e 8.
6. Produzir páginas visuais dos bônus.
7. Revisar nitidez, privacidade, consistência e correspondência com o texto v0.2.
8. Só então inserir as imagens na diagramação do PDF.

## Inventário estimado

- Capítulo 1: 2 visuais.
- Capítulo 2: 2 visuais.
- Capítulo 3: 9 visuais.
- Capítulo 4: 17 visuais.
- Capítulo 5: 9 visuais.
- Capítulo 6: 3 visuais.
- Capítulo 7: 3 visuais.
- Capítulo 8: 6 visuais.
- Bônus: 5 visuais.

Total máximo planejado: **56 visuais**. O número final deve ser menor quando duas telas puderem ser combinadas sem prejudicar legibilidade.

## Critério de aprovação

Nenhuma imagem entra no produto apenas por decoração. Cada visual deve responder pelo menos uma pergunta: `o que estou vendo?`, `onde devo clicar?`, `qual decisão importa?`, `qual risco devo evitar?` ou `como verifico o resultado?`.