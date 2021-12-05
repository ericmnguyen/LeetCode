/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minimumCost = function (n, connections) {
  let parent = [];
  let rank = [];
  let result = 0;

  connections.sort((a, b) => a[2] - b[2]);
  for (i = 1; i <= n; i += 1) {
    parent.push(i);
    rank.push(1);
  }
  for (let [u, v, cost] of connections) {
    if (find(u) !== find(v)) {
      merge(u, v);
      result += cost;
    }
  }
  for (i = 0; i < parent.length; i += 1) {
    if (find(parent[i]) !== find(parent[0])) {
      return -1;
    }
  }

  function find(node) {
    if (parent[node - 1] === node) return node;
    return (parent[node - 1] = find(parent[node - 1]));
  }

  function merge(u, v) {
    let rootU = find(u);
    let rootV = find(v);
    if (rootU === rootV) return;
    if (rank[rootU] < rank[rootV]) {
      parent[rootU - 1] = rootV;
    } else {
      parent[rootV - 1] = rootU;
      if (rank[rootU] === rank[rootV]) {
        rank[rootU] += 1;
      }
    }
  }
  return result;
};
