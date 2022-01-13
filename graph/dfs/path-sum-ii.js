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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  let result = [];
  if (!root) return [];
  binTree(root, 0, []);
  function binTree(node, preVal, nums) {
    let currVal = preVal + node.val;
    let newNums = [...nums, node.val];
    if (node.left) {
      binTree(node.left, currVal, newNums);
    }
    if (node.right) {
      binTree(node.right, currVal, newNums);
    }
    if (!node.left && !node.right && targetSum === currVal) {
      result.push(newNums);
    }
  }
  return result;
};
