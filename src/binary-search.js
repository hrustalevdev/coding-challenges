import { it, describe } from 'node:test';
import assert from 'node:assert';

/**
 * Binary Search
 * @param {number[]} arr
 * @param {number} target
 * @returns {number}
 */
function binarySearch(arr, target) {
  let minIndex = 0;
  let maxIndex = arr.length - 1;

  while (minIndex <= maxIndex) {
    const midIndex = Math.floor((minIndex + maxIndex) / 2);
    const guess = arr[midIndex];

    if (guess === target) {
      return midIndex;
    } else if (guess > target) {
      maxIndex = midIndex - 1;
    } else {
      minIndex = midIndex + 1;
    }
  }

  return -1;
}

/** TESTS */
describe('Binary Search tests', () => {
  // POSITIVE CASES
  it('should find the target in a sorted array', () => {
    assert.strictEqual(binarySearch([1, 3, 5, 7, 9], 5), 2);
    assert.strictEqual(binarySearch([1, 3, 5, 7, 9], 1), 0);
    assert.strictEqual(binarySearch([1, 3, 5, 7, 9], 9), 4);
  });

  // NEGATIVE CASES
  it('should return -1 if target is not in array', () => {
    assert.strictEqual(binarySearch([1, 3, 5, 7, 9], 4), -1);
    assert.strictEqual(binarySearch([1, 3, 5, 7, 9], 10), -1);
  });

  // EDGE CASES
  it('should work with an empty array', () => {
    assert.strictEqual(binarySearch([], 1), -1);
  });

  it('should work with single-element arrays', () => {
    assert.strictEqual(binarySearch([3], 3), 0);
    assert.strictEqual(binarySearch([3], 2), -1);
  });

  it('should work with two-element arrays', () => {
    assert.strictEqual(binarySearch([1, 2], 1), 0);
    assert.strictEqual(binarySearch([1, 2], 2), 1);
    assert.strictEqual(binarySearch([1, 2], 3), -1);
  });
});
