/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function (nums) {
  let evenBoundary = [];
  let oddBoundary = [];
  if (nums.length === 1) return;
  for (let i = 0; i < nums.length; i += 1) {
    if (i % 2 === 0 && nums[i] % 2 !== 0) {
      evenBoundary.push(i);
    } else if (i % 2 === 1 && nums[i] % 2 !== 1) {
      oddBoundary.push(i);
    }
    if (evenBoundary.length && oddBoundary.length) {
      [nums[evenBoundary[0]], nums[oddBoundary[0]]] = [
        nums[oddBoundary[0]],
        nums[evenBoundary[0]],
      ];
      evenBoundary.splice(0, 1);
      oddBoundary.splice(0, 1);
    }
  }
  return nums;
};
