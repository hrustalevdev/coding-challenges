import { it, describe } from 'node:test';
import assert from 'node:assert';

function sum(arr) {
  if (arr.length < 2) {
    return arr[0] ?? 0;
  }

  return arr[0] + sum(arr.slice(1));
}

function elemCount(arr) {
  if (arr.length === 0) return 0;

  return 1 + elemCount(arr.slice(1));
}

function findMax(arr) {
  if (arr.length < 2) {
    return arr[0] ?? 0;
  }

  return Math.max(arr[0], findMax(arr.slice(1)));
}

function binarySearch(arr, target, minIndex = 0, maxIndex = arr.length - 1) {
  if (minIndex > maxIndex) {
    return -1;
  }

  const midIndex = Math.floor((minIndex + maxIndex) / 2);
  const guess = arr[midIndex];

  if (guess === target) {
    return midIndex;
  } else if (guess < target) {
    minIndex = midIndex + 1;
    return binarySearch(arr, target, minIndex, maxIndex);
  } else {
    maxIndex = midIndex - 1;
    return binarySearch(arr, target, minIndex, maxIndex);
  }
}

/** TESTS */
describe('Sum tests', () => {
  it('should return the sum of an array of numbers', () => {
    assert.strictEqual(sum([1, 2, 3]), 6);
    assert.strictEqual(sum([-1, -2, -3]), -6);
    assert.strictEqual(sum([0, 0, 0]), 0);
    assert.strictEqual(sum([100, 200, 300]), 600);
    assert.strictEqual(sum([]), 0);
    assert.strictEqual(sum([5]), 5);
    assert.strictEqual(sum([-5]), -5);
  });

  it('should return array length', () => {
    assert.strictEqual(elemCount([1, 2, 3]), 3);
    assert.strictEqual(elemCount([-1, -2, -3]), 3);
    assert.strictEqual(elemCount([0, 0, 0]), 3);
    assert.strictEqual(elemCount([100, 200, 300]), 3);
    assert.strictEqual(elemCount([]), 0);
    assert.strictEqual(elemCount([5]), 1);
    assert.strictEqual(elemCount([-5]), 1);
  });

  it('should find the maximum element in an array', () => {
    assert.strictEqual(findMax([1, 2, 3]), 3);
    assert.strictEqual(findMax([-1, -2, -3]), -1);
    assert.strictEqual(findMax([0, 0, 0]), 0);
    assert.strictEqual(findMax([100, 200, 300]), 300);
    assert.strictEqual(findMax([]), 0);
    assert.strictEqual(findMax([5]), 5);
    assert.strictEqual(findMax([-5]), -5);
    assert.strictEqual(findMax([-10, -20, -30]), -10);
    assert.strictEqual(findMax([3, 3, 1, 11, 5, 55, 23, 12, 98]), 98);
  });

  it('should perform binary search on a sorted array', () => {
    assert.strictEqual(binarySearch([1, 2, 3, 4, 5], 3), 2);
    assert.strictEqual(binarySearch([1, 2, 3, 4, 5], 1), 0);
    assert.strictEqual(binarySearch([1, 2, 3, 4, 5], 5), 4);
    assert.strictEqual(binarySearch([1, 2, 3, 4, 5], 6), -1);
    assert.strictEqual(binarySearch([], 1), -1);
    assert.strictEqual(binarySearch([3], 3), 0);
    assert.strictEqual(binarySearch([3], 2), -1);
    assert.strictEqual(binarySearch([1, 2], 1), 0);
    assert.strictEqual(binarySearch([1, 2], 2), 1);
    assert.strictEqual(binarySearch([1, 2], -1), -1);
    assert.strictEqual(binarySearch([-10, -5, -3, -1], -5), 1);
    assert.strictEqual(binarySearch([-10, -5, -3, -1], -10), 0);
    assert.strictEqual(binarySearch([-10, -5, -3, -1], -3), 2);
    assert.strictEqual(binarySearch([-10, -5, -3, -1], -20), -1);
    assert.strictEqual(binarySearch([-10, -5, -3, -1], -11), -1);
    assert.strictEqual(binarySearch([-10, -5, -3, -1], -2), -1);
    assert.strictEqual(binarySearch([-10, -5, -3, -1], 0), -1);
    assert.strictEqual(binarySearch([-10, -5, -3, -1], 2), -1);
    assert.strictEqual(binarySearch([-10, -5, -3, -1], 100), -1);
    assert.strictEqual(binarySearch([-10], -10), 0);
    assert.strictEqual(binarySearch([-10], 0), -1);
    assert.strictEqual(binarySearch([-10], 10), -1);
    assert.strictEqual(binarySearch([-10], null), -1);
    assert.strictEqual(binarySearch([], null), -1);
  });
});
