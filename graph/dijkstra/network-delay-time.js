/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function (times, n, k) {
  const adjList = new Map();
  const q = [];
  let result = -1;
  const visited = new Map();

  for (let [start, end, time] of times) {
    if (adjList.has(start)) {
      adjList.get(start).push([end, time]);
    } else {
      adjList.set(start, [[end, time]]);
    }
  }
  if (!adjList.has(k)) return -1;
  q.push([0, k]);

  while (q.length) {
    //sort min time
    for (let i = 0; i < q.length; i += 1) {
      if (q[0][0] > q[i][0]) {
        [q[0], q[i]] = [q[i], q[0]];
      }
    }
    let [time, node] = q.shift();
    if (!visited.has(node)) {
      visited.set(node, time);
    } else if (visited.get(node) > time) {
      visited.set(node, time);
    } else {
      continue;
    }
    //result
    result = Math.max(result, time);
    //skip unconnected nodes
    if (!adjList.has(node)) continue;

    for (let [nextNode, nextTime] of adjList.get(node)) {
      q.push([nextTime + time, nextNode]);
    }
  }
  if (visited.size === n) {
    return result;
  }
  return -1;
};
