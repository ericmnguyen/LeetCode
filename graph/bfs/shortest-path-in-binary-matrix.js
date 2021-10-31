/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function (grid) {
  if (grid[0][0] !== 0) return -1;
  let q = [];
  const gridSize = grid.length - 1;
  const x = [1, 1, 0, -1, -1, -1, 0, 1];
  const y = [0, 1, 1, 1, 0, -1, -1, -1];
  grid[0][0] = 1;
  q.push([0, 0, 1]);
  while (q.length > 0) {
    let r = q[0][0];
    let c = q[0][1];
    let distance = q[0][2];
    if (r === gridSize && c === gridSize) {
      return distance;
    }
    q.shift();
    for (let i = 0; i < 8; i += 1) {
      let lat = r + x[i];
      let long = c + y[i];
      if (
        lat >= 0 &&
        long >= 0 &&
        lat <= gridSize &&
        long <= gridSize &&
        grid[lat][long] === 0
      ) {
        q.push([lat, long, distance + 1]);
        grid[lat][long] = 1;
      }
    }
  }
  return -1;
};
