function findMinMax(arr) {
  let min = arr[0];
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    } else if (arr[i] > max) {
      max = arr[i];
    }
  }

  return { low: min, high: max };
}

const arr = [4, 2, 6, 88, 3, 11];
const result = findMinMax(arr);

console.log(`Low: ${result.low}, High: ${result.high}`);
