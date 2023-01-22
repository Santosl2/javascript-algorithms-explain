// Description: Merge sort algorithm
const randomArrayNumbers = require("../../random");

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(arrLeft, arrRight) {
  const sorted = [];

  while (arrLeft.length && arrRight.length) {
    if (arrLeft[0] < arrRight[0]) {
      sorted.push(arrLeft.shift());
    } else {
      sorted.push(arrRight.shift());
    }
  }

  return [...sorted, ...arrLeft, ...arrRight];
}

console.log(mergeSort(randomArrayNumbers));
