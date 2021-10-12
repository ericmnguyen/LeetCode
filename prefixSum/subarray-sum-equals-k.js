/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let sum = 0;
  let result = 0;
  const prefixSum = new Map([[0, 1]]);
  for (let i = 0; i < nums.length; i += 1) {
    sum += nums[i];
    if (prefixSum.has(sum - k)) {
      result += prefixSum.get(sum - k);
    }
    prefixSum.set(sum, (prefixSum.get(sum) ? prefixSum.get(sum) : 0) + 1);
  }
  return result;
};
