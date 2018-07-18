const isFunction = require('../isFunction');
const memo = require('./index');

module.exports = {
  'should always return a function': [
    true,
    () => isFunction(memo(() => {})),
    () => isFunction(memo(1)),
  ],
};