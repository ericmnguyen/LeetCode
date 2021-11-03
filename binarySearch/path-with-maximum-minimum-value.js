/**
 * @param {number[][]} grid
 * @return {number}
 */
var maximumMinimumPath = function (grid) {
  let hi = 0;
  let lo = 0;
  mid = 0;
  newGrid = [...grid];
  visited = new Set();
  let result = 0;

  for (let i = 0; i < grid.length; i += 1) {
    for (let j = 0; j < grid[0].length; j += 1) {
      if (hi < grid[i][j]) {
        hi = grid[i][j];
      }
    }
  }
  while (lo <= hi) {
    visited = new Set();
    mid = Math.round(lo + (hi - lo) / 2);
    if (grid[0][0] >= mid) {
      dfs(0, 0);
    }
    if (visited.has(grid.length - 1 + ',' + (grid[0].length - 1))) {
      result = mid;
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
  return result;
};

var dfs = (r, c) => {
  visited.add(r.toString() + ',' + c.toString());
  if (r !== newGrid.length - 1 || c !== newGrid[0].length - 1) {
    let direction = [
      [0, 1],
      [1, 0],
      [0, -1],
      [-1, 0],
    ];
    for (let i = 0; i < direction.length; i += 1) {
      let lat = r + direction[i][0];
      let long = c + direction[i][1];
      if (
        lat >= 0 &&
        lat < newGrid.length &&
        long >= 0 &&
        long < newGrid[0].length &&
        !visited.has(lat + ',' + long) &&
        newGrid[lat][long] >= mid
      ) {
        dfs(lat, long);
      }
    }
  }
};
