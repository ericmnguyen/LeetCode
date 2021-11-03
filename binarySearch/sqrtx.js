/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let result = 0;
  if (x === 1) return 1;
  for (let i = 0; i < x; i += 1) {
    if (i * i <= x) {
      result = i;
    } else {
      break;
    }
  }
  return result;
};
