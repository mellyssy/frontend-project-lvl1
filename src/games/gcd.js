/* eslint-disable no-param-reassign */
const rules = 'Find the greatest common divisor of given numbers.';

const getRandomInt = () => Math.floor(Math.random() * 100);

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

  const expression = `${a} ${b}`;

  const answer = findGcd(a, b).toString();

  return { question: expression, correct: answer };
};

export { gcd, rules };
