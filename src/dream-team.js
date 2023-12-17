const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false; // Если передан не массив, возвращаем false
  }
  const membersTakeOnlyString = members.filter(function (element) {
    return typeof element === 'string';
  });
  const takeFirstLetters = membersTakeOnlyString.map(function (element) {
    return element.trim()[0].toUpperCase();
  });
  const sortFirstLetters = takeFirstLetters.sort();
  return sortFirstLetters.join('');
}

module.exports = {
  createDreamTeam
};
