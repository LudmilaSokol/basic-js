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
  let result = '';
  let repeatAddition;
  const arr = {
    repeatTimes: 1,
    separator: '+',
    addition: '',
    additionRepeatTimes: 1,
    additionSeparator: '|',
  };
  for(let key in arr) {
    if (key in options) {
      arr[key] = options[key];
    }
  }
  repeatAddition = `${arr.addition}${arr.additionSeparator}`.repeat(arr.additionRepeatTimes).slice(0, -arr.additionSeparator.length);
  result = `${str}${repeatAddition}${arr.separator}`.repeat(arr.repeatTimes).slice(0, -arr.separator.length);
  return result;
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  repeater
};
