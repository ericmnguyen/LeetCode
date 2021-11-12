/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
  let s = 0;
  let result = 0;
  let prefixProd = 1;
  if (k <= 1) return 0;
  for (let f = 0; f < nums.length; f += 1) {
    prefixProd *= nums[f];
    while (prefixProd >= k) {
      prefixProd /= nums[s];
      s += 1;
    }
    result += f - s + 1;
  }
  return result;
};
