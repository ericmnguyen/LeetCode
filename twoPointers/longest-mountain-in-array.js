/**
 * @param {number[]} arr
 * @return {number}
 */
var longestMountain = function (arr) {
  let s = null;
  let f = 0;
  let hasPeak = false;
  let result = 0;
  for (let i = 0; i < arr.length; i += 1) {
    f = i;
    if (
      (arr[i - 1] >= arr[i] && arr[i] <= arr[i + 1]) ||
      (i === 0 && arr[i] < arr[i + 1]) ||
      (i === arr.length - 1 && arr[i] < arr[i - 1])
    ) {
      if (s !== null && hasPeak) {
        result = result < f - s + 1 ? f - s + 1 : result;
      }
      s = i;
      hasPeak = false;
    } else if (arr[i - 1] < arr[i] && arr[i + 1] < arr[i]) {
      hasPeak = true;
    }
  }
  return result;
};
