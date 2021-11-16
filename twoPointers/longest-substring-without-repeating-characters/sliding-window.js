/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let result = 0;
  for (let i = 0; i < s.length; i += 1) {
    let visited = new Set();
    for (let j = i; j < s.length; j += 1) {
      if (visited.has(s[j])) {
        break;
      } else {
        visited.add(s[j]);
        result = Math.max(result, visited.size);
      }
    }
  }
  return result;
};
