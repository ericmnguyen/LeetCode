/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  if (nums.length < 2) return nums;
  let freqMap = new Map();
  let freqArr = [];
  for (let i = 0; i < nums.length; i += 1) {
    if (freqMap.has(nums[i])) {
      freqMap.set(nums[i], freqMap.get(nums[i]) + 1);
    } else {
      freqMap.set(nums[i], 1);
    }
  }
  for (let item of freqMap) {
    freqArr.push(item[1]);
  }
  // Do find kth largest elements in freqArr
  const kthLargestIndex = findKthLargestElements(freqArr, k);
  freqArr = [];
  for (item of freqMap) {
    if (item[1] >= kthLargestIndex) {
      freqArr.push(item[0]);
    }
  }
  return freqArr;
};

var findKthLargestElements = (arr, k) => {
  k = arr.length - k;
  function quickSelect(l, r) {
    let pivot = arr[r];
    let p = l;
    for (let i = l; i < r; i += 1) {
      if (arr[i] <= pivot) {
        [arr[i], arr[p]] = [arr[p], arr[i]];
        p += 1;
      }
    }
    [arr[p], arr[r]] = [arr[r], arr[p]];
    if (p < k) {
      return quickSelect(p + 1, r);
    } else if (p > k) {
      return quickSelect(l, p - 1);
    } else {
      return arr[p];
    }
  }
  return quickSelect(0, arr.length - 1);
};
