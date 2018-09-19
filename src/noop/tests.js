import noop from './';

export default {
  'should return undefined': [
    undefined,
    () => noop(),
  ],
  'should be equal': [
    true,
    () => noop === noop,
  ],
};