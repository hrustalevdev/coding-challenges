import { describe, it } from 'node:test';
import assert from 'node:assert';
import { sum, sumWithFor, sumWithRecursion } from './sum.js';

const implementations = [
  { name: 'Sum', fn: sum },
  { name: 'Sum with For Loop', fn: sumWithFor },
  { name: 'Sum with Recursion', fn: sumWithRecursion },
];

describe('Sum tests', () => {
  implementations.forEach(({ name, fn }) => {
    describe(`WHEN ${name} is called`, () => {
      describe('AND an array of numbers is passed', () => {
        const testCases = [
          { input: [1, 2, 3, 4, 5], expected: 15 },
          { input: [0, 0, 0], expected: 0 },
          { input: [-1, -2, -3], expected: -6 },
          { input: [10, -10, 10], expected: 10 },
          { input: [100], expected: 100 },
        ];

        it('MUST return the correct sum', () => {
          testCases.forEach(({ input, expected }) => {
            assert.strictEqual(fn(input), expected);
          });
        });
      });

      describe('AND an empty array is passed', () => {
        it('MUST return 0', () => {
          assert.strictEqual(fn([]), 0);
        });
      });
    });
  });
});
