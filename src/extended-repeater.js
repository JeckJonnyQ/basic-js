const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let result = '';
  let repeatTimes = options.repeatTimes !== undefined ? options.repeatTimes : 1;
  let addition = options.addition !== undefined ? String(options.addition) : '';

  let additionRepeatTimes = options.additionRepeatTimes !== undefined ? options.additionRepeatTimes : 1;
  let additionSeparator = options.additionSeparator !== undefined ? options.additionSeparator : '|';

  for (let i = 0; i < repeatTimes; i++) {
    result += str + addition;
    for (let j = 1; j < additionRepeatTimes; j++) {
      result += additionSeparator + addition;
    }
    if (i !== repeatTimes - 1) {
      result += options.separator !== undefined ? options.separator : '+';
    }
  }
  return result;
}

module.exports = {
  repeater
};
