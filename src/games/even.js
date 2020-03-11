import getRandomInt from '../util.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const even = () => {
  const question = getRandomInt();
  let correct = 'no';

  if (question % 2 === 0) {
    correct = 'yes';
  }

  return { question, correct };
};

export { even, rules };
