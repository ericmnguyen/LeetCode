/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let calc = calcStairs();
  let count = 0;
  return calc(n);

  function calcStairs() {
    let cache = {};
    return function fib(n) {
      count += 1;
      if (n <= 2) {
        return n;
      } else {
        if (cache[n]) {
          return cache[n];
        } else {
          cache[n] = fib(n - 1) + fib(n - 2);
          return cache[n];
        }
      }
    };
  }
};
