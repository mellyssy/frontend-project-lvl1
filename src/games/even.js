const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const getRandomInt = () => Math.floor(Math.random() * 100);

const even = () => {
  const num = getRandomInt();
  let answer = 'no';

  if (num % 2 === 0) {
    answer = 'yes';
  }

  return { question: num, correct: answer };
};

export { even, rules };
