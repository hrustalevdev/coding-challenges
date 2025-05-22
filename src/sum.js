import test from 'node:test';
import assert from 'node:assert';

function sum(a, b) {
  return a + b;
}

/** TESTS */
test('sum', () => {
  assert(sum(1, 2), 3);
  assert(sum(-1, -1), -2);
  assert(sum(1.5, 2.5), 4);
});
