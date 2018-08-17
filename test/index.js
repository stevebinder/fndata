const tests = {
  all: require('../src/all/tests'),
  attempt: require('../src/attempt/tests'),
  compose: require('../src/compose/tests'),
  concat: require('../src/concat/tests'),
  copy: require('../src/copy/tests'),
  curry: require('../src/curry/tests'),
  entries: require('../src/entries/tests'),
  fill: require('../src/fill/tests'),
  filter: require('../src/filter/tests'),
  find: require('../src/find/tests'),
  get: require('../src/get/tests'),
  id: require('../src/id/tests'),
  includes: require('../src/includes/tests'),
  invert: require('../src/invert/tests'),
  isArray: require('../src/isArray/tests'),
  isElement: require('../src/isElement/tests'),
  isEmpty: require('../src/isEmpty/tests'),
  isEqual: require('../src/isEqual/tests'),
  isFunction: require('../src/isFunction/tests'),
  isInfinity: require('../src/isInfinity/tests'),
  isNan: require('../src/isNan/tests'),
  isNumber: require('../src/isNumber/tests'),
  isNull: require('../src/isNull/tests'),
  isObject: require('../src/isObject/tests'),
  isShape: require('../src/isShape/tests'),
  isString: require('../src/isString/tests'),
  isUndefined: require('../src/isUndefined/tests'),
  join: require('../src/join/tests'),
  keys: require('../src/keys/tests'),
  loop: require('../src/loop/tests'),
  map: require('../src/map/tests'),
  memo: require('../src/memo/tests'),
  move: require('../src/move/tests'),
  none: require('../src/none/tests'),
  noop: require('../src/noop/tests'),
  range: require('../src/range/tests'),
  reduce: require('../src/reduce/tests'),
  reject: require('../src/reject/tests'),
  reverse: require('../src/reverse/tests'),
  set: require('../src/set/tests'),
  slice: require('../src/slice/tests'),
  some: require('../src/some/tests'),
  sort: require('../src/sort/tests'),
  split: require('../src/split/tests'),
  sum: require('../src/sum/tests'),
  swap: require('../src/swap/tests'),
  tap: require('../src/tap/tests'),
  toBoolean: require('../src/toBoolean/tests'),
  toNumber: require('../src/toNumber/tests'),
  toString: require('../src/toString/tests'),
  values: require('../src/values/tests'),
};

(() => {
  const errors = [];
  let total = 0;
  for (const i in tests) {
    for (const j in tests[i]) {
      total += 1;
      const testFunction = i;
      const testTitle = j;
      const testGoal = JSON.stringify(tests[i][j][0]);
      const testMethods = [...tests[i][j]];
      testMethods.shift();
      testMethods.forEach((method) => {
        const error = {
          description: testTitle,
          name: testFunction,
        }
        try {
          const result = JSON.stringify(method());
          if (result !== testGoal) {
            errors.push({
              ...error,
              body: `expected ${testGoal} but got ${result}`,
            });
          }
        } catch (e) {
          errors.push({
            ...error,
            body: e.message,
          });
        }
      });
    }
  }
  if (errors.length) {
    const errorTitle = `FAIL ${errors.length} of ${total} tests.`;
    const errorLines = errors.map(({ body, description, index, name }) =>
      `FAIL(${name} - ${description})${body && ' '}${body}`);
    const errorMessage = [errorTitle]
      .concat(errorLines)
      .join('\n    ');
    throw new Error(errorMessage);
  }
})();
