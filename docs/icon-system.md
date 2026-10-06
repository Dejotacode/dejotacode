# DejotaCode — Sistema Oficial de Ícones v1

## Objetivo

Criar uma linguagem visual única para categorias, trilhas, recursos e áreas futuras do ecossistema DejotaCode.

Os ícones não substituem o nome da categoria. Eles funcionam como sinal visual complementar, principalmente em cards, navegação e blocos compactos.

## Princípios

1. **Uma categoria = um ícone oficial.**
2. **Mesmo ícone em todo o projeto.** Home, Trilhas, Recursos, Store e futuras páginas devem reutilizar a mesma definição.
3. **Estilo linear e geométrico.** Sem misturar emojis, pictogramas preenchidos e símbolos tipográficos aleatórios.
4. **Monocromático por padrão.** A cor vem dos tokens do tema; o SVG não carrega cor fixa.
5. **Leitura em tamanho pequeno.** O ícone precisa continuar legível em 16–24 px.
6. **Sem dependência de logotipos de marcas.** Windows, Android e iOS usam símbolos semânticos do ecossistema/dispositivo, não cópias dos logos oficiais.
7. **Sem decorar por decorar.** Ícone existe para orientar, não para preencher espaço.

## Padrão técnico

- viewport: `24 × 24`
- traço: `1.8`
- `fill="none"`
- `stroke="currentColor"`
- `stroke-linecap="round"`
- `stroke-linejoin="round"`
- tamanhos preferenciais: `18`, `20`, `24`, `28`, `32`
- acessibilidade: decorativo usa `aria-hidden="true"`; quando sozinho, precisa de `aria-label`

---

## Categorias atuais — oficiais

| Categoria | Slug | Ícone oficial | ID interno | Uso principal |
|---|---|---|---|---|
| Programação | `programacao` | Código | `code` | Desenvolvimento, HTML, CSS, JS, Git e programação |
| Linux & Segurança | `linux-seguranca` | Terminal | `terminal` | Linux, terminal, administração e segurança ligada ao sistema |
| Inteligência Artificial | `inteligencia-artificial` | Nós neurais | `ai-nodes` | IA generativa, prompts, automação inteligente e uso responsável |
| Tecnologia prática | `tecnologia-pratica` | Grade modular | `grid` | Ferramentas, soluções práticas e tecnologia do dia a dia |
| Renda digital | `renda-digital` | Carteira digital | `wallet` | Monetização responsável, afiliados, testes e renda online |

## Áreas atuais da DejotaStore — oficiais

| Categoria | Slug | Ícone oficial | ID interno |
|---|---|---|---|
| Linux | `linux` | Terminal | `terminal` |
| Setup | `setup` | Monitor/desktop | `monitor` |
| Programação | `programacao` | Código | `code` |
| Criadores | `criadores` | Microfone | `microphone` |
| Ferramentas digitais | `ferramentas-digitais` | Grade de apps | `apps` |

## Categorias futuras já reservadas

Estas categorias **não devem ser publicadas automaticamente**. Os IDs ficam reservados para manter consistência quando entrarem no projeto.

| Categoria futura | Slug recomendado | Ícone oficial | ID interno | Observação |
|---|---|---|---|---|
| Windows | `windows` | Janela em quatro painéis | `window` | Símbolo genérico de sistema/janelas, sem copiar marca |
| Android | `android` | Smartphone com indicador de plataforma | `smartphone-android` | Evitar usar o robô oficial como dependência visual |
| iPhone / iOS | `ios` | Smartphone premium | `smartphone-ios` | O texto diferencia iOS; o ícone continua neutro |
| Segurança digital | `seguranca-digital` | Escudo com check | `shield-check` | Para quando Segurança ganhar categoria independente de Linux |
| Criptoativos | `criptoativos` | Blocos conectados | `blockchain` | Genérico para blockchain/ativos digitais; não preso ao Bitcoin |
| Infraestrutura | `infraestrutura` | Servidor/nuvem | `cloud-server` | Hospedagem, DNS, CDN, deploy e cloud |
| Web & Sites | `web` | Janela de navegador | `browser` | Sites, CMS, front-end e publicação web |
| Mobile | `mobile` | Smartphone | `smartphone` | Categoria neutra para desenvolvimento/uso mobile |
| Automação | `automacao` | Fluxo conectado | `workflow` | Integrações, workflows e automações |
| Produtividade | `produtividade` | Checklist | `checklist` | Organização, ferramentas e processos |
| Notícias Tech | `noticias-tech` | Documento/notícia | `news` | Atualizações e notícias de tecnologia |
| Privacidade | `privacidade` | Olho protegido | `privacy` | Privacidade, rastreamento, identidade e dados |
| Redes & Internet | `redes-internet` | Nós de rede | `network` | Redes, internet, conectividade e protocolos |
| Hardware | `hardware` | Chip | `chip` | Componentes, upgrades e dispositivos |
| Dados | `dados` | Banco de dados | `database` | Bancos, análise de dados e organização de informação |

## Regras de relacionamento

- `Linux & Segurança` usa `terminal` enquanto a segurança estiver editorialmente acoplada a Linux.
- Quando `Segurança digital` existir como categoria própria, ela usa `shield-check`; Linux continua com `terminal`.
- `Tecnologia prática` usa `grid`; `Ferramentas digitais` usa `apps`. Parecem próximas, mas têm intenção diferente: editorial geral vs. catálogo/utilidade.
- `Programação` sempre usa `code`, inclusive quando aparecer dentro da Store.
- `Renda digital` usa `wallet`, evitando símbolos de dinheiro agressivos ou promessas de enriquecimento.
- `Criptoativos` usa `blockchain`, nunca moeda específica como padrão de categoria.

## Onde usar

### Home
Ícone pequeno antes/ao lado do nome da categoria. Não deve competir com títulos nem imagens.

### Trilhas
Usar o ícone oficial da área temática. Evitar símbolos ad hoc como `$_`, `</>`, `IA`, `[]` e `↗` quando já houver ícone oficial.

### Recursos
Ícone serve como fallback semântico e reforço de categoria; a imagem editorial continua protagonista.

### DejotaStore
A navegação por categorias deve usar os mesmos IDs do sistema oficial. Produto individual mantém imagem própria.

### Blog
O ícone pode aparecer em filtros, breadcrumbs, listas compactas e chips; não precisa ser repetido dentro de todo card se a imagem já comunica contexto.

## Governança

Para criar uma nova categoria:

1. verificar se já existe categoria semanticamente equivalente;
2. escolher ou reutilizar um `iconId` existente;
3. adicionar a categoria em `src/data/categoryIcons.ts`;
4. atualizar este documento;
5. usar `CategoryIcon.astro`, nunca SVG ou emoji solto;
6. validar light/dark, desktop/mobile e tamanho 18 px antes de publicar.

## Estado

**Status: OFICIAL — v1**

Este documento é a referência canônica do sistema de ícones do DejotaCode.

## Adoção no projeto — v1

O sistema oficial já está aplicado em:

- atalhos de assuntos da Home;
- cards de trilhas da Home;
- cards da página `/trilhas/`;
- hero/mídia das trilhas internas;
- navegação de categorias da DejotaStore;
- navegação de categorias da página Recursos.

Os símbolos textuais anteriores (`$_`, `</>`, `IA`, `[]`, setas ou glifos usados como ícone) não devem voltar como linguagem de categoria. Texto técnico pode continuar aparecendo dentro de conteúdo quando fizer parte da explicação, mas não como substituto do ícone oficial.
