import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtemp,mkdir,writeFile,readFile,rm,symlink,readdir} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {localPosts} from './studio-local.mjs';
test('save / reopen, unknown fields, conflict and validation',async()=>{
 const root=await mkdtemp(join(tmpdir(),'studio-v1-test-'));
 try{
  await mkdir(join(root,'src/content/posts'),{recursive:true});
  const api=localPosts(root);
  const fields={title:'Título de validação do editor local',description:'Descrição de teste',publishedAt:'2026-10-23',category:'tecnologia-pratica',type:'artigo',difficulty:'iniciante',readingTime:2,draft:true,tags:[],storeProducts:[],relatedPosts:[]};
  const first=await api.save({slug:'teste',expectedVersion:null,fields,body:'\n## Olá\n\nCorpo com acentos.\n'});
  assert.equal((await api.read('teste')).body,'\n## Olá\n\nCorpo com acentos.\n');
  const path=join(root,'src/content/posts/teste.md');
  await writeFile(path,(await readFile(path,'utf8')).replace('featured: false','featured: false\ncustom: preservado\n# comentário preservado'));
  const before=await api.read('teste');
  const next=await api.save({slug:'teste',expectedVersion:before.version,fields:{...fields,title:'Título atualizado'},body:before.body});
  assert.match(next.frontmatter,/custom: preservado/);assert.match(next.frontmatter,/# comentário preservado/);
  await assert.rejects(api.save({slug:'teste',expectedVersion:first.version,fields,body:'perder'}),e=>e.status===409);
  assert.equal((await api.read('teste')).body,before.body);
  await assert.rejects(api.read('../escape'),e=>e.status===400);
  await assert.rejects(api.save({slug:'novo',expectedVersion:null,fields:{...fields,draft:false},body:''}),e=>e.status===422);
  await assert.rejects(api.save({slug:'novo',expectedVersion:null,fields:{...fields,publishedAt:'2026-02-31'},body:''}),e=>e.status===422);
  await symlink(path,join(root,'src/content/posts/link.md'));
  await assert.rejects(api.read('link'),e=>e.status===403);
  assert.ok((await readdir(join(root,'.studio-local-history/teste'))).length);
 }finally{await rm(root,{recursive:true,force:true});}
});

test('cover override round trip, metadata, traversal and external symlink',async()=>{
 const root=await mkdtemp(join(tmpdir(),'studio-cover-test-'));
 try{
  await mkdir(join(root,'src/content/posts'),{recursive:true});
  await mkdir(join(root,'public/assets/posts'),{recursive:true});
  await writeFile(join(root,'public/assets/posts/test.svg'),'<svg/>');
  await writeFile(join(root,'private.svg'),'<svg/>');
  await symlink(join(root,'private.svg'),join(root,'public/assets/posts/outside.svg'));
  const api=localPosts(root);
  const fields={title:'Título de teste',description:'Descrição de teste',publishedAt:'2026-10-28',category:'tecnologia-pratica',type:'artigo',difficulty:'iniciante',readingTime:2,draft:true,tags:[],storeProducts:[],relatedPosts:[],coverImage:'/assets/posts/test.svg',coverAlt:'Imagem de teste',coverCaption:'Arquivo temporário do teste.'};
  const first=await api.save({slug:'capa',expectedVersion:null,fields,body:'Texto original.\n'});
  assert.equal((await api.read('capa')).fields.coverImage,fields.coverImage);
  assert.equal((await api.read('capa')).fields.coverAlt,fields.coverAlt);
  for(const override of [{coverImage:'/assets/../private.svg'},{coverImage:'/assets/posts/outside.svg'},{coverImage:'/assets/posts/missing.svg'},{coverCaption:''}]){
   await assert.rejects(api.save({slug:'capa',expectedVersion:first.version,fields:{...fields,...override},body:'Texto original.\n'}),e=>e.status===422);
  }
  const cleared=await api.save({slug:'capa',expectedVersion:first.version,fields:{...fields,coverImage:''},body:'Texto original.\n'});
  assert.equal(cleared.fields.coverImage,undefined);assert.equal(cleared.fields.coverAlt,undefined);
  assert.equal(cleared.body,'Texto original.\n');
 }finally{await rm(root,{recursive:true,force:true});}
});
