/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let l = 1;
  let r = numbers.length;
  while (l !== r) {
    let sum = numbers[l - 1] + numbers[r - 1];
    if (sum === target) {
      return [l, r];
    } else if (sum > target) {
      r -= 1;
    } else {
      l += 1;
    }
  }
};
