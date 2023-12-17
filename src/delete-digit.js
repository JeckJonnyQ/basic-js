const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */

function deleteDigit(n) {
  const arrayNumbers = n.toString().split('').map(Number);
  let maxNumber = 0;

  for (let i = 0; i < arrayNumbers.length; i++) {
      const copyArray = Array.from(arrayNumbers);
      copyArray.splice(i, 1);

      const number = parseInt(copyArray.join(''));
      if (number > maxNumber) {
          maxNumber = number;
      }
  }

  return maxNumber;
}

module.exports = {
  deleteDigit
};
