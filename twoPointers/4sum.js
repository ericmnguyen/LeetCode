/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  let a = 0;
  let addedSum = new Set();
  let result = [];
  nums.sort((a, b) => a - b);
  while (a < nums.length - 3) {
    let b = a + 1;
    while (b < nums.length - 2) {
      let remain = target - nums[a] - nums[b];
      let c = b + 1;
      let d = nums.length - 1;
      while (c < d) {
        let subSum = nums[c] + nums[d];
        if (
          subSum === remain &&
          !addedSum.has(nums[a] + ',' + nums[b] + ',' + nums[c] + ',' + nums[d])
        ) {
          result.push([nums[a], nums[b], nums[c], nums[d]]);
          addedSum.add(nums[a] + ',' + nums[b] + ',' + nums[c] + ',' + nums[d]);
        } else if (subSum < remain) {
          c += 1;
        } else {
          d -= 1;
        }
      }
      b += 1;
    }
    a += 1;
  }
  return result;
};
