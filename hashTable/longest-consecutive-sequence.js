/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  let result = 0;
  let numsCollection = new Set(nums);

  for (let i = 0; i < nums.length; i += 1) {
    // check if it's the start of the sequence
    if (!numsCollection.has(nums[i] - 1)) {
      let seqLength = 0;
      // check if it has consecutive number after
      while (numsCollection.has(nums[i] + 1 + seqLength)) {
        seqLength += 1;
      }
      result = Math.max(seqLength + 1, result);
    }
  }
  return result;
};
