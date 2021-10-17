/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function (s) {
  let hashMap = new Map();
  let count = 0;
  for (let i = 0; i < s.length; i += 1) {
    hashMap.set(s[i], hashMap.has(s[i]) ? hashMap.get(s[i]) + 1 : 1);
  }

  for (item of hashMap) {
    if (item[1] % 2 === 1) {
      count += 1;
    }
  }
  if (count > 1) {
    return false;
  }
  return true;
};
