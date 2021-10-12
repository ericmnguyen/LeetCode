/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
  const listPoints = new Map();
  let arr = [];
  let result = [];
  for (let i = 0; i < points.length; i += 1) {
    let sumSquare = 0;
    let order = 0;
    sumSquare = Math.pow(points[i][0], 2) + Math.pow(points[i][1], 2);
    order = listPoints.has(sumSquare) ? sumSquare + 1 : sumSquare;
    listPoints.set(order, points[i]);
    arr.push(order);
  }
  arr.sort((a, b) => a - b);
  for (let i = 0; i < k; i += 1) {
    result.push(listPoints.get(arr[i]));
  }
  return result;
};
