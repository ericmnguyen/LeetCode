/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysWithKDistinct = function (nums, k) {
  return atMostK(nums, k) - atMostK(nums, k - 1);
};

var atMostK = (nums, k) => {
  let count = new Map();
  let i = 0;
  let result = 0;
  for (let j = 0; j < nums.length; j += 1) {
    if (!count.has(nums[j]) || count.get(nums[j]) === 0) {
      count.set(nums[j], 0);
      k -= 1;
    }
    count.set(nums[j], count.get(nums[j]) + 1);
    while (k < 0) {
      count.set(nums[i], count.get(nums[i]) - 1);
      if (count.get(nums[i]) === 0) {
        k += 1;
      }
      i += 1;
    }
    result += j - i + 1;
  }
  return result;
};
