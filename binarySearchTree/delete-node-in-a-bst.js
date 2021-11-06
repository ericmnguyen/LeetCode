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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  if (!root) return null;
  if (root.val === key) {
    if (!root.left && !root.right) {
      return null;
    } else if (root.left) {
      root.left = handleDelete(root.left, true, root);
    } else {
      root.right = handleDelete(root.right, false, root);
    }
    return root;
  }
  if (root.val > key) {
    root.left = deleteNode(root.left, key);
  } else {
    root.right = deleteNode(root.right, key);
  }
  return root;
};

var handleDelete = (node, isRightSide, root) => {
  if ((!node.left && !isRightSide) || (!node.right && isRightSide)) {
    [node.val, root.val] = [root.val, node.val];
    if (!node.left && !node.right) return null;
    else if (node.left) return node.left;
    else if (node.right) return node.right;
  } else if (isRightSide) {
    node.right = handleDelete(node.right, isRightSide, root);
  } else {
    node.left = handleDelete(node.left, isRightSide, root);
  }
  return node;
};
