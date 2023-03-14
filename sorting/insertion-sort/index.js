const randomArrayNumbers = require("../../random");

function insertionSort(arr) {
  let actual;

  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;

    actual = arr[i];

    while (j >= 0 && actual < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = actual;
  }

  return arr;
}

console.log(insertionSort(randomArrayNumbers));
