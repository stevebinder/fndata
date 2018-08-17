module.exports = value => {
  if (`${process.env.NODE_ENV}`.toLowerCase() !== 'production') {
    console.log(value);
  }
  return value;
};