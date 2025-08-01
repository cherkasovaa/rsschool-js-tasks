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
  const { repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 1, additionSeparator = '|' } = options;

  const createPart = (string, repeatTimes, separator) => Array(repeatTimes).fill(string).join(separator);

  const additionCreator = createPart(String(addition), additionRepeatTimes, additionSeparator);
  const stringCreator = createPart(`${str + additionCreator}`, repeatTimes, separator);

  return stringCreator;
}

module.exports = {
  repeater,
};
