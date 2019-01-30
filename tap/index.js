const env = process.env.NODE_ENV || '';

export default value => {
  if (!/^(test|production)$/i.test(env)) {
    console.log(value);
  }
  return value;
};