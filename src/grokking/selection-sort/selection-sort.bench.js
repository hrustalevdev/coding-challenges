import { Bench } from 'tinybench';
import { selectionSort } from './selection-sort.js';
import { selectionSortOptimized } from './selection-sort.js';

const bench = new Bench();

// Создаем тестовые данные один раз
const smallArrayOriginal = Array.from({ length: 10 }, () =>
  Math.floor(Math.random() * 100)
);
const mediumArrayOriginal = Array.from({ length: 100 }, () =>
  Math.floor(Math.random() * 1000)
);
const largeArrayOriginal = Array.from({ length: 1000 }, () =>
  Math.floor(Math.random() * 10000)
);

// Добавляем тесты для обеих функций на одинаковых данных
bench
  .add('Base: 10 elements', () => {
    selectionSort([...smallArrayOriginal]); // создаем копию
  })
  .add('Optimized: 10 elements', () => {
    selectionSortOptimized([...smallArrayOriginal]); // создаем копию
  })
  .add('Base: 100 elements', () => {
    selectionSort([...mediumArrayOriginal]);
  })
  .add('Optimized: 100 elements', () => {
    selectionSortOptimized([...mediumArrayOriginal]);
  })
  .add('Base: 1000 elements', () => {
    selectionSort([...largeArrayOriginal]);
  })
  .add('Optimized: 1000 elements', () => {
    selectionSortOptimized([...largeArrayOriginal]);
  });

await bench.run();

console.table(bench.table());
