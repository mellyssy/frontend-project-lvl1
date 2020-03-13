import getRandomInt from '../util.js';

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

export { even, rules };
