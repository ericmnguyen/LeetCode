/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
  let hashMap = new Map();
  let result = 0;
  for (let i = 0; i < nums.length; i += 1) {
    hashMap.set(nums[i], hashMap.has(nums[i]) ? hashMap.get(nums[i]) + 1 : 1);
  }
  for (const item of hashMap) {
    if (item[1] === 1) {
      result += item[0];
    }
  }
  return result;
};
