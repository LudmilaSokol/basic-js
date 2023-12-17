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
  let sum = 0;
  let s = 0;
  let digitsNumbers = n.toString().split('');
  digitsNumbers.forEach(element => {
    sum = sum + +element;
  });
  if (sum > 9) {
    digitsNumbers = sum.toString().split('');
    digitsNumbers.forEach(element => {
      s = s + +element;
    });
    sum = s;
  }

  return sum;
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getSumOfDigits
};
