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
var inorderTraversal = function (root) {
  result = [];
  if (!root) return [];
  dfs(root);
  return result;
};

var dfs = (node) => {
  if (node) {
    dfs(node.left);
    result.push(node.val);
    dfs(node.right);
  }
};
