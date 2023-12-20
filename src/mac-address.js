const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(inputString) {
  let reGroups = inputString.split('-');
  if (reGroups.length !== 6) {
    return false;
  }

  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'a', 'b', 'c', 'd', 'e', 'f'];

  for (let i = 0; i < reGroups.length; i++) {
    let oneGroup = reGroups[i];
    if (oneGroup.length !== 2) {
      return false;
    }

    for (let j = 0; j < oneGroup.length; j++) {
      let char = oneGroup.charAt(j);

      if (numbers.indexOf(char) === -1 && letters.indexOf(char) === -1) {
        return false;
      }
    }
  }
  return true;
}
module.exports = {
  isMAC48Address
};
