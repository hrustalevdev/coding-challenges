import { describe, it } from 'node:test';
import assert from 'node:assert';
import { binarySearch, binarySearchWithRecursion } from './binary-search.js';

const implementations = [
  { name: 'Binary Search', fn: binarySearch },
  { name: 'Binary Search with Recursion', fn: binarySearchWithRecursion },
];

describe('Binary Search tests', () => {
  implementations.forEach(({ name, fn }) => {
    describe(`WHEN ${name} is called`, () => {
      describe('AND a sorted array and a target number are passed', () => {
        const testCases = [
          { input: { array: [1, 2, 3, 4, 5], target: 3 }, expected: 2 },
          { input: { array: [10, 20, 30, 40, 50], target: 10 }, expected: 0 },
          { input: { array: [5, 15, 25, 35, 45], target: 45 }, expected: 4 },
          { input: { array: [1, 3, 5, 7, 9], target: 4 }, expected: -1 },
          { input: { array: [-10, -5, 0, 5, 10], target: -5 }, expected: 1 },
          {
            input: { array: [-20, -15, -10, -5, 0], target: -25 },
            expected: -1,
          },
          { input: { array: [100], target: 100 }, expected: 0 },
        ];

        it('MUST return the correct index of the target or -1 if not found', () => {
          testCases.forEach(({ input, expected }) => {
            assert.strictEqual(
              fn(input.array, input.target, 0, input.array.length - 1),
              expected
            );
          });
        });
      });

      describe('AND an empty array is passed', () => {
        it('MUST return -1', () => {
          assert.strictEqual(fn([], 1, 0, 0), -1);
        });
      });

      describe('AND a single-element array is passed', () => {
        it('MUST return 0 if the element matches the target', () => {
          assert.strictEqual(fn([3], 3, 0, 0), 0);
        });

        it('MUST return -1 if the element does not match the target', () => {
          assert.strictEqual(fn([3], 2, 0, 0), -1);
        });
      });
    });
  });
});
