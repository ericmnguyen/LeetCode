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
var minDepth = function (root) {
  if (root === null) return 0;
  return dfs(root);
};

var dfs = (node) => {
  if (node === null) return Number.MAX_SAFE_INTEGER;
  if (node.left === null && node.right === null) return 1;
  return Math.min(dfs(node.left), dfs(node.right)) + 1;
};
