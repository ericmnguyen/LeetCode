/**
 * @param {string} s
 * @return {number}
 * Step 1: check if s[i] is duplicated
 * Step 2: if yes, set l to current index
 * Step 3: calculate result
 * Step 4: set current index to map
 */
var lengthOfLongestSubstring = function (s) {
  let l = 0;
  let result = 0;
  let visited = new Map();
  for (let i = 0; i < s.length; i += 1) {
    if (visited.has(s[i])) {
      l = Math.max(visited.get(s[i]), l);
    }
    result = Math.max(result, i - l + 1);
    visited.set(s[i], i + 1);
  }
  return result;
};
