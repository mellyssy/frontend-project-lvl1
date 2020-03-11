/* eslint-disable no-param-reassign */
import getRandomInt from '../util.js';

const rules = 'Find the greatest common divisor of given numbers.';

const findGcd = (a, b) => {
  if (a === b) {
    return a;
  }

  if (a < b) {
    [a, b] = [b, a];
  }

  let remainder = a % b;

  while (remainder) {
    a = b;
    b = remainder;
    remainder = a % b;
  }

  return b;
};

const gcd = () => {
  const a = getRandomInt();
  const b = getRandomInt();

  const question = `${a} ${b}`;

  const correct = findGcd(a, b).toString();

  return { question, correct };
};

export { gcd, rules };
