/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  if (word1 === word2) return 0;
  let dp = [];
  let m = word1.length;
  let n = word2.length;

  for (let i = 0; i <= m; i += 1) {
    dp[i] = new Array(n + 1).fill(0);
  }

  for (let i = 1; i <= m; i += 1) {
    for (let j = 1; j <= n; j += 1) {
      if (word1.charAt(i - 1) !== word2.charAt(j - 1)) {
        dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
      } else {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      }
    }
  }
  return word1.length - dp[m][n] + (word2.length - dp[m][n]);
};
