export type ContentSection = { id: string; title: string; paragraphs: string[]; steps?: string[]; code?: string };
export type Post = {
  slug: string; type: 'article' | 'tutorial'; title: string; excerpt: string; category: string;
  categorySlug: string; author: string; publishedAt: string; readingTime: number; featured?: boolean;
  sections: ContentSection[];
};

const demoPosts: Post[] = [
  { slug:'publicar-site-cloudflare', type:'tutorial', title:'Como publicar seu primeiro site gratuitamente', excerpt:'Do projeto local ao endereço público usando GitHub e Cloudflare Workers.', category:'Cloudflare', categorySlug:'cloudflare', author:'Dejota', publishedAt:'2026-09-08', readingTime:12, featured:true, sections:[
    {id:'antes-de-comecar',title:'Antes de começar',paragraphs:['Você precisa de uma conta no GitHub, uma conta na Cloudflare e seu projeto funcionando no computador. Não se preocupe com termos novos: cada etapa será feita separadamente.']},
    {id:'prepare-projeto',title:'1. Prepare o projeto',paragraphs:['Abra o terminal na pasta do projeto e confirme que o comando de build termina sem erros. O resultado do Astro fica na pasta dist.'],code:'npm install\nnpm run build'},
    {id:'envie-github',title:'2. Envie para o GitHub',paragraphs:['Crie um repositório vazio, conecte sua pasta e envie o primeiro commit. Nunca envie arquivos .env ou chaves secretas.'],steps:['Confira o arquivo .gitignore','Faça o primeiro commit','Envie para a branch main']},
    {id:'publique',title:'3. Publique na Cloudflare',paragraphs:['O Worker de arquivos estáticos recebe a pasta dist e distribui o site globalmente. Depois, configure seu domínio e valide as páginas principais.']}
  ]},
  { slug:'comandos-linux-iniciantes', type:'tutorial', title:'Terminal Linux: 12 comandos para começar', excerpt:'Os comandos essenciais para navegar, criar arquivos e entender seu ambiente.', category:'Linux & Segurança', categorySlug:'linux', author:'Dejota', publishedAt:'2026-09-05', readingTime:10, featured:true, sections:[
    {id:'terminal',title:'O que é o terminal?',paragraphs:['O terminal permite conversar com o sistema por comandos. Comece devagar e sempre confirme em qual pasta você está.']},
    {id:'navegacao',title:'1. Navegação',paragraphs:['Use pwd para ver a pasta atual, ls para listar arquivos e cd para mudar de pasta.'],code:'pwd\nls\ncd Projetos'},
    {id:'arquivos',title:'2. Arquivos e pastas',paragraphs:['mkdir cria uma pasta e touch cria um arquivo vazio. Evite comandos de exclusão enquanto estiver aprendendo.'],code:'mkdir meu-projeto\ntouch README.md'}
  ]},
  { slug:'pagina-responsiva-zero', type:'tutorial', title:'Crie uma página responsiva do zero', excerpt:'HTML e CSS explicados em um pequeno projeto que funciona no celular.', category:'Programação', categorySlug:'programacao', author:'Dejota', publishedAt:'2026-09-02', readingTime:18, featured:true, sections:[
    {id:'estrutura',title:'1. Estrutura HTML',paragraphs:['HTML descreve o conteúdo. Use elementos semânticos para que pessoas e mecanismos de busca entendam a página.'],code:'<main>\n  <h1>Meu primeiro projeto</h1>\n  <p>Construído passo a passo.</p>\n</main>'},
    {id:'estilo',title:'2. Estilo responsivo',paragraphs:['Comece pelo celular e amplie o layout quando houver espaço.'],code:'.container { width: min(100% - 2rem, 70rem); margin: auto; }'}
  ]},
  { slug:'ia-no-trabalho', type:'article', title:'5 formas práticas de usar IA no trabalho', excerpt:'Aplicações simples para organizar ideias, revisar textos e acelerar tarefas repetitivas.', category:'Inteligência Artificial', categorySlug:'ia', author:'Dejota', publishedAt:'2026-08-30', readingTime:8, sections:[
    {id:'contexto',title:'Comece por tarefas pequenas',paragraphs:['IA funciona melhor quando você fornece contexto, um objetivo claro e um formato de resposta. Sempre revise o resultado.']},
    {id:'usos',title:'Cinco usos seguros',paragraphs:['Use como apoio para organizar anotações, criar listas de verificação, explicar conceitos, comparar opções e revisar clareza.'],steps:['Organizar uma pauta','Resumir suas próprias notas','Explicar um erro de código','Criar uma checklist','Revisar um rascunho']}
  ]},
  { slug:'primeiro-servico-online', type:'article', title:'Como montar seu primeiro serviço online', excerpt:'Um método direto para escolher uma oferta pequena, encontrar clientes e entregar bem.', category:'Renda Digital', categorySlug:'renda-digital', author:'Dejota', publishedAt:'2026-08-27', readingTime:11, sections:[
    {id:'oferta',title:'Escolha uma entrega clara',paragraphs:['Seu primeiro serviço precisa resolver um problema específico e ter um resultado fácil de explicar. Uma landing page simples é melhor que “faço qualquer site”.']},
    {id:'validacao',title:'Valide antes de ampliar',paragraphs:['Converse com possíveis clientes, mostre uma amostra e anote as dúvidas que se repetem.'],steps:['Defina um público','Escolha uma dor','Monte uma amostra','Converse com cinco pessoas']}
  ]},
  { slug:'seguranca-contas', type:'article', title:'Proteja suas contas com passos simples', excerpt:'Senhas únicas, autenticação em dois fatores e recuperação organizada.', category:'Linux & Segurança', categorySlug:'linux', author:'Dejota', publishedAt:'2026-08-24', readingTime:7, sections:[
    {id:'prioridades',title:'As três prioridades',paragraphs:['Use um gerenciador de senhas, ative autenticação em dois fatores e guarde códigos de recuperação fora do computador principal.']},
    {id:'rotina',title:'Crie uma rotina curta',paragraphs:['Revise primeiro seu e-mail principal, GitHub, Cloudflare e contas financeiras.'],steps:['Troque senhas repetidas','Ative 2FA','Salve códigos de recuperação','Revise sessões abertas']}
  ]}
];

const apiUrl = import.meta.env.CONTENT_API_URL;
const useApi = import.meta.env.CONTENT_SOURCE === 'api';

export async function getPosts(): Promise<Post[]> {
  if (!useApi) return demoPosts;
  if (!apiUrl) throw new Error('CONTENT_API_URL é obrigatório quando CONTENT_SOURCE=api.');
  const response = await fetch(`${apiUrl}/api/posts?limit=100`);
  if (!response.ok) throw new Error(`Falha ao carregar conteúdo: ${response.status}`);
  const payload = await response.json() as { data: { items: Post[] } };
  return payload.data.items;
}

export async function getPost(slug: string) { return (await getPosts()).find((post) => post.slug === slug); }
export async function getCategories() {
  const posts = await getPosts();
  return [...new Map(posts.map((post) => [post.categorySlug, { name: post.category, slug: post.categorySlug, count: posts.filter((item) => item.categorySlug === post.categorySlug).length }])).values()];
}
