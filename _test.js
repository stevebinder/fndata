const tests = [
  'all',
  'append',
  'attempt',
  'capitalize',
  'choose',
  'compose',
  'concat',
  'convert',
  'copy',
  'curry',
  'decode',
  'dedupe',
  'ellipsis',
  'encode',
  'entries',
  'fill',
  'filter',
  'find',
  'first',
  'get',
  'id',
  'includes',
  'index',
  'invert',
  'isArray',
  'isBoolean',
  'isElement',
  'isEmpty',
  'isEqual',
  'isError',
  'isFunction',
  'isInfinity',
  'isNan',
  'isNumber',
  'isNull',
  'isObject',
  'isPattern',
  'isShape',
  'isString',
  'isUndefined',
  'join',
  'keys',
  'last',
  'length',
  'loop',
  'lower',
  'map',
  'match',
  'memo',
  //'merge',
  'move',
  'none',
  'noop',
  'prefill',
  'prepend',
  'promise',
  'random',
  'range',
  'reduce',
  'reject',
  'replace',
  'reverse',
  'round',
  'roundDown',
  'roundUp',
  'set',
  'slice',
  'some',
  'sort',
  'split',
  'sum',
  'swap',
  'tap',
  'test',
  'time',
  'timer',
  'toArray',
  'toBoolean',
  'toNumber',
  'toPattern',
  'toString',
  'trim',
  'trimEnd',
  'trimStart',
  'upper',
  'values',
];

const getTestMap = () => tests.reduce(
  (a, b) => ({
    ...a,
    [b]: require(`./${b}/tests`).default,
  }),
  {},
);

const run = () => {
  const errors = [];
  let total = 0;
  const testMap = getTestMap();
  for (const functionName in testMap) {
    for (const testDescription in testMap[functionName]) {
      total += 1;
      const testFunction = functionName;
      const testTitle = testDescription;
      const testGoal = JSON.stringify(testMap[functionName][testDescription][0]);
      const testMethods = [...testMap[functionName][testDescription]];
      testMethods.shift();
      testMethods.forEach((method) => {
        const error = {
          description: testDescription,
          name: functionName,
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
      `FAIL(${name})[${description}] ${body && ' '}${body}`);
    const errorMessage = [errorTitle]
      .concat(errorLines)
      .join('\n    ');
    throw new Error(errorMessage);
  }
};

run();