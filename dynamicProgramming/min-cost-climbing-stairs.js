/**
 * @param {number[]} cost
 * @return {number}
 */
console.log(minCostClimbingStairs([1, 2, 32, 2, 4, 2, 2]));
var minCostClimbingStairs = function (cost) {
  cost.push(0);
  let cache = {};
  return dp(cost.length - 1);

  function dp(n) {
    if (n < 2) {
      return cost[n];
    } else {
      if (cache[n]) {
        return cache[n];
      } else {
        cache[n] = Math.min(dp(n - 1), dp(n - 2)) + cost[n];
        return cache[n];
      }
    }
  }
};
