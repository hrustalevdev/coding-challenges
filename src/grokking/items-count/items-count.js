import { describe, it } from 'node:test';
import assert from 'node:assert';

function itemsCount(array) {
  if (array.length === 0) return 0;

  return 1 + itemsCount(array.slice(1));
}

describe('Items count tests', () => {
  describe('WHEN itemsCount is called', () => {
    describe('AND an array is passed', () => {
      const testCases = [
        { input: [1, 2, 3, 4, 5], expected: 5 },
        { input: [], expected: 0 },
        { input: [10], expected: 1 },
        { input: [7, 8, 9], expected: 3 },
        { input: ['a', 'b', 'c', 'd'], expected: 4 },
      ];
      it('MUST return the correct count of items in the array', () => {
        testCases.forEach(({ input, expected }) => {
          assert.strictEqual(itemsCount(input), expected);
        });
      });
    });
  });
});
