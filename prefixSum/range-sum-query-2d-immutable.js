/**
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
  if (matrix.length == 0 || matrix[0].length == 0) return;
  this.bigMat = matrix;
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
  let sumBigRec = 0;
  let sumTopRec = 0;
  let sumLeftRec = 0;
  let sumCorner = 0;
  let result = 0;

  //Calculate big rectangle
  sumBigRec = calculateRectangle(row2, col2, this.bigMat);

  //Calculate top rectangle
  sumTopRec = calculateRectangle(row1 - 1, col2, this.bigMat);

  //Calculate left rectangle
  sumLeftRec = calculateRectangle(row2, col1 - 1, this.bigMat);

  //Calculate corner rectangle
  sumCorner = calculateRectangle(row1 - 1, col1 - 1, this.bigMat);

  result = sumBigRec - sumTopRec - sumLeftRec + sumCorner;
  return result;
};

var calculateRectangle = (row, col, matrix) => {
  let sum = 0;
  for (let i = 0; i <= row; i += 1) {
    for (let j = 0; j <= col; j += 1) {
      sum += matrix[i][j];
    }
  }
  return sum;
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
