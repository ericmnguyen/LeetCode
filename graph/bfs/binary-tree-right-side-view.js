/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
  adjList = new Map();
  let result = [];
  if (!root) return [];
  previous = root.val;
  bfs(root, 0);
  for (item of adjList) {
    const lastIndex = item[1].length - 1;
    result.push(item[1][lastIndex]);
  }
  return result;
};

var bfs = (node, distance) => {
  if (adjList.has(distance)) {
    adjList.set(distance, [...adjList.get(distance), node.val]);
  } else {
    adjList.set(distance, [node.val]);
  }
  if (node.left) {
    bfs(node.left, distance + 1);
  }
  if (node.right) {
    bfs(node.right, distance + 1);
  }
};
