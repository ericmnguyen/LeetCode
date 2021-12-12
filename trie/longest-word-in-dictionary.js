/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function (words) {
  words.sort((a, b) => a.length - b.length);
  let dict = {};
  let result = '';
  for (let word of words) {
    insert(word);
  }
  function insert(word) {
    let node = dict;
    let sum = 0;
    for (let char = 0; char < word.length; char += 1) {
      sum += 1;
      if (!node[word[char]]) {
        if (char === word.length - 1) {
          node[word[char]] = {};
          if (sum > result.length) {
            result = word;
          } else if (word.length === result.length) {
            //compare 2 char to get the smallest lexicographical order
            for (let i = 0; i < sum; i += 1) {
              let currCharCode = word[i].charCodeAt(0);
              let resCharCode = result[i].charCodeAt(0);
              if (currCharCode < resCharCode) {
                result = word;
                break;
              } else if (currCharCode > resCharCode) {
                break;
              }
            }
          }
        }
        return;
      }
      node = node[word[char]];
    }
  }
  return result;
};
