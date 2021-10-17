/**
 * @param {number[]} nums
 */

/**
 *
 * Calculate prefix sum and push new result to a new array
 * Step1: Create a loop
 * Step2: Calculate prefix sum and add new result to array prefixSum
 * Step3: return the result by using prefixSum at right index minus prefixSum at left - 1 index
 */
var NumArray = function (nums) {
  let prefixSum = [];
  let sum = 0;
  for (let i = 0; i < nums.length; i += 1) {
    sum += nums[i];
    prefixSum.push(sum);
  }
  this.nums = prefixSum;
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  return left === 0 ? this.nums[right] : this.nums[right] - this.nums[left - 1];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
