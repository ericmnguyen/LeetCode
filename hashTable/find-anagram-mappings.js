/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var anagramMappings = function (nums1, nums2) {
  let hashMap = new Map();
  let arr = [];
  for (let i = 0; i < nums2.length; i += 1) {
    hashMap.set(nums2[i], i);
  }
  for (let j = 0; j < nums1.length; j += 1) {
    arr.push(hashMap.get(nums1[j]));
  }
  return arr;
};
