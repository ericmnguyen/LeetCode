/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let arr = [];
  let hashMap = new Map();
  for (let i = 0; i < nums.length; i += 1) {
    let a = target - nums[i];
    if (hashMap.has(a)) {
      arr.push(hashMap.get(a));
      arr.push(i);
    } else {
      hashMap.set(nums[i], i);
    }
  }
  return arr;
};
