/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxUncrossedLines = function (nums1, nums2) {
  let dp = [];
  let m = nums1.length;
  let n = nums2.length;

  for (let i = 0; i <= m; i += 1) {
    dp[i] = new Array(n + 1).fill(0);
  }
  for (let i = 1; i <= m; i += 1) {
    for (let j = 1; j <= n; j += 1) {
      if (nums1[i - 1] !== nums2[j - 1]) {
        dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
      } else {
        dp[i][j] = 1 + dp[i - 1][j - 1];
      }
    }
  }
  return dp[m][n];
};
