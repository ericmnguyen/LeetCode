/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let res = 0;
  let s = 0;
  let f = 0;
  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] === 1 && nums[i] !== nums[i - 1]) {
      s = i;
    }
    if (nums[i] == 1 && nums[i + 1] !== 1) {
      f = i;
      if (res < f - s + 1) {
        res = f - s + 1;
      }
    }
  }
  return res;
};
