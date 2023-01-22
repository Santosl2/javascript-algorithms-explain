// Generate random numbers
const TOTAL_NUMBERS_TO_GENERATE = 10;

const randomArrayNumbers = new Array(TOTAL_NUMBERS_TO_GENERATE)
  .fill(0)
  .map((_, i) => Math.floor(Math.random() * 100));

module.exports = randomArrayNumbers;
