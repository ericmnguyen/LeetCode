/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  let visited = new Set();
  let validCourse = new Set();
  let adjList = new Map();
  let q = [];

  for (let i = 0; i < prerequisites.length; i += 1) {
    const [key, val] = prerequisites[i];
    if (key === val) return false;
    if (adjList.has(key)) {
      adjList.set(key, [...adjList.get(key), val]);
    } else {
      adjList.set(key, [val]);
    }
  }

  for (let i = 0; i < numCourses; i += 1) {
    if (!dfs(i)) return false;
  }
  return true;

  function dfs(num) {
    if (visited.has(num) && validCourse.has(num)) {
      return true;
    } else if (!visited.has(num)) {
      visited.add(num);
      if (!adjList.has(num)) {
        validCourse.add(num);
        return true;
      }
      for (item of adjList.get(num)) {
        if (!dfs(item)) return false;
      }
    } else {
      return false;
    }
    validCourse.add(num);
    return true;
  }
};
