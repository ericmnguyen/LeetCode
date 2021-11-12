/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
  let visited = new Map();
  let j = 0;
  let result = 0;
  for (let i = 0; i < fruits.length; i += 1) {
    visited.set(fruits[i], i);
    if (visited.size > 2) {
      //delete fruit in basket
      let removedIndex = [1, fruits.length - 1];
      for (let item of visited) {
        if (item[1] < removedIndex[1]) {
          removedIndex = item;
        }
      }
      j = removedIndex[1] + 1;
      visited.delete(removedIndex[0]);
    }
    result = Math.max(result, i - j + 1);
  }
  return result;
};
