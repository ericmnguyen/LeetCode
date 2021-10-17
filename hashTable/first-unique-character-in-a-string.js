/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  let result = -1;
  let hashMap = new Map();
  for (let i = 0; i < s.length; i += 1) {
    hashMap.set(s[i], hashMap.get(s[i]) ? hashMap.get(s[i]) + 1 : 1);
  }
  for (let i = 0; i < s.length; i += 1) {
    if (hashMap.get(s[i]) === 1) {
      result = i;
      break;
    }
  }
  return result;
};
