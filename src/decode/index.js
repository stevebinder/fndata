const attempt = require('../attempt');

module.exports = value => attempt(() => JSON.parse(value));
