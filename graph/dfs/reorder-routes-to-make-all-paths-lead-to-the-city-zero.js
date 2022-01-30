/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function (n, connections) {
  let directions = new Set();
  let adjList = new Map();
  let visited = new Set();
  let result = 0;
  for (let i = 0; i < connections.length; i += 1) {
    directions.add(connections[i][0] + ',' + connections[i][1]);
    if (adjList.has(connections[i][0])) {
      adjList.set(connections[i][0], [
        ...adjList.get(connections[i][0]),
        connections[i][1],
      ]);
    } else {
      adjList.set(connections[i][0], [connections[i][1]]);
    }
    if (adjList.has(connections[i][1])) {
      adjList.set(connections[i][1], [
        ...adjList.get(connections[i][1]),
        connections[i][0],
      ]);
    } else {
      adjList.set(connections[i][1], [connections[i][0]]);
    }
  }
  dfs(0);
  function dfs(prev) {
    visited.add(prev);
    const next = adjList.get(prev);
    if (next) {
      for (let i = 0; i < next.length; i += 1) {
        if (!directions.has(next[i] + ',' + prev) && !visited.has(next[i])) {
          result += 1;
        }
        if (!visited.has(next[i])) {
          dfs(next[i]);
        }
      }
    }
  }
  return result;
};
