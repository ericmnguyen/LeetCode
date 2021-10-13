/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let lastCharacter = '';
  let result = '';
  for (let i = 0; i < s.length; i += 1) {
    if (
      (lastCharacter === '(' && s[i] === ')') ||
      (lastCharacter === '{' && s[i] === '}') ||
      (lastCharacter === '[' && s[i] === ']')
    ) {
      result = result.substring(0, result.length - 1);
      lastCharacter = result.length ? result[result.length - 1] : '';
    } else {
      result = result.concat(s[i]);
      lastCharacter = s[i];
    }
  }
  return !result;
};
