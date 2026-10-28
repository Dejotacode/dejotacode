import { execFileSync } from 'node:child_process';
import { parseGitRelation } from './studio-git-state.mjs';
const fail = (status, message) => { throw Object.assign(new Error(message), { status }); };
/** @param {string} root @param {{slug:string,raw:string,version:string,fields:any}} post */
export function publicationSnapshot(root, post) {
  const git = (...args) => {
    try { return execFileSync('git', args, { cwd: root, encoding: 'utf8', stdio: ['ignore','pipe','ignore'] }).trimEnd(); }
    catch { return null; }
  };
  const branch = git('branch','--show-current');
  const relation = parseGitRelation(git('rev-list','--left-right','--count','official/main...HEAD'));
  const status = git('status','--porcelain=v1','--untracked-files=all');
  if (!branch || (branch !== 'main' && !branch.startsWith('content/admin-')) || !relation.verified || relation.behind || relation.ahead || status === null)
    fail(409, 'Use uma área editorial isolada e alinhada com official/main.');
  const paths = status.split('\n').filter(Boolean).map(line => line.slice(3));
  if (paths.some(path => !/^src\/content\/posts\/[a-z0-9]+(?:-[a-z0-9]+)*\.md$/.test(path)))
    fail(409, 'Há mudanças fora dos artigos. Separe o pacote antes de publicar.');
  if (!paths.includes('src/content/posts/' + post.slug + '.md')) fail(409, 'Este artigo não tem alteração local para publicar.');
  if (post.fields.draft !== false || !post.fields.title?.trim() || !post.fields.description?.trim()) fail(422, 'Revise o rascunho, título e descrição antes de publicar.');
  if (post.raw.length > 200000) fail(422, 'O Markdown excede o limite do Worker editorial.');
  const unchangedDependency = path => {
    const expected = git('rev-parse','official/main:' + path);
    if (!expected || expected !== git('hash-object','--',path)) fail(409, 'A dependência precisa de pacote isolado: ' + path);
  };
  if (post.fields.coverImage) {
    if (!/^\/assets\/[a-zA-Z0-9_./-]+$/.test(post.fields.coverImage) || post.fields.coverImage.includes('..')) fail(422,'Capa inválida.');
    unchangedDependency('public' + post.fields.coverImage);
  }
  for (const id of post.fields.storeProducts || []) {
    if (typeof id !== 'string' || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(id)) fail(422,'Produto inválido.');
    unchangedDependency('src/content/store/products/' + id + '.md');
  }
  return { slug: post.slug, title: post.fields.title, version: post.version, markdown: post.raw, files: ['src/content/posts/' + post.slug + '.md'] };
}
