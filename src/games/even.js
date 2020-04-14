import getRandomInt from '../util.js';
import playGame from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const min = 0;
const max = 100;

const isEven = (number) => number % 2 === 0;

const generateEvenData = () => {
  const question = getRandomInt(min, max);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};

export default () => playGame(generateEvenData, description);
