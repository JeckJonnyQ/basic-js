const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const resultObject = {};

  for (let i = 0; i < domains.length; i++) {
    const domainParts = domains[i].split('.');
    let dnsPart = '';

    // Обратный цикл, чтобы строить DNS-путь снизу вверх
    for (let j = domainParts.length - 1; j >= 0; j--) {
      dnsPart += `.${domainParts[j]}`;

      // Проверка, существует ли уже путь в объекте result
      if (resultObject[dnsPart]) {
        resultObject[dnsPart]++;
      } else {
        resultObject[dnsPart] = 1;
      }
    }
  }

  return resultObject;
}

module.exports = {
  getDNSStats
};
