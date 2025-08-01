const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  if (!(date instanceof Date) || Object.getOwnPropertyNames(date).length) {
    throw Error('Invalid date!');
  }

  const seasons = ['winter', 'spring', 'summer', 'fall'];

  const month = date.getMonth() + 1;
  const idx = Math.floor((month % 12) / 3);

  return seasons[idx];
}

module.exports = {
  getSeason,
};
