import getRandomInt from '../util.js';
import playGame from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const min = 0;
const max = 100;

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let counter = 2; counter <= Math.floor(number / 2); counter += 1) {
    if (number % counter === 0) {
      return false;
    }
  }

  return true;
};

const generatePrimeData = () => {
  const question = getRandomInt(min, max);

  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return { question, correctAnswer };
};

const runPrime = () => playGame(generatePrimeData, description);

export default runPrime;
