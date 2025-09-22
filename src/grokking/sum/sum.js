export function sum(arr) {
  return arr.reduce((a, b) => a + b, 0);
}

export function sumWithFor(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

export function sumWithRecursion(arr) {
  if (arr.length < 2) return arr[0] ?? 0;

  return arr[0] + sumWithRecursion(arr.slice(1));
}
