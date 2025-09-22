import { Bench } from 'tinybench';
import { sum, sumWithFor, sumWithRecursion } from './sum.js';
import { getRandomInt } from '../../utils/get-random-int.js';

const smallArray = Array.from({ length: 100 }, () => getRandomInt(-100, 100));
const largeArray = Array.from({ length: 10_000 }, () =>
  getRandomInt(-1000, 1000)
);

console.log(smallArray);

const bench = new Bench();

bench
  .add('Reduce: small array (n=100)', () => {
    sum(smallArray.slice());
  })
  .add('For-loop: small array (n=100)', () => {
    sumWithFor(smallArray.slice());
  })
  .add('Recursion: small array (n=100)', () => {
    sumWithRecursion(smallArray.slice());
  })
  .add('Reduce: large array (n=10,000)', () => {
    sum(largeArray.slice());
  })
  .add('For-loop: large array (n=10,000)', () => {
    sumWithFor(largeArray.slice());
  })
  .add('Recursion: large array (n=10,000)', () => {
    sumWithRecursion(largeArray.slice());
  });

bench.runSync();
console.table(bench.table());
