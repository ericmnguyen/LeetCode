/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let arr = [];
  let bigArr = [];
  for (let i = 0; i < Math.pow(2, nums.length) - 1; i += 1) {
    for (let j = 0; j < nums.length; j += 1) {
      let bit = getBits(i, j);
      if (bit === 1) {
        arr.push(nums[j]);
      }
    }
    bigArr.push(arr);
    arr = [];
  }
  bigArr.push(nums);
  return bigArr;
};

const getBits = (x, pos) => {
  return (x >>> pos) & 1;
};
