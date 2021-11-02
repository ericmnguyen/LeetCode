/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let right = nums.length - 1;
  let left = 0;
  while (left <= right) {
    let mid = Math.round(left + (right - left) / 2);
    if (nums[mid] === target) {
      return mid;
    }
    //check if rotation happens in left side
    if (nums[mid] >= nums[0]) {
      if (nums[mid] > target && target >= nums[left]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      // rotation definitely happens in right side
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1;
};
