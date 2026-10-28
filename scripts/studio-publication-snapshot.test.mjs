import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, writeFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { execFileSync } from 'node:child_process';
import { localPosts } from './studio-local.mjs';
import { publicationSnapshot } from './studio-publication-snapshot.mjs';
import { canMergeStudioPull } from '../src/lib/studio-publication-policy.ts';

test('publication preserves exact Markdown and rejects unsafe workspaces and drafts', async () => {
  const root = await mkdtemp(join(tmpdir(),'studio-publish-'));
  const git = (...args) => execFileSync('git',args,{cwd:root,stdio:'pipe'});
  const path = join(root,'src/content/posts/artigo.md');
  const raw = '---\ntitle: Artigo de teste\ndescription: Descrição de teste\ndraft: false\nfutureField: preserve-me\n---\nTexto original.\n';
  try {
    await mkdir(join(root,'src/content/posts'),{recursive:true});
    await writeFile(path, raw);
    git('init','-b','main'); git('remote','add','official','.'); git('add','src/content/posts/artigo.md');
    git('-c','user.name=Studio Test','-c','user.email=studio@example.test','commit','-m','baseline');
    git('update-ref','refs/remotes/official/main','HEAD');
    const posts = localPosts(root);
    await assert.rejects(async()=>publicationSnapshot(root,await posts.read('artigo')), {status:409});
    const changed = raw + '\nAlteração revisada.\n';
    await writeFile(path, changed);
    const result = publicationSnapshot(root,await posts.read('artigo'));
    assert.equal(result.markdown,changed);
    assert.match(result.markdown,/futureField: preserve-me/);
    assert.deepEqual(result.files,['src/content/posts/artigo.md']);
    await writeFile(join(root,'README.md'),'Outra frente');
    await assert.rejects(async()=>publicationSnapshot(root,await posts.read('artigo')), {status:409});
    await rm(join(root,'README.md'));
    await writeFile(path,changed.replace('draft: false','draft: true'));
    await assert.rejects(async()=>publicationSnapshot(root,await posts.read('artigo')), {status:422});
    await writeFile(path,changed);
    git('switch','-c','feature/mixed');
    await assert.rejects(async()=>publicationSnapshot(root,await posts.read('artigo')), {status:409});
    git('switch','main');
    git('update-ref','-d','refs/remotes/official/main');
    await assert.rejects(async()=>publicationSnapshot(root,await posts.read('artigo')), {status:409});
  } finally { await rm(root,{recursive:true,force:true}); }
});

test('merge requires open PR, approved CI, mergeable state and reviewed SHA', () => {
  const ready = {state:'open',merged:false,mergeable:true,ci:'success',headSha:'a'.repeat(40)};
  assert.equal(canMergeStudioPull(ready),true);
  for (const changes of [{ci:'pending'},{ci:'failure'},{ci:'unknown'},{mergeable:null},{mergeable:false},{merged:true},{state:'closed'},{headSha:''},{headSha:'invalid'}]) {
    assert.equal(canMergeStudioPull({...ready,...changes}),false);
  }
  assert.equal(canMergeStudioPull(null),false);
});
