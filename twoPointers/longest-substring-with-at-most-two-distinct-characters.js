/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringTwoDistinct = function (s) {
  let visited = new Map();
  let result = 0;
  let j = 0;
  for (let i = 0; i < s.length; i += 1) {
    visited.set(s[i], i);
    if (visited.size > 2) {
      let oldestItem = ['a', s.length - 1];
      for (let item of visited) {
        if (item[1] < oldestItem[1]) {
          oldestItem = item;
        }
      }
      j = oldestItem[1] + 1;
      visited.delete(oldestItem[0]);
    }

    if (i - j + 1 > result) {
      result = i - j + 1;
    }
  }
  return result;
};
