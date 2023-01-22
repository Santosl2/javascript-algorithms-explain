// Description: Bubble sort algorithm
const randomArrayNumbers = require("../random");

// Bubble sort algorithm
function bubbleSort(arrNumb) {
  const total = arrNumb.length;

  for (let i = 0; i < total; i++) {
    for (let j = 0; j < total - i - 1; j++) {
      if (arrNumb[j] > arrNumb[j + 1]) {
        const temp = arrNumb[j];

        arrNumb[j] = arrNumb[j + 1];
        arrNumb[j + 1] = temp;
      }
    }
  }
}

console.log("Before Bubble Sorting", randomArrayNumbers);
bubbleSort(randomArrayNumbers);
console.log("After Bubble Sorting", randomArrayNumbers);
