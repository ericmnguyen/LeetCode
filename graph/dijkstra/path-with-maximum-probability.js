/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} succProb
 * @param {number} start
 * @param {number} end
 * @return {number}
 */
var maxProbability = function (n, edges, succProb, start, end) {
  const adjList = new Map();
  const visited = new Set();
  const q = [];
  let result = 0;

  for (let i = 0; i < edges.length; i += 1) {
    if (adjList.has(edges[i][0])) {
      adjList.get(edges[i][0]).push([edges[i][1], succProb[i]]);
    } else {
      adjList.set(edges[i][0], [[edges[i][1], succProb[i]]]);
    }
    // do mirror because of undirected graph
    if (adjList.has(edges[i][1])) {
      adjList.get(edges[i][1]).push([edges[i][0], succProb[i]]);
    } else {
      adjList.set(edges[i][1], [[edges[i][0], succProb[i]]]);
    }
  }
  q.push([1, start]);

  while (q.length) {
    //sort queue
    for (let i = 0; i < q.length; i += 1) {
      if (q[0][0] < q[i][0]) {
        [q[0], q[i]] = [q[i], q[0]];
      }
    }
    let [prob, node] = q.shift();
    if (visited.has(node)) continue;
    visited.add(node);
    if (node === end) {
      result = Math.max(result, prob);
    }
    if (!adjList.has(node)) {
      continue;
    }
    for (let [nextNode, nextProb] of adjList.get(node)) {
      if (!visited.has(nextNode)) {
        q.push([prob * nextProb, nextNode]);
      }
    }
  }
  return result;
};
