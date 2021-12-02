/**
 * @param {string[]} sentence1
 * @param {string[]} sentence2
 * @param {string[][]} similarPairs
 * @return {boolean}
 */
var areSentencesSimilarTwo = function (sentence1, sentence2, similarPairs) {
  if (sentence1.length !== sentence2.length) return false;
  let parent = new Map();
  let rank = new Map();

  for (let i = 0; i < sentence1.length; i += 1) {
    parent.set(sentence1[i], sentence1[i]);
    parent.set(sentence2[i], sentence2[i]);
    rank.set(sentence1[i], 1);
    rank.set(sentence2[i], 1);
  }

  for (let [u, v] of similarPairs) {
    if (!parent.has(u)) {
      parent.set(u, u);
      rank.set(u, 1);
    }
    if (!parent.has(v)) {
      parent.set(v, v);
      rank.set(v, 1);
    }
    let rootU = find(parent.get(u));
    let rootV = find(parent.get(v));
    if (rootU !== rootV) {
      merge(u, v);
    }
  }

  for (let i = 0; i < sentence1.length; i += 1) {
    if (sentence1[i] === sentence2[i]) {
      continue;
    }
    let rootU = find(parent.get(sentence1[i]));
    let rootV = find(parent.get(sentence2[i]));
    if (rootU !== rootV) return false;
  }

  function find(node) {
    if (parent.get(node) !== node) {
      parent.set(node, find(parent.get(node)));
    }
    return parent.get(node);
  }

  function merge(u, v) {
    let rootU = find(u);
    let rootV = find(v);
    if (rootV === rootU) return;
    if (rank.get(rootU) < rank.get(rootV)) {
      parent.set(rootU, rootV);
    } else {
      parent.set(rootV, rootU);
      if (rank.get(rootU) === rank.get(rootV)) {
        rank.set(rootU, rank.get(rootU) + 1);
      }
    }
  }
  return true;
};
