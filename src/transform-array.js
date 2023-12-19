const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("\'arr\' parameter must be an instance of the Array!");
  };

  let result = arr;
  let arr1 = arr;
  let pos;
  arr1.forEach((element, i) => {
    switch (element) {
      case '--discard-next':
        result = arr1.slice(0, i).concat(arr1.slice(i + 2));
        pos = i + 2;
        arr1 = result;
        break;
      case '--discard-prev':
        if (i === 0) {
          result = arr1.slice(1);
        } else if (i === pos) {
          result = arr1.slice(0, i - 2).concat(arr1.slice(i - 1));
         } else {
          result = arr1.slice(0, i - 1).concat(arr1.slice(i + 1));
        }
        break;
      case '--double-next':
        result = arr1.slice(0, i).concat(arr1.slice(i + 1, i + 2).concat(arr1.slice(i + 1)));
        arr1 = result;
        break;
      case '--double-prev':
        if (i === 0) {
          result = arr1.slice(i + 1);
        }
        else if (i === pos) {
          result = arr1.slice(0, i - 2).concat(arr1.slice(i - 1));
        } else {
          result = arr1.slice(0, i).concat(arr1.slice(i - 1, i).concat(arr1.slice(i + 1)));
        }
        break;
    }
  })

    return result;

  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  transform
};
