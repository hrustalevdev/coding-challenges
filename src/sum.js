import { it, describe } from 'node:test';
import assert from 'node:assert';

function sum(a, b) {
  return a + b;
}

/** TESTS */
describe('Sum tests', () => {
  it('should return the sum of two numbers', () => {
    assert.strictEqual(sum(1, 2), 3);
    assert.strictEqual(sum(-1, 1), 0);
    assert.strictEqual(sum(0, 0), 0);
    assert.strictEqual(sum(100, 200), 300);
    assert.strictEqual(sum(-100, -200), -300);
  });
});
