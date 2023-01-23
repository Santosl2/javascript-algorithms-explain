const randomArrayNumbers = require("../../random");

function quickSort(arr) {
  if (arr.length <= 1) return arr;

  const pivot = arr[0];

  const allLessThanPivot = quickSort(arr.filter((num) => num < pivot));

  const allEqualsPivot = arr.filter((num) => num === pivot);

  const allGreaterThanPivot = quickSort(arr.filter((num) => num > pivot));

  return [...allLessThanPivot, ...allEqualsPivot, ...allGreaterThanPivot];
}

console.log(quickSort(randomArrayNumbers));
