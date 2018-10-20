import time from './';
import isNumber from 'src/isNumber';

export default {
  'should return a number': [
    true,
    () => isNumber(time()),
  ],
  'should return the inputted timestamp': [
    1,
    () => time(1),
  ],
};