/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let adjList = new Map();
  let result = [];
  if (!root) return [];
  bfs(root, 0);

  for (let i of adjList) {
    result.push(i[1]);
  }

  function bfs(node, distance) {
    if (adjList.has(distance)) {
      adjList.set(distance, [...adjList.get(distance), node.val]);
    } else {
      adjList.set(distance, [node.val]);
    }
    if (node.children.length > 0) {
      for (item of node.children) {
        bfs(item, distance + 1);
      }
    }
  }
  return result;
};
