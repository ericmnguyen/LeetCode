/**
 * @param {number[][]} board
 * @return {number}
 */
var slidingPuzzle = function (board) {
  let visited = new Set();
  let q = [];
  let directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  let start = '';
  for (let i = 0; i < board.length; i += 1) {
    for (let j = 0; j < board[i].length; j += 1) {
      start += board[i][j];
    }
  }

  q.push([board, 0]);
  visited.add(start);

  while (q.length) {
    console.log('v', visited);
    let curr = q[0][0];
    let distance = q[0][1];
    q.shift();
    let match = '';
    let x = 0;
    let y = 0;
    for (let i = 0; i < curr.length; i += 1) {
      for (let j = 0; j < curr[i].length; j += 1) {
        match += curr[i][j];
        if (match === '123450') {
          return distance;
        }
        if (curr[i][j] === 0) {
          x = i;
          y = j;
        }
      }
    }

    for (let p = 0; p < directions.length; p += 1) {
      let tempArr = JSON.parse(JSON.stringify(curr));
      const lat = directions[p][0] + x;
      const long = directions[p][1] + y;

      if (
        lat >= 0 &&
        lat < tempArr.length &&
        long >= 0 &&
        long < tempArr[0].length
      ) {
        //swap
        let tmp = tempArr[x][y];
        tempArr[x][y] = tempArr[lat][long];
        tempArr[lat][long] = tmp;
        let newMatch = '';
        for (let i = 0; i < tempArr.length; i += 1) {
          for (let j = 0; j < tempArr[i].length; j += 1) {
            newMatch += tempArr[i][j];
          }
        }
        //push into queue
        if (!visited.has(newMatch)) {
          q.push([tempArr, distance + 1]);
          visited.add(newMatch);
        }
      }
    }
  }

  return -1;
};
