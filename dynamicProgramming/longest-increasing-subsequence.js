/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  let dp = [];
  let result = 0;
  for (let item of nums) {
    dp.push(1);
  }
  for (let i = 1; i < nums.length; i += 1) {
    for (let j = 0; j < i; j += 1) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  for (let item of dp) {
    result = Math.max(item, result);
  }
  return result;
};
