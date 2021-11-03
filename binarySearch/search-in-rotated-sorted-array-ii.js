/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.round(left + (right - left) / 2);
    if (
      nums[left] === target ||
      nums[mid] === target ||
      nums[right] === target
    ) {
      return true;
    }
    if (nums[left] < nums[mid]) {
      if (nums[left] < target && target <= nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else if (nums[left] > nums[mid]) {
      if (target < nums[right] && nums[mid] <= target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    } else {
      //check if left === mid, then we increase left by 1
      left += 1;
    }
  }
  return false;
};
