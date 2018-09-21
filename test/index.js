import { default as all } from 'src/all/tests';
import { default as attempt } from 'src/attempt/tests';
import { default as capitalize } from 'src/capitalize/tests';
import { default as compose } from 'src/compose/tests';
import { default as concat } from 'src/concat/tests';
import { default as copy } from 'src/copy/tests';
import { default as curry } from 'src/curry/tests';
import { default as decode } from 'src/decode/tests';
import { default as ellipsis } from 'src/ellipsis/tests';
import { default as encode } from 'src/encode/tests';
import { default as entries } from 'src/entries/tests';
import { default as fill } from 'src/fill/tests';
import { default as filter } from 'src/filter/tests';
import { default as find } from 'src/find/tests';
import { default as get } from 'src/get/tests';
import { default as id } from 'src/id/tests';
import { default as includes } from 'src/includes/tests';
import { default as invert } from 'src/invert/tests';
import { default as isArray } from 'src/isArray/tests';
import { default as isBoolean } from 'src/isBoolean/tests';
import { default as isElement } from 'src/isElement/tests';
import { default as isEmpty } from 'src/isEmpty/tests';
import { default as isEqual } from 'src/isEqual/tests';
import { default as isFunction } from 'src/isFunction/tests';
import { default as isInfinity } from 'src/isInfinity/tests';
import { default as isNan } from 'src/isNan/tests';
import { default as isNumber } from 'src/isNumber/tests';
import { default as isNull } from 'src/isNull/tests';
import { default as isObject } from 'src/isObject/tests';
export { default as isPattern } from 'src/isPattern/tests';
import { default as isShape } from 'src/isShape/tests';
import { default as isString } from 'src/isString/tests';
import { default as isUndefined } from 'src/isUndefined/tests';
import { default as join } from 'src/join/tests';
import { default as keys } from 'src/keys/tests';
import { default as loop } from 'src/loop/tests';
export { default as lowercase } from 'src/lowercase/tests';
import { default as map } from 'src/map/tests';
import { default as match } from 'src/match/tests';
import { default as memoize } from 'src/memoize/tests';
import { default as move } from 'src/move/tests';
import { default as none } from 'src/none/tests';
import { default as noop } from 'src/noop/tests';
import { default as range } from 'src/range/tests';
import { default as reduce } from 'src/reduce/tests';
import { default as reject } from 'src/reject/tests';
import { default as reverse } from 'src/reverse/tests';
export { default as round } from 'src/round/tests';
export { default as roundDown } from 'src/roundDown/tests';
export { default as roundUp } from 'src/roundUp/tests';
import { default as set } from 'src/set/tests';
import { default as slice } from 'src/slice/tests';
import { default as some } from 'src/some/tests';
import { default as sort } from 'src/sort/tests';
import { default as split } from 'src/split/tests';
import { default as sum } from 'src/sum/tests';
import { default as swap } from 'src/swap/tests';
import { default as tap } from 'src/tap/tests';
import { default as test } from 'src/test/tests';
import { default as toBoolean } from 'src/toBoolean/tests';
import { default as toNumber } from 'src/toNumber/tests';
export { default as toPattern } from 'src/toPattern/tests';
import { default as toString } from 'src/toString/tests';
import { default as uppercase } from 'src/uppercase/tests';
import { default as values } from 'src/values/tests';

const tests = {
  all,
  attempt,
  compose,
  concat,
  copy,
  curry,
  decode,
  ellipsis,
  encode,
  entries,
  fill,
  filter,
  get,
  id,
  includes,
  invert,
  isArray,
  isBoolean,
  isElement,
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
  find,
  join,
  keys,
  loop,
  map,
  match,
  memoize,
  move,
  none,
  noop,
  range,
  reduce,
  reject,
  reverse,
  set,
  slice,
  some,
  sort,
  split,
  sum,
  swap,
  tap,
  toBoolean,
  toNumber,
  toString,
  uppercase,
  values,
};

!(() => {
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
      `FAIL(${name}): ${description} ${body && ' '}${body}`);
    const errorMessage = [errorTitle]
      .concat(errorLines)
      .join('\n    ');
    throw new Error(errorMessage);
  }
})();
