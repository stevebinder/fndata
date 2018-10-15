import * as tests from './tests';

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
    `FAIL(${name})[${description}] ${body && ' '}${body}`);
  const errorMessage = [errorTitle]
    .concat(errorLines)
    .join('\n    ');
  throw new Error(errorMessage);
}
exit;
