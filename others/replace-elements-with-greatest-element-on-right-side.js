/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
  let result = new Array(arr.length).fill(0);
  let rightEle = -1;
  let maxInt = -1;
  for (let i = arr.length - 1; i >= 0; i -= 1) {
    if (arr[i + 1]) {
      rightEle = arr[i + 1];
    }
    maxInt = Math.max(maxInt, rightEle);
    result[i] = Math.max(maxInt, rightEle);
  }
  return result;
};
