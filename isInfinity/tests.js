import isInfinity from './';

export default {
  'Infinity equals Infinity': [
    true,
    () => isInfinity(Infinity),
  ],
  'non-Infinity does not equal Infinity': [
    false,
    () => isInfinity(NaN),
    () => isInfinity(0),
  ],
};