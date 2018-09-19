import isShape from './';

export default {
  'compare partial shapes': [
    true,
    () => isShape(
      { name: 'bob', age: 32 },
      { name: 'bob' },
    ),
  ],
  'compare matching partial deep shapes': [
    true,
    () => isShape(
      {
        name: 'bob',
        age: 32,
        status: {
          active: true,
        },
      },
      { status: { active: true } },
    ),
  ],
  'compare non-matching partial deep shapes': [
    false,
    () => isShape(
      {
        name: 'bob',
        age: 32,
        status: {
          active: true,
        },
      },
      { status: { active: false } },
    ),
  ],
  'compare non-exact shapes': [
    true,
    () => isShape(
      { name: 'bob', age: 32 },
      { name: 'bob', age: 32 },
    ),
  ],
  'compare exact shapes': [
    true,
    () => isShape(
      { name: 'bob', age: 32 },
      { name: 'bob', age: 32 },
      true,
    ),
  ],
  'compare a non-matching shape': [
    false,
    () => isShape(
      { name: 'bob', age: 32 },
      { name: 'bob', age: 32, goal: 'succeed' },
    ),
  ],
  'compare non-matching exact shapes': [
    false,
    () => isShape(
      { name: 'bob', age: 32 },
      { name: 'bob' },
      true,
    ),
  ],
};