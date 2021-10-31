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
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  adjList = new Map();
  let result = [];
  if (!root) return [];
  bfs(root, 0);
  for (let i = adjList.size - 1; i >= 0; i -= 1) {
    result.push(adjList.get(i));
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
