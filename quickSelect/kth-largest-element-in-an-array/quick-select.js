/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
/** 
    Using quick select for this math.
    Sort the array with a pivot then if swap pivot with nums[boundary]
    If boundary === largestIndex => That's the result
    Else if boundary < largestIndex =>  Do quickSelect recursion from boundary to the right
    Else if boundary > largestIndex =>  Do quickSelect recursion from boundary to the left
*/
var findKthLargest = function (nums, k) {
  const largestIndex = nums.length - k;

  var quickSelect = (l, r) => {
    let boundary = l;
    let pivot = nums[r];
    for (let i = l; i <= r; i += 1) {
      if (nums[i] < pivot) {
        [nums[i], nums[boundary]] = [nums[boundary], nums[i]];
        boundary += 1;
      }
    }
    [nums[r], nums[boundary]] = [nums[boundary], nums[r]];

    if (boundary === largestIndex) {
      return nums[boundary];
    } else if (boundary < largestIndex) {
      //left side
      return quickSelect(boundary + 1, r);
    } else if (boundary > largestIndex) {
      //right side
      return quickSelect(l, boundary - 1);
    }
  };
  return quickSelect(0, nums.length - 1);
};
