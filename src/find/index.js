const filter = require('../filter');

module.exports = (value, comparer) => filter(value, comparer)[0];