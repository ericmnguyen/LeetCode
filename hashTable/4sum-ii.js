/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function (nums1, nums2, nums3, nums4) {
  let hashMap = new Map();
  let count = 0;
  for (let i = 0; i < nums1.length; i += 1) {
    for (let j = 0; j < nums2.length; j += 1) {
      hashMap.set(
        nums1[i] + nums2[j],
        hashMap.has(nums1[i] + nums2[j])
          ? hashMap.get(nums1[i] + nums2[j]) + 1
          : 1
      );
    }
  }

  for (let i = 0; i < nums3.length; i += 1) {
    for (let j = 0; j < nums4.length; j += 1) {
      if (hashMap.has(-(nums3[i] + nums4[j]))) {
        count += hashMap.get(-(nums3[i] + nums4[j]));
      }
    }
  }
  return count;
};
