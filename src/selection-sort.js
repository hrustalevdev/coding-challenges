import { it, describe } from 'node:test';
import assert from 'node:assert';

/**
 * Selection Sort
 * @param {number[]} arr
 * @return {number[]} - sorted arr
 */
function selectionSort(arr) {
  const sortedArr = [];
  const copiedArr = [...arr];

  while (copiedArr.length) {
    const smallestIndex = findSmallest(copiedArr);
    const [smallestValue] = copiedArr.splice(smallestIndex, 1);
    sortedArr.push(smallestValue);
  }

  return sortedArr;
}

/**
 * Finds the index of the smallest number in an array.
 * @param {number[]} arr
 * @returns {number}
 */
function findSmallest(arr) {
  let smallest = arr[0];
  let smallestIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallestIndex = i;
    }
  }

  return smallestIndex;
}

/** TESTS */
describe('Selection Sort tests', () => {
  // POSITIVE CASES
  it('should sort an unsorted array', () => {
    assert.deepStrictEqual(selectionSort([5, 3, 1, 4, 2]), [1, 2, 3, 4, 5]);
    assert.deepStrictEqual(selectionSort([9, 7, 5, 3, 1]), [1, 3, 5, 7, 9]);
    assert.deepStrictEqual(selectionSort([2, 4, 6, 8]), [2, 4, 6, 8]);
    assert.deepStrictEqual(selectionSort([8, 6, 4, 2]), [2, 4, 6, 8]);
    assert.deepStrictEqual(selectionSort([1]), [1]);
    assert.deepStrictEqual(selectionSort([]), []);
    assert.deepStrictEqual(selectionSort([3]), [3]);
    assert.deepStrictEqual(selectionSort([3, -1]), [-1, 3]);
    assert.deepStrictEqual(selectionSort([-1]), [-1]);
    assert.deepStrictEqual(selectionSort([-1, -2]), [-2, -1]);
    assert.deepStrictEqual(selectionSort([-2]), [-2]);
    assert.deepStrictEqual(selectionSort([-2, -3]), [-3, -2]);
    assert.deepStrictEqual(selectionSort([-3]), [-3]);
    assert.deepStrictEqual(selectionSort([-3, -4]), [-4, -3]);
    assert.deepStrictEqual(selectionSort([-4]), [-4]);
    assert.deepStrictEqual(selectionSort([-4, -5]), [-5, -4]);
    assert.deepStrictEqual(selectionSort([-5]), [-5]);
    assert.deepStrictEqual(selectionSort([-5, -6]), [-6, -5]);
    assert.deepStrictEqual(selectionSort([-6]), [-6]);
    assert.deepStrictEqual(selectionSort([-6, -7]), [-7, -6]);
    assert.deepStrictEqual(selectionSort([-7]), [-7]);
    assert.deepStrictEqual(selectionSort([-7, -8]), [-8, -7]);
    assert.deepStrictEqual(selectionSort([-8]), [-8]);
    assert.deepStrictEqual(selectionSort([-8, -9]), [-9, -8]);
    assert.deepStrictEqual(selectionSort([-9]), [-9]);
  });

  // NEGATIVE CASES

  // EDGE CASES
});
