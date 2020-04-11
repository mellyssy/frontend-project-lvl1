/* eslint-disable no-param-reassign */
import getRandomInt from '../util.js';
import runGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';
const min = 1;
const max = 100;

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
  const a = getRandomInt(min, max);
  const b = getRandomInt(min, max);

  const question = `${a} ${b}`;

  const correctAnswer = findGcd(a, b).toString();
  return { question, correctAnswer };
};

const runGcd = () => runGame(gcd, description);

export default runGcd;
