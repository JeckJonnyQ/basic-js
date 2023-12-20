const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */

function minesweeper(matrix) {
  const matrixRows = matrix.length;
  const matrixColumns = matrix[0].length;
  const result = [];

  for (let i = 0; i < matrixRows; i++) {
    const matrixNumbers = [];
    for (let j = 0; j < matrixColumns; j++) {
      let count = 0;
      if (i > 0 && matrix[i - 1][j]) {
        count++;
      }
      if (i < matrixRows - 1 && matrix[i + 1][j]) {
        count++;
      }
      if (j > 0 && matrix[i][j - 1]) {
        count++;
      }
      if (j < matrixColumns - 1 && matrix[i][j + 1]) {
        count++;
      }
      if (i > 0 && j > 0 && matrix[i - 1][j - 1]) {
        count++;
      }
      if (i > 0 && j < matrixColumns - 1 && matrix[i - 1][j + 1]) {
        count++;
      }
      if (i < matrixRows - 1 && j > 0 && matrix[i + 1][j - 1]) {
        count++;
      }
      if (i < matrixRows - 1 && j < matrixColumns - 1 && matrix[i + 1][j + 1]) {
        count++;
      }
      matrixNumbers.push(count);
    }
    result.push(matrixNumbers);
  }
  return result;
}

module.exports = {
  minesweeper
};
