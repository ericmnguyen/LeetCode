/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function (nums) {
  if (nums.length < 2) return;
  let oddArr = [];
  let evenArr = [];
  let result = [];
  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] % 2 === 0) {
      evenArr.push(nums[i]);
    } else {
      oddArr.push(nums[i]);
    }
  }
  for (let j = 0; j < evenArr.length; j += 1) {
    result.push(evenArr[j]);
    result.push(oddArr[j]);
  }
  return result;
};
