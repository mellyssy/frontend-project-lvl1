/* eslint-disable no-param-reassign */
import getRandomInt from '../util.js';
import playGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';
const min = 1;
const max = 100;

const findGcd = (firstNumber, secondNumber) => {
  if (firstNumber === secondNumber) {
    return firstNumber;
  }

  if (firstNumber < secondNumber) {
    [firstNumber, secondNumber] = [secondNumber, firstNumber];
  }

  if (secondNumber === 0) {
    return firstNumber;
  }

  let remainder = firstNumber % secondNumber;

  while (remainder) {
    firstNumber = secondNumber;
    secondNumber = remainder;
    remainder = firstNumber % secondNumber;
  }

  return secondNumber;
};

const generateGcdData = () => {
  const firstNumber = getRandomInt(min, max);
  const secondNumber = getRandomInt(min, max);

  const question = `${firstNumber} ${secondNumber}`;

  const correctAnswer = findGcd(firstNumber, secondNumber).toString();
  return { question, correctAnswer };
};

const runGcd = () => playGame(generateGcdData, description);

export default runGcd;
