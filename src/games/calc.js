const rules = 'What is the result of the expression?';

const getRandomInt = (mult) => Math.floor(Math.random() * mult);

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;

const operators = [['+', add], ['-', subtract], ['*', multiply]];

const calc = () => {
  const a = getRandomInt(100);
  const b = getRandomInt(100);

  const [operator, operation] = operators[getRandomInt(3)];

  const expression = `${a} ${operator} ${b}`;

  const answer = operation(a, b).toString();

  return { question: expression, correct: answer };
};

export { calc, rules };
