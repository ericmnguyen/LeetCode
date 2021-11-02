/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
  let lo = 0;
  let hi = arr.length - 1;
  while (lo <= hi) {
    let mid = Math.round(lo + (hi - lo) / 2);
    console.log(mid);
    if (arr[mid] > arr[mid + 1] && arr[mid] > arr[mid - 1]) {
      return mid;
    } else if (arr[mid] < arr[mid + 1]) {
      lo = mid + 1;
    } else if (arr[mid] < arr[mid - 1]) {
      hi = mid - 1;
    }
  }
};
