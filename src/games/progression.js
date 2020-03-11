const rules = 'What number is missing in the progression?';

const getRandomInt = (multi) => Math.floor(Math.random() * multi);

const generateProgression = (start, step) => {
  const res = [start];
  for (let i = 1; i < 10; i += 1) {
    res.push(res[i - 1] + step);
  }

  return res;
};

const progression = () => {
  const start = getRandomInt(100);
  const step = getRandomInt(20);
  const index = getRandomInt(10);

  const arr = generateProgression(start, step);
  const answer = arr[index].toString();
  arr[index] = '...';

  const expression = arr.join(' ');

  return { question: expression, correct: answer };
};

export { progression, rules };
