/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  let boundary = 0;
  if (nums.length < 2) return;
  for (let i = 0; i < nums.length; nums += 1) {
    if (nums[i] % 2 === 0) {
      [nums[i], nums[boundary]] = [nums[boundary], nums[i]];
      boundary += 1;
    }
  }
  return nums;
};
