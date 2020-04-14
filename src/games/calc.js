import getRandomInt from '../util.js';
import playGame from '../index.js';

const description = 'What is the result of the expression?';
const min = 0;
const max = 100;
const operators = ['+', '-', '*'];

const calculate = (firstNumber, secondNumber, operator) => {
  let answer;
  switch (operator) {
    case '+':
      answer = firstNumber + secondNumber;
      break;
    case '-':
      answer = firstNumber - secondNumber;
      break;
    case '*':
      answer = firstNumber * secondNumber;
      break;
    default:
      return false;
  }
  return answer;
};

const generateCalcData = () => {
  const firstNumber = getRandomInt(min, max);
  const secondNumber = getRandomInt(min, max);

  const operator = operators[getRandomInt(min, (operators.length - 1))];

  const question = `${firstNumber} ${operator} ${secondNumber}`;

  const correctAnswer = calculate(firstNumber, secondNumber, operator).toString();

  return { question, correctAnswer };
};

const runCalc = () => playGame(generateCalcData, description);

export default runCalc;
