/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  let mergeList = [];
  let sortedIntervals = intervals.sort((a, b) => a[0] - b[0]);
  let left = sortedIntervals[0][0];
  let right = sortedIntervals[0][1];

  for (let i = 0; i < sortedIntervals.length; i += 1) {
    if (right >= sortedIntervals[i][0]) {
      right = Math.max(right, sortedIntervals[i][1]);
    } else {
      mergeList.push([left, right]);
      left = sortedIntervals[i][0];
      right = sortedIntervals[i][1];
    }
  }
  mergeList.push([left, right]);

  return mergeList;
};
