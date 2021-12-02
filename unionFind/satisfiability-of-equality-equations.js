/**
 * @param {string[]} equations
 * @return {boolean}
 */
var equationsPossible = function (equations) {
  let parent = new Map();
  let rank = new Map();
  for (let item of equations) {
    if (!parent.has(item[0])) {
      parent.set(item[0], item[0]);
      rank.set(item[0], 1);
    }
    if (!parent.has(item[3])) {
      parent.set(item[3], item[3]);
      rank.set(item[3], 1);
    }
    if (item[1] === '=') {
      merge(item[0], item[3]);
    }
  }

  for (let item of equations) {
    if (item[1] === '!') {
      let rootU = find(item[0]);
      let rootV = find(item[3]);
      if (rootU === rootV) {
        return false;
      }
    }
  }

  function find(node) {
    if (parent.get(node) !== node) parent.set(node, find(parent.get(node)));
    return parent.get(node);
  }

  function merge(u, v) {
    let rootU = find(u);
    let rootV = find(v);
    if (rootU === rootV) return;
    if (rank.get(u) < rank.get(v)) {
      parent.set(rootU, rootV);
    } else {
      parent.set(rootV, rootU);
      if (rank.get(u) === rank.get(v)) {
        rank.set(u, rank.get(u) + 1);
      }
    }
  }
  return true;
};
