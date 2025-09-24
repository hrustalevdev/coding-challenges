import { Bench } from 'tinybench';
import { selectionSort, selectionSortOptimized } from './selection-sort.js';
import { quickSort } from './quick-sort.js';
import { getRandomInt } from '../../utils/get-random-int.js';

const bench = new Bench();

// Создаем тестовые данные один раз
const smallArrayOriginal = Array.from({ length: 10 }, () =>
  getRandomInt(-100, 100)
);
const mediumArrayOriginal = Array.from({ length: 100 }, () =>
  getRandomInt(-100, 100)
);
const largeArrayOriginal = Array.from({ length: 1000 }, () =>
  getRandomInt(-100, 100)
);

// Добавляем тесты для обеих функций на одинаковых данных
bench
  .add('Quick: 10 elements', () => {
    quickSort([...smallArrayOriginal]); // создаем копию
  })
  .add('Base: 10 elements', () => {
    selectionSort([...smallArrayOriginal]); // создаем копию
  })
  .add('Optimized: 10 elements', () => {
    selectionSortOptimized([...smallArrayOriginal]); // создаем копию
  })
  .add('Quick: 100 elements', () => {
    quickSort([...mediumArrayOriginal]);
  })
  .add('Base: 100 elements', () => {
    selectionSort([...mediumArrayOriginal]);
  })
  .add('Optimized: 100 elements', () => {
    selectionSortOptimized([...mediumArrayOriginal]);
  })
  .add('Quick: 1000 elements', () => {
    quickSort([...largeArrayOriginal]);
  })
  .add('Base: 1000 elements', () => {
    selectionSort([...largeArrayOriginal]);
  })
  .add('Optimized: 1000 elements', () => {
    selectionSortOptimized([...largeArrayOriginal]);
  });

await bench.run();
console.table(bench.table());
