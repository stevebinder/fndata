const append = require('../src/append/tests');
const attempt = require('../src/attempt/tests');
const compose = require('../src/compose/tests');
const concat = require('../src/concat/tests');
const copy = require('../src/copy/tests');
const curry = require('../src/curry/tests');
const entries = require('../src/entries/tests');
const fill = require('../src/fill/tests');
const get = require('../src/get/tests');
const id = require('../src/id/tests');
const includes = require('../src/includes/tests');
const invert = require('../src/invert/tests');
const isArray = require('../src/isArray/tests');
const isElement = require('../src/isElement/tests');
const isEmpty = require('../src/isEmpty/tests');
const isEqual = require('../src/isEqual/tests');
const isFunction = require('../src/isFunction/tests');
const isInfinity = require('../src/isInfinity/tests');
const isNan = require('../src/isNan/tests');
const isNumber = require('../src/isNumber/tests');
const isNull = require('../src/isNull/tests');
const isObject = require('../src/isObject/tests');
const isShape = require('../src/isShape/tests');
const isString = require('../src/isString/tests');
const isUndefined = require('../src/isUndefined/tests');
const join = require('../src/join/tests');
const keep = require('../src/keep/tests');
const loop = require('../src/loop/tests');
const map = require('../src/map/tests');
const memo = require('../src/memo/tests');
const move = require('../src/move/tests');
const noop = require('../src/noop/tests');
const prepend = require('../src/prepend/tests');
const reduce = require('../src/reduce/tests');
const reject = require('../src/reject/tests');
const reverse = require('../src/reverse/tests');
const set = require('../src/set/tests');
const sort = require('../src/sort/tests');
const split = require('../src/split/tests');
const sum = require('../src/sum/tests');
const swap = require('../src/swap/tests');
const toBoolean = require('../src/toBoolean/tests');
const toNumber = require('../src/toNumber/tests');
const toString = require('../src/toString/tests');

const tests = {
  append,
  attempt,
  compose,
  concat,
  copy,
  curry,
  entries,
  fill,
  get,
  id,
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
  keep,
  loop,
  map,
  memo,
  move,
  noop,
  prepend,
  reduce,
  reject,
  reverse,
  set,
  sort,
  split,
  sum,
  swap,
  toBoolean,
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
  console.log(`FAILED ${errors.length} of ${total}`);
} else {
  console.log(`SUCCESS passed all ${total} tests`);
}
errors.forEach(({ body, description, index, name }) =>
  console.log(`FAILED(${name} - ${description})${body && ' '}${body}`));
