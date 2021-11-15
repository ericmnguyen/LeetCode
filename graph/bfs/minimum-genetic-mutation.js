/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function (start, end, bank) {
  let visited = new Set();
  let result = Number.MAX_SAFE_INTEGER;
  let q = [];
  q.push([start, 0]);

  while (q.length > 0) {
    let node = q[0][0];
    let distance = q[0][1];
    q.shift();

    if (node === end) {
      //get distance
      return Math.min(result, distance);
    }

    for (let i = 0; i < bank.length; i += 1) {
      let countDiff = 0;
      for (let j = 0; j < bank[i].length; j += 1) {
        if (node[j] !== bank[i][j]) {
          countDiff += 1;
        }
      }
      if (countDiff === 1 && !visited.has(bank[i])) {
        q.push([bank[i], distance + 1]);
        visited.add(bank[i]);
      }
    }
  }
  return -1;
};
