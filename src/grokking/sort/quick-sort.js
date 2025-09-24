export function quickSort(arr) {
  if (arr.length < 2) return arr;

  const pivot = arr[Math.floor(Math.random() * arr.length)];
  const less = [];
  const equal = [];
  const greater = [];

  arr.forEach((elem) => {
    if (elem < pivot) {
      less.push(elem);
    } else if (elem > pivot) {
      greater.push(elem);
    } else {
      equal.push(elem);
    }
  });

  return quickSort(less).concat(equal, quickSort(greater));
}
