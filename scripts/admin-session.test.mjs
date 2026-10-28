import test from 'node:test';
import assert from 'node:assert/strict';
import {safeAdminNext} from '../src/scripts/admin-session.ts';
test('admin return path stays inside the local admin area',()=>{
 const origin='http://localhost:4321';
 assert.equal(safeAdminNext('/admin/editor/?post=teste',origin),'/admin/editor/?post=teste');
 for(const value of [null,'https://example.com','//example.com','/admin/../../fora','/admin/entrar/','/admin/\\evil']){
  assert.equal(safeAdminNext(value,origin),'/admin/publicacao/');
 }
});
