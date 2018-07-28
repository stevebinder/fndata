module.exports = (...args) => {
  const [target, ...methods] = args;
  let result = target;
  methods.forEach(method => result = method(result));
  return result;
};
