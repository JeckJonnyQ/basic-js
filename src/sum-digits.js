const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let getArray = n.toString().split('')
  let sum = 0;
  for (let i = 0; i < getArray.length; i++) {
    sum += Number(getArray[i]);
    if (sum >= 10) {
      let resultArray = sum.toString().split('');
      sum = 0;
      for (let j = 0; j < resultArray.length; j++) {
        sum += Number(resultArray[j]);
      }
    }
  }
  return sum;
}

module.exports = {
  getSumOfDigits
};
