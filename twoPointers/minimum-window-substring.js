/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  if ((s.length === 1 && s === t) || s === t) return s;
  let l = 0;
  let tMap = new Map();
  let minLength = s.length;
  let result = '';

  //add index which has any characters in t
  for (let i = 0; i < t.length; i += 1) {
    if (tMap.has(t[i])) {
      tMap.set(t[i], tMap.get(t[i]) + 1);
    } else {
      tMap.set(t[i], 1);
    }
  }

  while (l < s.length) {
    let minIndex = ['A', [s.length]];
    let r = l;
    let visited = new Map();

    while (r < s.length) {
      let shouldReturn = true;
      if (t.indexOf(s[r]) >= 0) {
        if (visited.has(s[r])) {
          visited.set(s[r], [...visited.get(s[r]), r]);
        } else {
          visited.set(s[r], [r]);
        }
      }
      //check if match t
      for (let item of tMap) {
        if (visited.has(item[0])) {
          let v = visited.get(item[0]);
          if (item[1] > v.length) {
            shouldReturn = false;
            break;
          }
        } else {
          shouldReturn = false;
          break;
        }
      }
      if (shouldReturn) {
        break;
      }
      r += 1;
    }

    //calculate l index and result
    if (visited.size > 0 && r < s.length) {
      for (let item of visited) {
        if (minIndex[1][0] > item[1][0]) {
          minIndex = item;
        }
      }
      //handle add string result
      //delete visited index
      let deleteItem = visited.get(minIndex[0]);
      if (deleteItem.length > 1) {
        deleteItem.shift();
        visited.set(minIndex[0], deleteItem);
      } else {
        visited.delete(minIndex[0]);
      }
      // set result
      if (r - l + 1 <= minLength) {
        minLength = r - l + 1;
        result = s.substring(l, r + 1);
      }

      l += 1;
    } else {
      break;
    }
  }
  return result;
};
