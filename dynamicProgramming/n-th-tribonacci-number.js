/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  let cache = {};
  return trib(n);

  function trib(n) {
    if (n === 0) {
      return n;
    } else if (n <= 2) {
      return 1;
    } else {
      if (cache[n]) {
        return cache[n];
      } else {
        cache[n] = trib(n - 1) + trib(n - 2) + trib(n - 3);
        return cache[n];
      }
    }
  }
};
