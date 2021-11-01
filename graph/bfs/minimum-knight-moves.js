/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var minKnightMoves = function (x, y) {
  const direction = [
    [2, 1],
    [1, 2],
    [-1, 2],
    [-2, 1],
    [-2, -1],
    [-1, -2],
    [1, -2],
    [2, -1],
  ];
  let q = [[0, 0, 0]];
  let adjList = new Map();
  let isFound = false;

  while (q.length > 0) {
    let r = q[0][0];
    let c = q[0][1];
    let steps = q[0][2];
    q.shift();
    if (r === x && c === y) {
      return steps;
    }

    if (!isFound) {
      for (let i = 0; i < direction.length; i += 1) {
        let lat = r + direction[i][0];
        let long = c + direction[i][1];
        if (lat === x && long === y) {
          isFound = true;
        }
        if (!adjList.has(lat + ',' + long)) {
          q.push([lat, long, steps + 1]);
          adjList.set(lat + ',' + long, true);
        }
      }
    }
  }
};
