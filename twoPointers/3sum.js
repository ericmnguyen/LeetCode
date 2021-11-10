/**
 * @param {number[]} nums
 * @return {number[][]}
 * Step 1: sort the array
 * Step 2: x will be a negative number in order to do sum with the others => equal to 0
 * Step 3: Do 2Sum with y and z
 */
var threeSum = function (nums) {
  let x = 0;
  let y = 0;
  let z = 0;
  let result = [];
  let subSet = new Set();
  //sort the array
  nums.sort((a, b) => a - b);
  if (nums[x] > 0 || nums.length <= 1) return [];
  while (nums[x] <= 0) {
    y = x + 1;
    z = nums.length - 1;
    while (y < z) {
      let smallSum = nums[x] + nums[y] + nums[z];
      if (smallSum > 0) {
        z -= 1;
      } else if (smallSum < 0) {
        y += 1;
      } else {
        if (!subSet.has(nums[x] + ',' + nums[y] + ',' + nums[z])) {
          result.push([nums[x], nums[y], nums[z]]);
          subSet.add(nums[x] + ',' + nums[y] + ',' + nums[z]);
        }
        y += 1;
      }
    }
    x += 1;

    //this will decrease runtime by 80%
    while (nums[x] === nums[x - 1] && x < nums.length) {
      x += 1;
    }
  }
  return result;
};
