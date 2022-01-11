/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
  let convertedNum = num;
  let count = 0;
  while (convertedNum !== 0) {
    if (convertedNum % 2 === 0) {
      convertedNum /= 2;
    } else {
      convertedNum -= 1;
    }
    count += 1;
  }
  return count;
};
