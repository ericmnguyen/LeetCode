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
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 * If selected node is not greater than low. It means all left children are not greater than low
 * If selected node is not smaller than high. It means all right children are not smaller than high
 */
var trimBST = function (root, low, high) {
  if (!root) return null;
  if (root.val < low) {
    if (root.right) {
      return trimBST(root.right, low, high);
    }
    return null;
  } else if (root.val > high) {
    if (root.left) {
      return trimBST(root.left, low, high);
    }
    return null;
  }
  if (root.left) {
    root.left = trimBST(root.left, low, high);
  }
  if (root.right) {
    root.right = trimBST(root.right, low, high);
  }
  return root;
};
