import getRandomInt from '../util.js';
import runGame from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const min = 0;
const max = 100;

const isPrime = (n) => {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i <= Math.floor(n / 2); i += 1) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
};

const prime = () => {
  const question = getRandomInt(min, max);

  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return { question, correctAnswer };
};

const runPrime = () => runGame(prime, description);

export default runPrime;
