/**
 * @param {number[][]} heights
 * @return {number}
 */
var minimumEffortPath = function (heights) {
  let max = 0;
  let min = 0;
  let result = 0;
  let visited = new Set();
  const direction = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  //find maximum element
  for (let i = 0; i < heights.length; i += 1) {
    for (let j = 0; j < heights[0].length; j += 1) {
      if (max < heights[i][j]) {
        max = heights[i][j];
      }
    }
  }
  while (max >= min) {
    visited = new Set();
    const mid = Math.round(min + (max - min) / 2);
    canDfs(0, 0, mid);
    if (visited.has(heights.length - 1 + ',' + (heights[0].length - 1))) {
      result = mid;
      max = mid - 1;
    } else {
      min = mid + 1;
    }
  }

  function canDfs(r, c, maxAbs) {
    visited.add(r + ',' + c);
    if (!visited.has(heights.length - 1 + ',' + (heights[0].length - 1))) {
      for (let i = 0; i < 4; i += 1) {
        let lat = r + direction[i][0];
        let long = c + direction[i][1];
        if (
          lat >= 0 &&
          lat < heights.length &&
          long >= 0 &&
          long < heights[0].length &&
          !visited.has(lat + ',' + long) &&
          Math.abs(heights[r][c] - heights[lat][long]) <= maxAbs
        ) {
          canDfs(lat, long, maxAbs);
        }
      }
    }
  }
  return result;
};
