const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string'
    || isNaN(parseFloat(sampleActivity))
    || sampleActivity.trim().length === 0) {
    return false;
  }
  if (sampleActivity <= 0 || sampleActivity > 15) {
    return false;
  }

  let k = parseFloat('0.693') / HALF_LIFE_PERIOD;
  if (sampleActivity.includes('.')) {
    let time = Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / k;
    return Math.ceil(time);
  } else {
    let time = Math.log(MODERN_ACTIVITY / parseInt(sampleActivity)) / k;
    return Math.ceil(time);
  };
}

module.exports = {
  dateSample
};
