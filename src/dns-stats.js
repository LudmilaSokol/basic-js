const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const result = {};
  const arr = domains;
  let pos;
  let posOne;
  let dns;
  for (let i = 0; i < arr.length; i++) {
    dns = '';
    posOne = arr[i].indexOf('.');
    while (arr[i].length > posOne) {
      pos = arr[i].lastIndexOf('.');
      dns = dns + arr[i].slice(pos);
      if (dns in result) {
        result[dns] = result[dns] + 1;
      } else result[dns] = 1;
      arr[i] = arr[i].slice(0, pos);
    }
    dns = dns +'.' + arr[i].slice(0, posOne);
    if (dns in result) {
      result[dns] = result[dns] + 1;
    } else result[dns] = 1;
  };
  return result;
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getDNSStats
};
