/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function (s, k) {
  let result = 0;
  for (let i = 0; i < s.length; i += 1) {
    let visited = new Set();
    for (let j = i; j < s.length; j += 1) {
      if (!visited.has(s[j])) {
        if (visited.size < k) {
          visited.add(s[j]);
        } else {
          break;
        }
      }
      result = Math.max(result, j - i + 1);
    }
  }
  return result;
};
