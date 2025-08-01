const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let encodedStr = '';
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    const currentChar = str[i];
    count++;

    if (currentChar !== str[i + 1]) {
      encodedStr += `${count > 1 ? count : ''}${currentChar}`;

      count = 0;
    }
  }
  return encodedStr;
}

module.exports = {
  encodeLine,
};
