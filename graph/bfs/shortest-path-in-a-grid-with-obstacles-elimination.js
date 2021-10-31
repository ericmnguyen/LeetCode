/**
 * Solve this math using BFS to find the shortest way
 * Problem: Having k chances to eliminate the obstacles
 * Solution: To find the shortest way, there is a cell where all routes passes. That cell will be replace the lives with the way which have the most lives left.
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var shortestPath = function (grid, k) {
  const maxRowSize = grid.length;
  const maxColSize = grid[0].length;
  const lives = k;
  const x = [1, 0, -1, 0];
  const y = [0, 1, 0, -1];

  //queue contains 4 ele: num of row, num of col, distance, lives left
  let q = [[0, 0, 0, lives]];

  //create a new dimension grid to mark all cells with lives = -1
  const dimGrid = JSON.parse(JSON.stringify(grid));
  for (let i = 0; i < dimGrid.length; i += 1) {
    for (let j = 0; j < dimGrid[0].length; j += 1) {
      dimGrid[i][j] = -1;
    }
  }

  //do BFS
  while (q.length > 0) {
    const r = q[0][0];
    const c = q[0][1];
    const distance = q[0][2];
    let cLives = q[0][3];
    q.shift();

    if (r === maxRowSize - 1 && c === maxColSize - 1) {
      return distance;
    }

    // handle cLives when passing through an obstacle
    if (grid[r][c] === 1) {
      cLives -= 1;
      dimGrid[r][c] = cLives;
    }

    for (let i = 0; i < x.length; i += 1) {
      const lat = r + x[i];
      const long = c + y[i];
      if (
        lat >= 0 &&
        lat < maxRowSize &&
        long >= 0 &&
        long < maxColSize &&
        dimGrid[lat][long] < cLives
      ) {
        //set new cLives to related cells, set new cLives to dimension grid
        q.push([lat, long, distance + 1, cLives]);
        dimGrid[lat][long] = cLives;
      }
    }
  }
  return -1;
};
