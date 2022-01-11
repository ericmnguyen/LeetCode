/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let result = [binSearch(true), binSearch(false)];

  function binSearch(isLeft) {
    let left = 0;
    let right = nums.length - 1;
    let p = -1;
    while (left <= right) {
      let mid = Math.round(left + (right - left) / 2);
      if (target < nums[mid]) {
        right = mid - 1;
      } else if (target > nums[mid]) {
        left = mid + 1;
      } else {
        p = mid;
        if (isLeft) {
          right = mid - 1;
        } else {
          left = mid + 1;
        }
      }
    }
    return p;
  }
  return result;
};
