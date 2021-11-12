/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
  let s = 0;
  let result = 0;
  while (s < nums.length) {
    let prod = 1;
    let subArr = [];
    for (let i = s; i < nums.length; i += 1) {
      prod *= nums[i];
      if (prod < k) {
        subArr.push(nums[i]);
        result += 1;
      } else {
        break;
      }
    }
    s += 1;
  }
  return result;
};
