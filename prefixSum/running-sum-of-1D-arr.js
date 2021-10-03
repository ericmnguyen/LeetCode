/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  let arrA = [];
  let sum = 0;
  for (let i = 0; i < nums.length; i += 1) {
    sum += nums[i];
    arrA.push(sum);
  }
  return arrA;
};
