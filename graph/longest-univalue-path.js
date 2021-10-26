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
var longestUnivaluePath = function (root) {
  res = 0;
  dfs(root);
  return res;
};

var dfs = (node) => {
  let l = 0;
  let r = 0;
  if (!node) return 0;
  let left = dfs(node.left);
  let right = dfs(node.right);

  if (node.left && node.left.val == node.val) {
    l = left + 1;
  }
  if (node.right && node.right.val == node.val) {
    r = right + 1;
  }
  res = Math.max(res, l + r);
  return Math.max(l, r);
};
