const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  const k = Math.log(2) / HALF_LIFE_PERIOD;
  let result = 0;
  if (typeof sampleActivity !== 'string' || !Number.isFinite(+sampleActivity)  || sampleActivity === '' || sampleActivity === ' ' || +sampleActivity <= 0 || +sampleActivity > MODERN_ACTIVITY) {
    return false;
  } else {
    result = Math.ceil(Math.log(MODERN_ACTIVITY / +sampleActivity) / k);
    return result;
  }
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  dateSample
};
