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

/*
// BDD (Behavior-Driven Development) подход
describe('WHEN "binarySearch" is called', () => {
  // Позитивные кейсы
  it('AND target is in the middle of array, MUST return correct index', () => {
    assert.strictEqual(binarySearch([1, 3, 5, 7, 9], 5), 2);
  });

  it('AND target is at the beginning, MUST return index 0', () => {
    assert.strictEqual(binarySearch([1, 3, 5, 7, 9], 1), 0);
  });

  it('AND target is at the end, MUST return last index', () => {
    assert.strictEqual(binarySearch([1, 3, 5, 7, 9], 9), 4);
  });

  // Негативные кейсы
  it('AND target is NOT in array, MUST return -1', () => {
    assert.strictEqual(binarySearch([1, 3, 5, 7, 9], 4), -1);
    assert.strictEqual(binarySearch([1, 3, 5, 7, 9], 10), -1);
  });

  // Пограничные случаи (edge cases)
  it('AND array is empty, MUST return -1', () => {
    assert.strictEqual(binarySearch([], 1), -1);
  });

  it('AND array has one element EQUAL to target, MUST return 0', () => {
    assert.strictEqual(binarySearch([3], 3), 0);
  });

  it('AND array has one element NOT equal to target, MUST return -1', () => {
    assert.strictEqual(binarySearch([3], 1), -1);
  });

  it('AND array has two elements, MUST return correct index or -1', () => {
    assert.strictEqual(binarySearch([1, 2], 1), 0);
    assert.strictEqual(binarySearch([1, 2], 2), 1);
    assert.strictEqual(binarySearch([1, 2], 3), -1);
  });
});
 */
