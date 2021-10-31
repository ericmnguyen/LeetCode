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
 * @return {number}
 */
var deepestLeavesSum = function (root) {
  adjList = new Map();
  resultArr = [0, 0];
  if (!root) return 0;
  bfs(root, 0);
  return resultArr[1];
};

var bfs = (node, distance) => {
  if (resultArr[0] < distance) {
    resultArr[0] = distance;
    resultArr[1] = node.val;
  } else if (resultArr[0] === distance) {
    resultArr[1] += node.val;
  }
  if (node.left) {
    bfs(node.left, distance + 1);
  }
  if (node.right) {
    bfs(node.right, distance + 1);
  }
};
