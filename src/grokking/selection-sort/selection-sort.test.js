import { describe, it } from 'node:test';
import assert from 'node:assert';
import { selectionSort, selectionSortOptimized } from './selection-sort.js';

const implementations = [
  { name: 'Selection Sort', fn: selectionSort },
  { name: 'Selection Sort Optimized', fn: selectionSortOptimized },
];

describe('Selection Sort tests', () => {
  implementations.forEach(({ name, fn }) => {
    describe(`WHEN ${name} is called`, () => {
      describe('AND an unsorted array is passed', () => {
        const testCases = [
          { input: [5, 3, 1, 4, 2], expected: [1, 2, 3, 4, 5] },
          { input: [9, 7, 5, 3, 1], expected: [1, 3, 5, 7, 9] },
          { input: [2, 4, 6, 8], expected: [2, 4, 6, 8] },
          { input: [8, 6, 4, 2], expected: [2, 4, 6, 8] },
          { input: [3, -1], expected: [-1, 3] },
          { input: [-1, -2], expected: [-2, -1] },
          { input: [-2, -3], expected: [-3, -2] },
          { input: [-3, -4], expected: [-4, -3] },
          { input: [-4, -5], expected: [-5, -4] },
          { input: [0, -1, 1], expected: [-1, 0, 1] },
          { input: [-1, 0, 1], expected: [-1, 0, 1] },
          { input: [1, 0, -1], expected: [-1, 0, 1] },
        ];

        it('MUST return a sorted array', () => {
          testCases.forEach(({ input, expected }) => {
            assert.deepStrictEqual(fn(input), expected);
          });
        });
      });

      describe('AND an array with one element is passed', () => {
        const testCases = [
          { input: [1], expected: [1] },
          { input: [3], expected: [3] },
          { input: [-1], expected: [-1] },
        ];

        it('MUST return the same single-element array', () => {
          testCases.forEach(({ input, expected }) => {
            assert.deepStrictEqual(fn(input), expected);
          });
        });
      });

      describe('AND an empty array is passed', () => {
        it('MUST return an empty array', () => {
          assert.deepStrictEqual(fn([]), []);
        });
      });
    });
  });
});
