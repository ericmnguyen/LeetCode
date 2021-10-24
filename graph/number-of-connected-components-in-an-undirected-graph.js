/**
 * This math is a kind of graph DFS
 * Step 1: setup adjacency list
 * Step 2: create a loop to n
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function (n, edges) {
  let adjList = new Map();
  let visited = new Map();
  let count = 0;

  //setup adjacency list
  for (let i = 0; i < edges.length; i += 1) {
    if (adjList.has(edges[i][0])) {
      adjList.set(edges[i][0], [...adjList.get(edges[i][0]), edges[i][1]]);
    } else {
      adjList.set(edges[i][0], [edges[i][1]]);
    }
    //do mirror
    if (adjList.has(edges[i][1])) {
      adjList.set(edges[i][1], [...adjList.get(edges[i][1]), edges[i][0]]);
    } else {
      adjList.set(edges[i][1], [edges[i][0]]);
    }
  }

  //create loop to n to check if the node is visited before
  for (let j = 0; j < n; j += 1) {
    if (!visited.has(j)) {
      dfs(j);
      count += 1;
    }
  }

  //Implement DFS
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
  return count;
};
