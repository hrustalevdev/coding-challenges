export function binarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (array[mid] === target) return mid;

    if (array[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

export function binarySearchWithRecursion(array, target, left, right) {
  if (left > right) return -1;

  const mid = Math.floor((left + right) / 2);
  if (array[mid] === target) return mid;

  if (array[mid] < target) {
    return binarySearchWithRecursion(array, target, mid + 1, right);
  } else {
    return binarySearchWithRecursion(array, target, left, mid - 1);
  }
}
