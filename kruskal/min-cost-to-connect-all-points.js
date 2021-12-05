/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function (points) {
  const parent = new Map();
  const rank = new Map();
  const pointGraph = [];
  let result = 0;

  for (let i = 0; i < points.length; i += 1) {
    for (let j = i + 1; j < points.length; j += 1) {
      const cost =
        Math.abs(points[i][0] - points[j][0]) +
        Math.abs(points[i][1] - points[j][1]);
      pointGraph.push([points[i], points[j], cost]);
    }
  }

  for (let i = 0; i < points.length; i += 1) {
    parent.set(points[i].toString(), points[i].toString());
    rank.set(points[i].toString(), 1);
  }

  const sortedPoints = pointGraph.sort((a, b) => a[2] - b[2]);

  for (let i = 0; i < sortedPoints.length; i += 1) {
    let rootU = find(parent.get(sortedPoints[i][0].toString()));
    let rootV = find(parent.get(sortedPoints[i][1].toString()));
    let cost = sortedPoints[i][2];

    if (rootU !== rootV) {
      merge(rootU, rootV);
      result += cost;
    }
  }

  function find(node) {
    if (parent.get(node) !== node) {
      parent.set(node, find(parent.get(node)));
    }
    return parent.get(node);
  }

  function merge(u, v) {
    let rootU = find(parent.get(u));
    let rootV = find(parent.get(v));

    if (rootU === rootV) return;
    if (rank.get(rootU) < rank.get(rootV)) {
      parent.set(rootU, rootV);
    } else {
      parent.set(rootV, rootU);
      if (rank.get(rootU) === rank.get(rootV)) {
        rank.set(rootU, rank.get(rootU) + 1);
      }
    }
  }
  return result;
};
