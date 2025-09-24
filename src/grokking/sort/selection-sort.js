export function selectionSort(arr) {
  const sorted = [];
  const toSort = arr.slice();

  while (toSort.length > 0) {
    const smallestIndex = findSmallestIndex(toSort);
    sorted.push(toSort[smallestIndex]);
    toSort.splice(smallestIndex, 1);
  }

  return sorted;
}

function findSmallestIndex(arr) {
  return arr.reduce((smallestIndex, _, currentIndex, array) => {
    if (array[currentIndex] < array[smallestIndex]) {
      smallestIndex = currentIndex;
    }

    return smallestIndex;
  }, 0);
}

/** OPTIMIZED VERSION (по факту работает медленнее) */
export function selectionSortOptimized(arr) {
  const sorted = [];
  const used = new Array(arr.length).fill(false);

  arr.forEach(() => {
    const smallestIndex = findSmallestUnusedIndex(arr, used);
    sorted.push(arr[smallestIndex]);
    used[smallestIndex] = true;
  });

  return sorted;
}

function findSmallestUnusedIndex(arr, used) {
  return arr.reduce((smallestIdx, _, currIdx, array) => {
    if (
      !used[currIdx] &&
      (smallestIdx === null || array[currIdx] < array[smallestIdx])
    ) {
      smallestIdx = currIdx;
    }

    return smallestIdx;
  }, null);
}
