/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  if (wordList.length <= 2) return 0;
  let visited = new Map();
  let q = [];
  q.push([beginWord, 1]);
  visited.set(beginWord, true);

  while (q.length > 0) {
    let adjList = new Map();
    const word = q[0][0];
    let distance = q[0][1];
    const nearestWord = beginWord.length - 1;
    q.shift();
    if (word === endWord) {
      return distance;
    }
    for (let item of wordList) {
      if (!visited.has(item) && item !== word) {
        let count = 0;
        for (let i = 0; i < beginWord.length; i += 1) {
          if (item[i] === word[i]) {
            count += 1;
          }
        }
        if (adjList.has(count)) {
          adjList.set(count, [...adjList.get(count), item]);
        } else {
          adjList.set(count, [item]);
        }
      }
    }
    if (adjList.has(nearestWord)) {
      for (let item of adjList.get(nearestWord)) {
        if (!visited.has(item)) {
          q.push([item, distance + 1]);
          visited.set(item, true);
        }
      }
    }
  }
  return 0;
};
