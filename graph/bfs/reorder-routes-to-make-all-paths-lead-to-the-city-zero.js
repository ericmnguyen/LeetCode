/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function (n, connections) {
  let adjList = new Map();
  let q = [];
  let visited = new Set();
  let result = 0;

  for (let i = 0; i < connections.length; i += 1) {
    if (adjList.has(connections[i][0])) {
      adjList.set(connections[i][0], [
        ...adjList.get(connections[i][0]),
        [connections[i][1], true],
      ]);
    } else {
      adjList.set(connections[i][0], [[connections[i][1], true]]);
    }
    if (adjList.has(connections[i][1])) {
      adjList.set(connections[i][1], [
        ...adjList.get(connections[i][1]),
        [connections[i][0], false],
      ]);
    } else {
      adjList.set(connections[i][1], [[connections[i][0], false]]);
    }
  }

  q.push([[0, true], 0]);
  visited.add(0);

  while (q.length) {
    const curr = q[0][0][0];
    const prev = q[0][1];
    q.shift();

    let next = adjList.get(curr);
    for (let i = 0; i < next.length; i += 1) {
      if (!visited.has(next[i][0])) {
        q.push([[next[i][0], next[i][1]], curr]);
        visited.add(next[i][0]);
      }
      if (prev === next[i][0] && next[i][1] === false) {
        result += 1;
      }
    }
  }
  return result;
};
