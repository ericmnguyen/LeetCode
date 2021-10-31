/**
 * Use DFS graph to solve this math
 * dr, dc is coordinate of the related lands of the same island
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  let visitedLand = new Map();
  let count = 0;
  let result = 0;
  let dr = [0, 1, 0, -1];
  let dc = [1, 0, -1, 0];
  for (let r = 0; r < grid.length; r += 1) {
    for (let c = 0; c < grid[r].length; c += 1) {
      if (
        grid[r][c] == 1 &&
        !visitedLand.has(r.toString() + ',' + c.toString())
      ) {
        dfs(r, c);
        if (count > result) {
          result = count;
        }
        count = 0;
      }
    }
  }

  function dfs(r, c) {
    visitedLand.set(r.toString() + ',' + c.toString(), true);
    count += 1;
    for (let k = 0; k < dr.length; k += 1) {
      let i = dr[k] + r;
      let j = dc[k] + c;
      if (
        i >= 0 &&
        i < grid.length &&
        j >= 0 &&
        j < grid[i].length &&
        grid[i][j] == 1 &&
        !visitedLand.has(i.toString() + ',' + j.toString())
      ) {
        dfs(i, j);
      }
    }
  }
  return result;
};
