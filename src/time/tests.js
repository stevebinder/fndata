import time from './time';

export default {
  'should return now': [
    true,
    () => Date.now() === time(),
  ],
  'should return the inputted timestamp': [
    1,
    () => time(1),
  ],
};