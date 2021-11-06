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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  arr = [];
  if (!root) return null;
  findNumber(root);
  return arr[k - 1];
};

var findNumber = (node) => {
  if (node.left) {
    findNumber(node.left);
  }
  arr.push(node.val);
  if (node.right) {
    findNumber(node.right);
  }
};
