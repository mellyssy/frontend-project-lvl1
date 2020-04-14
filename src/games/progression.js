import getRandomInt from '../util.js';
import playGame from '../index.js';

const min = 0;
const max = 100;
const maxStep = 20;
const progressionLength = 10;
const description = 'What number is missing in the progression?';

const generateProgression = (start, step, length) => {
  const result = [];
  for (let counter = 0; counter < length; counter += 1) {
    result.push(start + step * counter);
  }

  return result;
};

const generateProgressionData = () => {
  const start = getRandomInt(min, max);
  const step = getRandomInt(min, maxStep);
  const index = getRandomInt(min, (progressionLength - 1));

  const arr = generateProgression(start, step, progressionLength);
  const correctAnswer = arr[index].toString();
  arr[index] = '...';

  const question = arr.join(' ');

  return { question, correctAnswer };
};

const runProgression = () => playGame(generateProgressionData, description);

export default runProgression;
