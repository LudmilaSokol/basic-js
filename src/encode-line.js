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
  let result = '';
  let sum = 0;
  let p = str[0];
  for (let i = 0; i < str.length + 1; i++) {
    if (str[i] === p) {
      sum = sum + 1;
    } else {
      if (sum > 1) {
        result = result + sum.toString() + p;
      } else {
        result = result + p;
      }
      p = str[i];
      sum = 1;
    }
  }
  return result;
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  encodeLine
};
