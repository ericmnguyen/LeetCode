/**
 * @param {string[]} sentence1
 * @param {string[]} sentence2
 * @param {string[][]} similarPairs
 * @return {boolean}
 */
var areSentencesSimilar = function (sentence1, sentence2, similarPairs) {
  if (sentence1.length !== sentence2.length) return false;
  let adjList = new Set();
  for (let item of similarPairs) {
    adjList.add(item[0] + item[1]);
    adjList.add(item[1] + item[0]);
  }
  for (let i = 0; i < sentence1.length; i += 1) {
    if (sentence1[i] === sentence2[i]) {
      continue;
    }
    if (
      adjList.has(sentence1[i] + sentence2[i]) ||
      adjList.has(sentence2[i] + sentence1[i])
    ) {
      continue;
    } else {
      return false;
    }
  }
  return true;
};
