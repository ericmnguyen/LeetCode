/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  let lastCharacter = '';
  let result = '';
  for (let i = 0; i < s.length; i += 1) {
    if (lastCharacter !== s[i]) {
      result = result.concat(s[i]);
      lastCharacter = s[i];
    } else {
      result = result.substring(0, result.length - 1);
      lastCharacter = result[result.length - 1];
    }
  }
  return result;
};
