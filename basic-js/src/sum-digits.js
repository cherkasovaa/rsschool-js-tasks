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
  let number = n;

  while (number > 9) {
    let sum = 0;

    while (number > 0) {
      const digit = number % 10;
      sum += digit;

      number = Math.floor(number / 10);
    }

    number = sum;
  }

  return number;

  // через рекурсию

  // if (n <= 9) return n;
  // let sum = 0;

  // while (number > 0) {
  //   const digit = number % 10;
  //   sum += digit;

  //   number = Math.floor(number / 10);
  // }

  // return sum < 10 ? sum : getSumOfDigits(sum);
}

module.exports = {
  getSumOfDigits,
};
