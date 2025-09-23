import { Bench } from 'tinybench';
import { binarySearch, binarySearchWithRecursion } from './binary-search.js';
import { getRandomInt } from '../../utils/get-random-int.js';

const smallArray = Array.from({ length: 100 }, () =>
  getRandomInt(-100, 100)
).sort((a, b) => a - b);
const largeArray = Array.from({ length: 10_000 }, () =>
  getRandomInt(-1000, 1000)
).sort((a, b) => a - b);

const bench = new Bench();

bench
  .add('Binary Search: small array (n=100) - target at start', () => {
    binarySearch(smallArray.slice(), smallArray[0]);
  })
  .add(
    'Binary Search with Recursion: small array (n=100) - target at start',
    () => {
      binarySearchWithRecursion(
        smallArray.slice(),
        smallArray[0],
        0,
        smallArray.length - 1
      );
    }
  )
  .add('Binary Search: small array (n=100) - target in middle', () => {
    binarySearch(
      smallArray.slice(),
      smallArray[Math.floor(smallArray.length / 2)]
    );
  })
  .add(
    'Binary Search with Recursion: small array (n=100) - target in middle',
    () => {
      binarySearchWithRecursion(
        smallArray.slice(),
        smallArray[Math.floor(smallArray.length / 2)],
        0,
        smallArray.length - 1
      );
    }
  )
  .add('Binary Search: small array (n=100) - target at end', () => {
    binarySearch(smallArray.slice(), smallArray[smallArray.length - 1]);
  })
  .add(
    'Binary Search with Recursion: small array (n=100) - target at end',
    () => {
      binarySearchWithRecursion(
        smallArray.slice(),
        smallArray[smallArray.length - 1],
        0,
        smallArray.length - 1
      );
    }
  )
  .add('Binary Search: small array (n=100) - target not found', () => {
    binarySearch(smallArray.slice(), 99999);
  })
  .add(
    'Binary Search with Recursion: small array (n=100) - target not found',
    () => {
      binarySearchWithRecursion(
        smallArray.slice(),
        99999,
        0,
        smallArray.length - 1
      );
    }
  )
  .add('Binary Search: large array (n=10,000) - target at start', () => {
    binarySearch(largeArray.slice(), largeArray[0]);
  })
  .add(
    'Binary Search with Recursion: large array (n=10,000) - target at start',
    () => {
      binarySearchWithRecursion(
        largeArray.slice(),
        largeArray[0],
        0,
        largeArray.length - 1
      );
    }
  )
  .add('Binary Search: large array (n=10,000) - target in middle', () => {
    binarySearch(
      largeArray.slice(),
      largeArray[Math.floor(largeArray.length / 2)]
    );
  })
  .add(
    'Binary Search with Recursion: large array (n=10,000) - target in middle',
    () => {
      binarySearchWithRecursion(
        largeArray.slice(),
        largeArray[Math.floor(largeArray.length / 2)],
        0,
        largeArray.length - 1
      );
    }
  )
  .add('Binary Search: large array (n=10,000) - target at end', () => {
    binarySearch(largeArray.slice(), largeArray[largeArray.length - 1]);
  })
  .add(
    'Binary Search with Recursion: large array (n=10,000) - target at end',
    () => {
      binarySearchWithRecursion(
        largeArray.slice(),
        largeArray[largeArray.length - 1],
        0,
        largeArray.length - 1
      );
    }
  )
  .add('Binary Search: large array (n=10,000) - target not found', () => {
    binarySearch(largeArray.slice(), 99999);
  })
  .add(
    'Binary Search with Recursion: large array (n=10,000) - target not found',
    () => {
      binarySearchWithRecursion(
        largeArray.slice(),
        99999,
        0,
        largeArray.length - 1
      );
    }
  );

bench.runSync();
console.table(bench.table());
