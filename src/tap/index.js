const env = `${process.env.NODE_ENV}`.toLowerCase();

module.exports = value => {
  if (env !== 'test' && env !== 'production') {
    console.log(value);
  }
  return value;
};