/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
var isPrefixString = function (s, words) {
  let cp = '';
  let i = 0;
  while (i < words.length) {
    cp += words[i];
    if (s === cp) {
      return true;
    }
    i += 1;
  }
  return false;
};
