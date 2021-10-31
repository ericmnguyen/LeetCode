/**
 * Using Graph, DFS to solve this math
 * Step 1: define adjacency list
 * Step 2: create dfs recursion
 * Step 3: Count if there is new city which is not visited before
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  let adjList = new Map();
  let visited = new Map();
  let result = 0;

  //set up adjacency list
  for (let i = 0; i < isConnected.length; i += 1) {
    for (let j = 0; j < isConnected.length; j += 1) {
      if (isConnected[i][j] === 1) {
        if (adjList.has(i)) {
          adjList.set(i, [...adjList.get(i), j]);
        } else {
          adjList.set(i, [j]);
        }
      }
    }
  }

  // create a loop to run through all cities
  for (let i = 0; i < isConnected.length; i += 1) {
    if (!visited.has(i)) {
      result += 1;
      dfs(i);
    }
  }

  //implement dfs
  function dfs(curr) {
    visited.set(curr, true);
    if (adjList.has(curr)) {
      for (item of adjList.get(curr)) {
        if (!visited.has(item)) {
          dfs(item);
        }
      }
    }
  }
  return result;
};
