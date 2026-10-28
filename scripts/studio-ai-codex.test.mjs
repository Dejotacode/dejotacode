import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtemp,writeFile,rm} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
test('Codex adapter: consent, limits, concurrency, cancellation and tool refusal (simulated)',async()=>{
 const root=await mkdtemp(join(tmpdir(),'studio-codex-adapter-test-'));
 const executable=join(root,'fake-codex'),previous=process.env.STUDIO_CODEX_BIN;
 try{
  await writeFile(executable,"#!/usr/bin/node\nconst fs=require('node:fs');\nif(process.argv[2]==='login'){console.log('Logged in using ChatGPT');process.exit(0);}\nlet input='';process.stdin.on('data',x=>input+=x);process.stdin.on('end',()=>{const args=process.argv.slice(2),output=args[args.indexOf('-o')+1];if(input.includes('CANCELAR')){setTimeout(()=>{},10000);return;}setTimeout(()=>{fs.writeFileSync(output,'Sugestão simulada');console.log(JSON.stringify({type:'item.completed',item:{type:input.includes('FERRAMENTA')?'command_execution':'agent_message',text:'Sugestão simulada'}}));},100);});\n",{mode:0o700});
  process.env.STUDIO_CODEX_BIN=executable;
  const {reviewCodex,codexStatus}=await import('./studio-ai-codex.mjs?test='+Date.now());
  const valid={model:'codex-chatgpt',task:'resumo',consent:true,title:'Teste',body:'Texto fictício.'};
  assert.equal((await codexStatus()).available,true);
  await assert.rejects(reviewCodex({...valid,consent:false}),e=>e.status===422);
  await assert.rejects(reviewCodex({...valid,model:';comando'}),e=>e.status===422);
  await assert.rejects(reviewCodex({...valid,body:'x'.repeat(40001)}),e=>e.status===422);
  const first=reviewCodex(valid);
  await assert.rejects(reviewCodex(valid),e=>e.status===409);
  assert.equal((await first).suggestion,'Sugestão simulada');
  const controller=new AbortController();
  const cancel=reviewCodex({...valid,body:'CANCELAR'},{signal:controller.signal});
  setTimeout(()=>controller.abort(),150);
  await assert.rejects(cancel,e=>e.status===499);
  assert.equal((await codexStatus()).busy,false);
  await assert.rejects(reviewCodex({...valid,body:'FERRAMENTA'}),e=>e.status===502);
 }finally{
  if(previous===undefined)delete process.env.STUDIO_CODEX_BIN;else process.env.STUDIO_CODEX_BIN=previous;
  await rm(root,{recursive:true,force:true});
 }
});