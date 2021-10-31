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
var sumOfLeftLeaves = function (root) {
  let result = 0;
  if (!root.left && !root.right) return 0;
  traversal(root, false);
  function traversal(node, left) {
    if (node) {
      if (!node.left && !node.right && left) result += node.val;
      traversal(node.left, true);
      traversal(node.right, false);
    }
  }
  return result;
};
