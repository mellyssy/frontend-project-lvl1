import getRandomInt from '../util.js';
import runGame from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const min = 0;
const max = 100;

const isEven = (n) => n % 2 === 0;

const runEven = () => {
  const question = getRandomInt(min, max);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};

export default () => runGame(runEven, description);
