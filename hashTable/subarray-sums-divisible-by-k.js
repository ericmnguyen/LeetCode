/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function (nums, k) {
  let hashMap = new Map([[0, 1]]);
  let sum = 0;
  let res = 0;
  for (let i = 0; i < nums.length; i += 1) {
    sum += nums[i];
    let mod = sum % k < 0 ? (sum % k) + k : sum % k;
    if (hashMap.has(mod)) res += hashMap.get(mod);
    hashMap.set(mod, hashMap.has(mod) ? hashMap.get(mod) + 1 : 1);
  }
  return res;
};
