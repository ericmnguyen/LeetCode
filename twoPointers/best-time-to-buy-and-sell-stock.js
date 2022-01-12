/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let l = 0;
  let result = 0;
  for (let i = 1; i < prices.length; i += 1) {
    if (prices[i] < prices[l]) {
      l = i;
    }
    result = Math.max(result, prices[i] - prices[l]);
  }
  return result;
};
