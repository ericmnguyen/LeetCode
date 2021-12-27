/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function (matrix) {
  let dp = [];
  let m = matrix.length;
  let result = Infinity;

  for (let i = 0; i <= m; i += 1) {
    dp[i] = new Array(m + 1).fill(0);
    dp[i][0] = Infinity;
    dp[i][m + 1] = Infinity;
  }

  for (let i = 1; i <= m; i += 1) {
    for (let j = 1; j <= m; j += 1) {
      dp[i][j] =
        Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i - 1][j + 1]) +
        matrix[i - 1][j - 1];
      if (i === m) {
        result = Math.min(dp[i][j], result);
      }
    }
  }
  return result;
};
