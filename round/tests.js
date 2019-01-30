import round from './';

export default {
  'round a number': [
    2,
    () => round(1.9),
  ],
  'rounda non-number': [
    2,
    () => round('1.9'),
  ],
  'round down when direction is implied': [
    2,
    () => round(2.5, -1),
    () => round(2.5, false),
  ],
  'round up when direction is implied': [
    2,
    () => round(1.5, 1),
    () => round(1.5, true),
  ],
};