import getRandomInt from '../util.js';
import runGame from '../index.js';

const description = 'What is the result of the expression?';
const min = 0;
const max = 100;

const calculate = (a, b, operator) => {
  let answer = 0;
  switch (operator) {
    case '+':
      answer = a + b;
      break;
    case '-':
      answer = a - b;
      break;
    case '*':
      answer = a * b;
      break;
    default:
      break;
  }
  return answer;
};

const operators = ['+', '-', '*'];

const calc = () => {
  const a = getRandomInt(min, max);
  const b = getRandomInt(min, max);

  const operator = operators[getRandomInt(min, (operators.length - 1))];

  const question = `${a} ${operator} ${b}`;

  const correct = calculate(a, b, operator).toString();

  return { question, correct };
};

const runCalc = () => runGame(calc, description);

export default runCalc;
