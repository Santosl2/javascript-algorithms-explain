const randomArrayNumbers = require("../../random");

function heapSort(inputArray) {
  if (inputArray.length < 2) return inputArray;
  let arrLength = inputArray.length;

  for (let i = Math.floor(inputArray.length / 2) - 1; i >= 0; i--) {
    sortParentAndChild(inputArray, arrLength, i);
  }

  for (let i = inputArray.length - 1; i > 0; i--) {
    swap(inputArray, 0, i);
    arrLength--;
    sortParentAndChild(inputArray, arrLength, 0);
  }

  return inputArray;
}

function sortParentAndChild(inputArray, arrLength, parentIndex) {
  const leftIndex = parentIndex * 2 + 1;
  const rightIndex = parentIndex * 2 + 2;
  let maxIndex = parentIndex;
  if (leftIndex < arrLength && inputArray[leftIndex] > inputArray[maxIndex]) {
    maxIndex = leftIndex;
  }
  if (rightIndex < arrLength && inputArray[rightIndex] > inputArray[maxIndex]) {
    maxIndex = rightIndex;
  }
  if (maxIndex !== parentIndex) {
    swap(inputArray, parentIndex, maxIndex);
    sortParentAndChild(inputArray, arrLength, maxIndex);
  }
}

function swap(inputArray, index1, index2) {
  let temp = inputArray[index1];
  inputArray[index1] = inputArray[index2];
  inputArray[index2] = temp;
}

console.log(heapSort(randomArrayNumbers.slice()));
