/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function (n, flights, src, dst, k) {
  const adjList = new Map();
  //init adjacency list
  for (let [start, end, cost] of flights) {
    if (adjList.has(start)) {
      adjList.get(start).push([end, cost]);
    } else {
      adjList.set(start, [[end, cost]]);
    }
  }
  const q = [[0, src, k + 1]];
  const visited = new Map();

  while (q.length) {
    for (let i = 0; i < q.length; i += 1) {
      if (q[0][0] > q[i][0]) {
        [q[i], q[0]] = [q[0], q[i]];
      }
    }
    let [cost, city, stops] = q.shift();
    visited.set(city, stops);

    if (city === dst) return cost;
    if (stops <= 0 || !adjList.has(city)) continue;
    for (let [nextCity, nextCost] of adjList.get(city)) {
      if (visited.has(nextCity) && visited.get(nextCity) >= stops - 1) {
        continue;
      }
      q.push([cost + nextCost, nextCity, stops - 1]);
    }
  }
  return -1;
};
