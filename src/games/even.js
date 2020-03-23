import getRandomInt from '../util.js';
import runGame from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (n) => {
  if (n % 2 === 0) {
    return true;
  }

  return false;
};

const runEven = () => {
  const question = getRandomInt();
  const correct = isEven(question) ? 'yes' : 'no';
  return { question, correct };
};

export default () => runGame(runEven, description);
