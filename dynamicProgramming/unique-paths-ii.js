/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  let dp = [];
  let m = obstacleGrid.length;
  let n = obstacleGrid[0].length;

  if (obstacleGrid[0][0] === 1) return 0;
  for (let i = 0; i <= m; i += 1) {
    dp[i] = new Array(n + 1).fill(0);
  }

  for (let i = 1; i <= m; i += 1) {
    for (let j = 1; j <= n; j += 1) {
      if (i === 1 && j === 1) {
        dp[i][j] = 1;
        continue;
      }
      if (obstacleGrid[i - 1][j - 1] === 1) {
        dp[i][j] = 0;
      } else {
        dp[i][j] = dp[i][j - 1] + dp[i - 1][j];
      }
    }
  }
  return dp[m][n];
};
