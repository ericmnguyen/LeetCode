/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function (root) {
  result = [];
  if (!root) return [];
  dfs(root);
  return result;
};

var dfs = (node) => {
  for (item of node.children) {
    dfs(item);
  }
  result.push(node.val);
};
