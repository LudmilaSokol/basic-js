const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let p;
  let k;
  let j = 0;
  while (j < names.length) {
    k = 1;
    p = names[j];
    for (let i = j+1; i < names.length; i++) {
      if (p === names[i]) {
        names[i] = `${names[i]}(${k})`;
        k = k + 1;
      }
    }
    j = j + 1;
  }
  return names;
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  renameFiles
};
