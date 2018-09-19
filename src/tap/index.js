const env = `${process.env.NODE_ENV}`.toLowerCase();

export default value => {
  if (env !== 'test' && env !== 'production') {
    console.log(value);
  }
  return value;
};