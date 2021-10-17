/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  let hashMap = new Map();
  for (let i = 0; i < nums.length; i += 1) {
    if (hashMap.has(nums[i]) && Math.abs(hashMap.get(nums[i]) - i) <= k) {
      return true;
    } else {
      hashMap.set(nums[i], i);
    }
  }
  return false;
};
