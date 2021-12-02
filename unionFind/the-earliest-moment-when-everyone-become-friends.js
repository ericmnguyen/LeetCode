/**
 * @param {number[][]} logs
 * @param {number} n
 * @return {number}
 */
var earliestAcq = function (logs, n) {
  let parent = [];
  let rank = [];
  let result = true;
  logs.sort((a, b) => a[0] - b[0]);
  for (let i = 0; i < n; i += 1) {
    parent[i] = i;
    rank[i] = 1;
  }
  for (let [date, u, v] of logs) {
    merge(u, v);
    parent[u] = find(u);
    parent[v] = find(v);
    const allConnected = parent.filter(
      (item) => find(item) === find(parent[0])
    );
    if (allConnected.length === n) {
      return date;
    }
  }

  function find(node) {
    if (parent[node] !== node) {
      parent[node] = find(parent[node]);
    }
    return parent[node];
  }

  function merge(u, v) {
    let rootU = find(u);
    let rootV = find(v);
    if (rootU === rootV) return;
    if (rank[u] < rank[v]) {
      parent[rootU] = parent[rootV];
    } else {
      parent[rootV] = parent[rootU];
      if (rank[u] === rank[v]) {
        rank[u] += 1;
      }
    }
  }
  return -1;
};
