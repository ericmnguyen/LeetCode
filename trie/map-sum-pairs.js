var MapSum = function () {
  this.root = {};
  this.keyTable = new Map();
};

/**
 * @param {string} key
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function (key, val) {
  let node = this.root;
  let previousVal = 0;
  if (this.keyTable.has(key)) {
    previousVal = this.keyTable.get(key);
  }
  this.keyTable.set(key, val);
  for (let char of key) {
    if (!node[char]) {
      node[char] = { value: 0 };
    }
    node = node[char];
    node.value += val - previousVal;
  }
};

/**
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function (prefix) {
  let node = this.root;
  let result = 0;
  for (let char of prefix) {
    if (!node[char]) return null;
    node = node[char];
  }
  return node.value;
};

/**
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */
