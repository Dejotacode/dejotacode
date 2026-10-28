import {publicationSnapshot} from './studio-publication-snapshot.mjs';
import {codexStatus,reviewCodex} from './studio-ai-codex.mjs';
import {readFile,writeFile,rename,mkdir,realpath,lstat,unlink,readdir} from 'node:fs/promises';
import {join,resolve} from 'node:path';
import {createHash,randomUUID} from 'node:crypto';
import {parseDocument} from 'yaml';
const hash=s=>createHash('sha256').update(s).digest('hex');
const fail=(status,message)=>{throw Object.assign(new Error(message),{status});};
export function localPosts(root){
 const directory=resolve(root,'src/content/posts');let busy=false;
 const locate=async slug=>{
  if(typeof slug!=='string'||slug.length>160||!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug))fail(400,'Slug inválido.');
  if(await realpath(directory)!==directory)fail(403,'Diretório simbólico não permitido.');
  const path=join(directory,slug+'.md');
  try{if(!(await lstat(path)).isFile())fail(403,'Arquivo inválido.');}catch(e){if(e.code!=='ENOENT')throw e;}
  return path;
 };
 const read=async slug=>{
  const raw=await readFile(await locate(slug),'utf8');
  const match=raw.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)([\s\S]*)$/);
  if(!match)fail(422,'Frontmatter inválido.');
  const doc=parseDocument(match[1],{uniqueKeys:true});
  if(doc.errors.length)fail(422,'YAML inválido.');
  return {slug,version:hash(raw),frontmatter:match[1],body:match[2],fields:doc.toJS(),raw};
 };
 const save=async payload=>{
  if(busy)fail(409,'Outra gravação em andamento.');
  busy=true;let temp;
  try{
   const {slug,expectedVersion,fields,body}=payload,path=await locate(slug);
   if(!fields||typeof body!=='string'||body.length>1500000)fail(422,'Conteúdo inválido.');
   let old=null;try{old=await read(slug);}catch(e){if(e.code!=='ENOENT')throw e;}
   if(old?expectedVersion!==old.version:expectedVersion!==null)fail(409,'O arquivo mudou. Reabra e compare antes de salvar.');
   if(!old&&fields.draft!==true)fail(422,'Novos conteúdos devem iniciar como rascunho.');
   if(typeof fields.title!=='string'||!fields.title.trim()||fields.title.length>180||typeof fields.description!=='string'||!fields.description.trim()||fields.description.length>320)fail(422,'Confira título e descrição.');
   if(!['programacao','linux-seguranca','inteligencia-artificial','tecnologia-pratica','renda-digital'].includes(fields.category))fail(422,'Categoria inválida.');
   if(!['artigo','tutorial'].includes(fields.type)||!['iniciante','intermediario','avancado'].includes(fields.difficulty)||typeof fields.draft!=='boolean'||!Number.isInteger(fields.readingTime)||fields.readingTime<1)fail(422,'Metadados inválidos.');
   if(!/^\d{4}-\d{2}-\d{2}$/.test(fields.publishedAt)||Number.isNaN(Date.parse(fields.publishedAt))||new Date(fields.publishedAt).toISOString().slice(0,10)!==fields.publishedAt)fail(422,'Data inválida.');
   for(const k of ['tags','storeProducts','relatedPosts'])if(!Array.isArray(fields[k])||fields[k].some(s=>typeof s!=='string'||s.length>200))fail(422,'Lista inválida.');
   const doc=parseDocument(old?.frontmatter||'featured: false\n');
   for(const k of ['title','description','publishedAt','category','type','difficulty','readingTime','draft','tags','storeProducts','relatedPosts'])doc.set(k,fields[k]);
   if(Object.hasOwn(fields,'coverImage')){
    if(fields.coverImage){
     if(typeof fields.coverImage!=='string'||!/^\/assets\/[a-zA-Z0-9_./-]+\.(webp|png|jpe?g|avif|svg)$/i.test(fields.coverImage)||fields.coverImage.split('/').includes('..'))fail(422,'Capa inválida.');
     const publicRoot=await realpath(join(root,'public'));
     let imagePath;try{imagePath=await realpath(join(root,'public',fields.coverImage.slice(1)));}catch{fail(422,'Imagem não encontrada.');}
     if(!imagePath.startsWith(publicRoot+'/')||!(await lstat(imagePath)).isFile())fail(422,'Imagem fora da biblioteca.');
     if(typeof fields.coverAlt!=='string'||!fields.coverAlt.trim()||fields.coverAlt.length>400||typeof fields.coverCaption!=='string'||!fields.coverCaption.trim()||fields.coverCaption.length>1200)fail(422,'Informe descrição e crédito/natureza da capa.');
     for(const key of ['coverImage','coverAlt','coverCaption'])doc.set(key,fields[key]);
    }else for(const key of ['coverImage','coverAlt','coverCaption'])doc.delete(key);
   }
   const raw='---\n'+doc.toString()+'---\n'+body;
   if(old){const backup=join(root,'.studio-local-history',slug);await mkdir(backup,{recursive:true});await writeFile(join(backup,Date.now()+'-'+randomUUID()+'.md'),old.raw,{flag:'wx',mode:0o600});}
   temp=path+'.'+randomUUID()+'.tmp';await writeFile(temp,raw,{flag:'wx',mode:0o600});
   let current=null;try{current=hash(await readFile(path,'utf8'));}catch(e){if(e.code!=='ENOENT')throw e;}
   if(current!==(old?.version??null))fail(409,'Arquivo alterado durante a gravação.');
   await rename(temp,path);temp=null;
   const result=await read(slug);delete result.raw;return result;
  }finally{busy=false;if(temp)await unlink(temp).catch(()=>{});}
 };
 return {read,save};
}
export default function studioLocal(root){
 return {name:'studio-isolated-local-save',apply:'serve',configureServer(server){
  const localPort=server.config.server.port||4321;
  const posts=localPosts(root);
  server.middlewares.use(async(req,res,next)=>{
   if(!req.url?.startsWith('/__studio-local/'))return next();
   res.setHeader('Content-Type','application/json; charset=utf-8');res.setHeader('Cache-Control','no-store');
   try{
    const host=req.headers.host||'';
    if(!['127.0.0.1:'+localPort,'localhost:'+localPort].includes(host)||!['127.0.0.1','::1','::ffff:127.0.0.1'].includes(req.socket.remoteAddress))fail(403,'Somente ambiente local.');
    const url=new URL(req.url,'http://'+host);if(url.pathname==='/__studio-local/media'&&req.method==='GET'){
     const assets=join(root,'public/assets');const items=[];
     const walk=async directory=>{for(const entry of await readdir(directory,{withFileTypes:true})){
      const path=join(directory,entry.name);if(entry.isDirectory())await walk(path);
      else if(entry.isFile()&&/\.(webp|png|jpe?g|avif|svg)$/i.test(entry.name))items.push('/assets/'+path.slice(assets.length+1));
     }};
     await walk(assets);res.end(JSON.stringify({items:items.sort()}));return;
    }
    if(url.pathname==='/__studio-local/ai/status'&&req.method==='GET'){res.end(JSON.stringify(await codexStatus()));return;}
    if(url.pathname==='/__studio-local/publication'&&req.method==='GET'){res.end(JSON.stringify(publicationSnapshot(root,await posts.read(url.searchParams.get('slug')))));return;}
    if(!['/__studio-local/posts','/__studio-local/ai/review'].includes(url.pathname))fail(404,'Não encontrado.');
    let result;
    if(req.method==='GET'&&url.pathname==='/__studio-local/posts'){result=await posts.read(url.searchParams.get('slug'));delete result.raw;}
    else if(req.method==='POST'){
     if(req.headers.origin!=='http://'+host||!req.headers['content-type']?.startsWith('application/json'))fail(403,'Origem inválida.');
     let data='';for await(const chunk of req){data+=chunk;if(Buffer.byteLength(data)>2000000)fail(413,'Arquivo muito grande.');}
     let payload;try{payload=JSON.parse(data);}catch{fail(400,'JSON inválido.');}
     const controller=new AbortController();
     res.once('close',()=>{if(!res.writableEnded)controller.abort();});
     result=url.pathname==='/__studio-local/ai/review'?await reviewCodex(payload,{signal:controller.signal}):await posts.save(payload);
    }else fail(405,'Método não permitido.');
    res.end(JSON.stringify(result));
   }catch(e){res.statusCode=e.status||(e.code==='ENOENT'?404:500);res.end(JSON.stringify({error:e.status?e.message:'Não foi possível acessar o arquivo local.'}));}
  });
 }};
}
