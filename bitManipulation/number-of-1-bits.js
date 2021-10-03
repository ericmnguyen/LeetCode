/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let stringN = (n >>> 0).toString(2);
  let count = 0;
  for (let i = 0; i <= stringN.length; i += 1) {
    if (stringN[i] == '1') {
      count++;
    }
  }
  return count;
};
