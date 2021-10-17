/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let hashMap = new Map();
  for (let i = 0; i < nums.length; i += 1) {
    if (hashMap.has(nums[i])) {
      return true;
    }
    hashMap.set(nums[i], nums[i]);
  }
  return false;
};
