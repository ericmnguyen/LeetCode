/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  let oddArr = [];
  let evenArr = [];
  if (nums.length < 2) return nums;
  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] % 2 === 0) {
      evenArr.push(nums[i]);
    } else {
      oddArr.push(nums[i]);
    }
  }
  return [...evenArr, ...oddArr];
};
