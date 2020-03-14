import getRandomInt from '../util.js';
import runGame from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (n) => {
  if (n % 2 === 0) {
    return true;
  }

  return false;
};

const even = () => {
  const question = getRandomInt();
  const correct = isEven(question) ? 'yes' : 'no';
  return { question, correct };
};

const runEven = () => runGame(even, rules);

export default runEven;
