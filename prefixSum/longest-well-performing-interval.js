/**
 * @param {number[]} hours
 * @return {number}
 * There are 2 scenarios:
 * 1: if sum of tiring day >= sum of non-tiring day in hours => result = hours.length
 * 2: if calculate i - index of sum - 1 (set index and sum only key of map not exist)
 */
var longestWPI = function (hours) {
  let sum = 0;
  let preMap = new Map();
  let result = 0;
  for (let i = 0; i < hours.length; i += 1) {
    if (hours[i] <= 8) {
      sum -= 1;
    } else {
      sum += 1;
    }

    if (!preMap.has(sum)) {
      preMap.set(sum, i);
    }
    if (sum > 0) {
      result = Math.max(result, i + 1);
    } else if (preMap.has(sum - 1)) {
      result = Math.max(result, i - preMap.get(sum - 1));
    }
  }
  return result;
};
