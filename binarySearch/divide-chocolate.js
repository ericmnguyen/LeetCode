/**
 * @param {number[]} sweetness
 * @param {number} k
 * @return {number}
 */
var maximizeSweetness = function (sweetness, k) {
  let min = 1;
  let max = 0;
  for (let i = 0; i < sweetness.length; i += 1) {
    max += sweetness[i];
  }

  while (min < max) {
    let mid = Math.round(min + (max - min) / 2);
    if (canSplit(mid, k, sweetness)) {
      min = mid;
    } else {
      max = mid - 1;
    }
  }
  return min;
};

var canSplit = (maxSweet, friends, sweetness) => {
  let sumSweet = 0;
  let chunks = 0;
  for (let i = 0; i < sweetness.length; i += 1) {
    sumSweet += sweetness[i];
    if (sumSweet >= maxSweet) {
      chunks += 1;
      sumSweet = 0;
    }
  }
  if (chunks >= friends + 1) {
    return true;
  }
  return false;
};
