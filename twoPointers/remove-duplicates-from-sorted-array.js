/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let s = 0;
  if (nums.length === 0) return 0;
  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] !== nums[i - 1]) {
      nums[s] = nums[i];
      s += 1;
    }
  }
  return s;
};
