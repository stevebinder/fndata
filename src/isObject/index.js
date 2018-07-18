const isArray = require('../isArray');
const isNull = require('../isNull');

module.exports = value =>
  !isNull(value)
  && typeof value === 'object'
  && !isArray(value);