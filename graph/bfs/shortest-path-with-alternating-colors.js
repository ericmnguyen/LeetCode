/**
 * @param {number} n
 * @param {number[][]} redEdges
 * @param {number[][]} blueEdges
 * @return {number[]}
 */
var shortestAlternatingPaths = function (n, redEdges, blueEdges) {
  let redList = new Map();
  let blueList = new Map();
  let visited = new Set();
  let q = [];
  let result = new Array(n).fill(-1);

  for (let i = 0; i < redEdges.length; i += 1) {
    if (redList.has(redEdges[i][0])) {
      redList.set(redEdges[i][0], [
        ...redList.get(redEdges[i][0]),
        redEdges[i][1],
      ]);
    } else {
      redList.set(redEdges[i][0], [redEdges[i][1]]);
    }
  }

  for (let i = 0; i < blueEdges.length; i += 1) {
    if (blueList.has(blueEdges[i][0])) {
      blueList.set(blueEdges[i][0], [
        ...blueList.get(blueEdges[i][0]),
        blueEdges[i][1],
      ]);
    } else {
      blueList.set(blueEdges[i][0], [blueEdges[i][1]]);
    }
  }

  q.push([0, true, 0]);
  q.push([0, false, 0]);

  while (q.length) {
    const prev = q[0][0];
    const isRed = q[0][1];
    let distance = q[0][2];
    q.shift();
    //show result
    result[prev] =
      result[prev] === -1 ? distance : Math.min(result[prev], distance);

    if ((isRed || prev === 0) && blueList.has(prev)) {
      let list = blueList.get(prev);
      for (let i = 0; i < list.length; i += 1) {
        if (!visited.has(list[i] + 'b')) {
          q.push([list[i], false, distance + 1]);
          visited.add(list[i] + 'b');
        }
      }
    }

    if ((!isRed || prev === 0) && redList.has(prev)) {
      let list = redList.get(prev);
      for (let i = 0; i < list.length; i += 1) {
        if (!visited.has(list[i] + 'r')) {
          q.push([list[i], true, distance + 1]);
          visited.add(list[i] + 'r');
        }
      }
    }
  }
  return result;
};
