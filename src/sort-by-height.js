const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let result = [];
  let indexesUnit = [];
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      indexesUnit[j] = i;
      j++;
    }
  }
  let arrayWithoutUnits = arr.filter((el) => {
    if(el !== -1) {
      return el
    }
  })
  arrayWithoutUnits.sort((a, b) => {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
  });
  j = 0;
  let i = 0;
  while (j < arr.length) {
    if (indexesUnit.includes(j)) {
      result[j] = -1
    } else {
      result[j] = arrayWithoutUnits[i];
      i++;
    }
    j++;
  }
  return result;
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  sortByHeight
};
