/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function (products, searchWord) {
  let list = {};
  let result = [];
  let keyword = '';

  for (let item of products) {
    insert(item);
  }

  for (let char of searchWord) {
    keyword += char;
    let products = searchNode(keyword);
    result.push(products);
  }

  function insert(word) {
    let node = list;
    for (let char of word) {
      if (!node[char]) node[char] = {};
      node = node[char];
    }
    node.isEnd = true;
  }

  function searchNode(keyword) {
    let products = [];
    let node = list;
    for (let char of keyword) {
      if (!node[char]) return products;
      node = node[char];
    }
    dfs(node, keyword);

    function dfs(node, prodName) {
      if (Object.keys(node).length === 0 || products.length === 3) return;
      let temp = [];

      for (i of Object.keys(node)) {
        if (i !== 'isEnd') {
          temp.push(i.charCodeAt(0));
        } else {
          products.push(prodName);
        }
      }
      temp.sort((a, b) => a - b);
      for (let item of temp) {
        let newName = prodName + String.fromCharCode(item);
        dfs(node[String.fromCharCode(item)], newName);
      }
    }

    return products;
  }
  return result;
};
