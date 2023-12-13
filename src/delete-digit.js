const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let result;
  let additionalVariable;
  let stringOfNumbers = String(n);
  result = stringOfNumbers.slice(1);
  for (let i = 0; i < stringOfNumbers.length-1; i++) {
    additionalVariable = stringOfNumbers.slice(0, i+1) + stringOfNumbers.slice(i+2);
    if (+result < +additionalVariable) {
      result = additionalVariable;
    }
  }
  return +result;
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  deleteDigit
};
