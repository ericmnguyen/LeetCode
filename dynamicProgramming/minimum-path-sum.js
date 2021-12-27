/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  let dp = [];
  let m = grid.length;
  let n = grid[0].length;

  for (let i = 0; i <= m; i += 1) {
    dp[i] = new Array(n + 1).fill(Infinity);
  }

  dp[0][1] = 0;

  for (let i = 1; i <= m; i += 1) {
    for (let j = 1; j <= n; j += 1) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i - 1][j - 1];
    }
  }
  return dp[m][n];
};
