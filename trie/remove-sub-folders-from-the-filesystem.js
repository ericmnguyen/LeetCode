/**
 * @param {string[]} folder
 * @return {string[]}
 */
var removeSubfolders = function (folder) {
  let list = new Map();
  let result = [];

  for (let item of folder) {
    insert(item);
  }

  for (let item of list) {
    let node = list.get(item[0]);
    if (node.has('isRoot')) {
      result.push('/' + item[0]);
    } else {
      dfs(node, item[0]);
    }
  }

  function insert(word) {
    let node = list;
    let wordArr = word.split('/');
    for (let char of wordArr) {
      if (char) {
        if (!node.has(char)) node.set(char, new Map());
        node = node.get(char);
      }
    }
    node.set('isRoot', true);
  }

  function dfs(current, subName) {
    for (let item of current) {
      let node = current.get(item[0]);
      if (node.has('isRoot')) {
        result.push('/' + subName + '/' + item[0]);
      } else {
        let newName = subName + '/' + item[0];
        dfs(node, newName);
      }
    }
  }
  return result;
};
