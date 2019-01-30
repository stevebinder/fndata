import toBoolean from './';

export default {
  'truthy values': [
    true,
    () => toBoolean(1),
    () => toBoolean('1'),
    () => toBoolean({}),
    () => toBoolean([]),
    () => toBoolean(() => {}),
  ],
  'falsey values': [
    false,
    () => toBoolean(undefined),
    () => toBoolean(null),
    () => toBoolean(false),
    () => toBoolean(0),
    () => toBoolean(''),
  ],
};