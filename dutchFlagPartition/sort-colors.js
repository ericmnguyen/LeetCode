/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let boundary = 0;
  let pivot = 1;
  if (nums.length < 2) return nums;
  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] < pivot) {
      [nums[i], nums[boundary]] = [nums[boundary], nums[i]];
      boundary += 1;
    }
  }
  boundary = nums.length - 1;
  for (let j = nums.length - 1; j >= 0; j -= 1) {
    if (nums[j] > pivot) {
      [nums[j], nums[boundary]] = [nums[boundary], nums[j]];
      boundary -= 1;
    }
  }
};
