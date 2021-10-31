/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let visitedLand = new Map();
  let dr = [0, 1, 0, -1];
  let dc = [1, 0, -1, 0];
  let result = 0;

  for (let r = 0; r < grid.length; r += 1) {
    for (let c = 0; c < grid[r].length; c += 1) {
      if (
        grid[r][c] === '1' &&
        !visitedLand.has(r.toString() + ',' + c.toString())
      ) {
        result += 1;
        dfs(r, c);
      }
    }
  }

  function dfs(r, c) {
    visitedLand.set(r.toString() + ',' + c.toString(), true);
    for (let k = 0; k < dr.length; k += 1) {
      let i = r + dr[k];
      let j = c + dc[k];
      if (
        i >= 0 &&
        i < grid.length &&
        j >= 0 &&
        j < grid[0].length &&
        !visitedLand.has(i.toString() + ',' + j.toString()) &&
        grid[i][j] === '1'
      ) {
        dfs(i, j);
      }
    }
  }
  return result;
};
