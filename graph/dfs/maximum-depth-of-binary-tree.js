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
var maxDepth = function (root) {
  if (root === null) return 0;
  return dfs(root);
};

var dfs = (node) => {
  if (node === null) return Number.MIN_SAFE_INTEGER;
  if (!node.left && !node.right) return 1;
  return Math.max(dfs(node.left), dfs(node.right)) + 1;
};
