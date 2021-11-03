/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.round(left + (right - left) / 2);
    if (nums[left] <= nums[right]) return nums[left];
    if (nums[left] <= nums[mid]) {
      //smallest ele is in right side
      left = mid + 1;
    } else {
      //smallest ele is in left side
      right = mid;
      left += 1;
    }
  }
};
