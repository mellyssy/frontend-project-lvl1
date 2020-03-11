import getRandomInt from '../util.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (n) => {
  if (n < 4) {
    return true;
  }

  for (let i = 2; i <= Math.floor(n / 2); i += 1) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
};

const prime = () => {
  const question = getRandomInt();

  const correct = isPrime(question) ? 'yes' : 'no';

  return { question, correct };
};

export { prime, rules };
