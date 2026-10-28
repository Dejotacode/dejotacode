import test from 'node:test';
import assert from 'node:assert/strict';
import { parseGitRelation } from './studio-git-state.mjs';
test('missing or malformed Git relation never certifies an aligned base', () => {
  for (const raw of [null, '', 'fatal: unknown revision', '0', '0 0 extra', '-1 0', '9999999999999999999 0']) {
    assert.equal(parseGitRelation(raw).verified, false);
  }
  assert.deepEqual(parseGitRelation('0\t0'), { verified: true, behind: 0, ahead: 0 });
  assert.deepEqual(parseGitRelation('61 2'), { verified: true, behind: 61, ahead: 2 });
});
