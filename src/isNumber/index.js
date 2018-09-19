export default value =>
  typeof value === 'number' && !isNaN(value) && value !== Infinity;