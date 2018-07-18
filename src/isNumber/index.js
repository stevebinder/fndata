module.exports = value =>
  typeof value === 'number' && !isNaN(value) && value !== Infinity;