/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCost = function (costs) {
  let dp = [];

  for (let i = 0; i <= costs.length; i += 1) {
    dp[i] = new Array(3).fill(0);
  }

  for (let i = costs.length - 1; i >= 0; i -= 1) {
    dp[i][0] = Math.min(dp[i + 1][1], dp[i + 1][2]) + costs[i][0];
    dp[i][1] = Math.min(dp[i + 1][0], dp[i + 1][2]) + costs[i][1];
    dp[i][2] = Math.min(dp[i + 1][0], dp[i + 1][1]) + costs[i][2];
  }
  return Math.min(dp[0][0], dp[0][1], dp[0][2]);
};
