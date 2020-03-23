import getRandomInt from '../util.js';
import runGame from '../index.js';

const maxOperators = 3;
const description = 'What is the result of the expression?';

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;

const operators = [['+', add], ['-', subtract], ['*', multiply]];

const calc = () => {
  const a = getRandomInt();
  const b = getRandomInt();

  const [operator, operation] = operators[getRandomInt(maxOperators)];

  const question = `${a} ${operator} ${b}`;

  const correct = operation(a, b).toString();

  return { question, correct };
};

const runCalc = () => runGame(calc, description);

export default runCalc;
