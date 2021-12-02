/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function (edges) {
  let parent = [];
  let rank = [];
  let result = [];

  for (i = 1; i <= edges.length; i += 1) {
    parent.push(i);
    rank.push(1);
  }

  for (let [u, v] of edges) {
    let rootU = find(u);
    let rootV = find(v);
    if (rootU === rootV) {
      result = [u, v];
    } else {
      merge(u, v);
    }
  }

  function find(node) {
    if (parent[node - 1] === node) return node;
    return (parent[node - 1] = find(parent[node - 1]));
  }

  function merge(u, v) {
    let rootU = find(u);
    let rootV = find(v);
    if (rank[rootU - 1] < rank[rootV - 1]) {
      parent[rootU - 1] = rootV;
    } else {
      parent[rootV - 1] = rootU;
      if (rank[rootU - 1] === rank[rootV - 1]) {
        rank[rootU - 1] += 1;
      }
    }
  }
  return result;
};
