const append = require('./append/tests');
const attempt = require('./attempt/tests');
const copy = require('./copy/tests');
const entries = require('./entries/tests');
const fill = require('./fill/tests');
const filter = require('./filter/tests');
const get = require('./get/tests');
const includes = require('./includes/tests');
const invert = require('./invert/tests');
const isArray = require('./isArray/tests');
const isElement = require('./isElement/tests');
const isEmpty = require('./isEmpty/tests');
const isEqual = require('./isEqual/tests');
const isFunction = require('./isFunction/tests');
const isInfinity = require('./isInfinity/tests');
const isNan = require('./isNan/tests');
const isNumber = require('./isNumber/tests');
const isNull = require('./isNull/tests');
const isObject = require('./isObject/tests');
const isShape = require('./isShape/tests');
const isString = require('./isString/tests');
const isUndefined = require('./isUndefined/tests');
const join = require('./join/tests');
const loop = require('./loop/tests');
const map = require('./map/tests');
const memo = require('./memo/tests');
const noop = require('./noop/tests');
const prepend = require('./prepend/tests');
const reduce = require('./reduce/tests');
const reject = require('./reject/tests');
const remove = require('./remove/tests');
const reverse = require('./reverse/tests');
const set = require('./set/tests');
const sum = require('./sum/tests');
const swap = require('./swap/tests');
const toNumber = require('./toNumber/tests');
const toString = require('./toString/tests');

const tests = {
  append,
  attempt,
  copy,
  entries,
  fill,
  filter,
  get,
  includes,
  invert,
  isArray,
  isEmpty,
  isEqual,
  isFunction,
  isInfinity,
  isNan,
  isNumber,
  isNull,
  isObject,
  isShape,
  isString,
  isUndefined,
  join,
  loop,
  map,
  memo,
  noop,
  prepend,
  reduce,
  reject,
  remove,
  reverse,
  set,
  sum,
  swap,
  toNumber,
  toString,
};

const errors = [];
let total = 0;

for (const i in tests) {
  for (const j in tests[i]) {
    total += 1;
    const testFunction = i;
    const testTitle = j;
    const testGoal = JSON.stringify(tests[i][j][0]);
    const testMethods = [...tests[i][j] ];
    testMethods.shift();
    testMethods.forEach((method) => {
      try {
        const result = JSON.stringify(method());
        if (result !== testGoal) {
          errors.push({
            body: `expected ${testGoal} but got ${result}`,
            description: testTitle,
            name: testFunction,
          });
        }
      } catch (e) {
        errors.push({
          body: e.message,
          description: testTitle,
          name: testFunction,
        });
      }
    });
  }
}

if (errors.length) {
  console.log(`FAILED ${errors.length} of ${total}`);
} else {
  console.log(`SUCCESS passed all ${total} tests`);
}
errors.forEach(({ body, description, name }) =>
  console.log(`FAILED(${name}: ${description})${body && ' '}${body}`));
