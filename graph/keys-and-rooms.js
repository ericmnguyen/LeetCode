/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
  let visitedRooms = new Map();
  let adjList = new Map();

  //Init adjacency list
  for (let i = 0; i < rooms.length; i += 1) {
    adjList.set(i, rooms[i]);
    visitedRooms.set(i, false);
  }

  dfs(0);
  //Init dfs
  function dfs(curr) {
    visitedRooms.set(curr, true);
    if (adjList.has(curr)) {
      for (item of adjList.get(curr)) {
        if (!visitedRooms.get(item)) {
          dfs(item);
        }
      }
    }
  }

  // check if some rooms are not accessible
  for (item of visitedRooms) {
    if (!item[1]) {
      return false;
    }
  }
  return true;
};
