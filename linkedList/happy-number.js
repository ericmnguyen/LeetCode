/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  if (n === 1) return true;
  let sum = n;
  const sumset = new Set();
  while (sum !== 1) {
    const numbers = sum.toString();
    sum = 0;
    for (let i = 0; i < numbers.length; i += 1) {
      sum += Math.pow(numbers[i], 2);
    }

    if (!sumset.has(sum)) {
      sumset.add(sum);
    } else {
      return false;
    }
  }
  return true;
};
