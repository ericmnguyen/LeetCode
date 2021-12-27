/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  let dp = [];
  for (let i = 0; i <= m; i += 1) {
    dp[i] = new Array(n + 1).fill(1);
  }

  for (let i = 1; i <= m; i += 1) {
    for (let j = 1; j <= n; j += 1) {
      dp[i][j] = dp[i][j - 1] + dp[i - 1][j];
    }
  }
  return dp[m - 1][n - 1];
};
