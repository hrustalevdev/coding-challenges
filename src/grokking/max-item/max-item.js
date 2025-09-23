import { describe, it } from 'node:test';
import assert from 'node:assert';

function maxItem(array) {
  if (array.length === 0) return undefined;
  if (array.length === 1) return array[0];

  return Math.max(array[0], maxItem(array.slice(1)));
}

describe('maxItem', () => {
  it('should return undefined for empty array', () => {
    assert.strictEqual(maxItem([]), undefined);
  });

  it('should return single element if it is greater than prevMax', () => {
    assert.strictEqual(maxItem([5]), 5);
  });

  it('should return maximum element from array', () => {
    assert.strictEqual(maxItem([1, 2, 3, 4, 5]), 5);
    assert.strictEqual(maxItem([5, 4, 3, 2, 1]), 5);
    assert.strictEqual(maxItem([1, 5, 2, 4, 3]), 5);
  });

  it('should handle negative numbers', () => {
    assert.strictEqual(maxItem([-1, -2, -3]), -1);
    assert.strictEqual(maxItem([-5, 0, -3]), 0);
  });

  it('should handle decimal numbers', () => {
    assert.strictEqual(maxItem([1.5, 2.7, 0.9]), 2.7);
    assert.strictEqual(maxItem([-1.2, 3.14, 2.0]), 3.14);
  });
});
