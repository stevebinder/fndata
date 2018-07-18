const attempt = require('./index');

module.exports = {
  'return undefined when no method is supplied': [
    undefined,
    () => attempt(),
  ],
  'run a function with an error silently': [
    undefined,
    () => attempt(() => a()),
  ],
};