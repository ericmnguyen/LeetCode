/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this.sums = [...nums];
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  let leftSum = 0;
  let rightSum = 0;
  for (let i = 0; i < left; i += 1) {
    leftSum += this.sums[i];
  }
  for (let j = 0; j <= right; j += 1) {
    rightSum += this.sums[j];
  }
  return rightSum - leftSum;
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
