import getRandomInt from '../util.js';
import runGame from '../index.js';

const min = 0;
const max = 100;
const maxStep = 20;
const progressionLength = 10;
const description = 'What number is missing in the progression?';

const generateProgression = (start, step, len) => {
  const res = [];
  for (let i = 0; i < len; i += 1) {
    res.push(start + step * i);
  }

  return res;
};

const progression = () => {
  const start = getRandomInt(min, max);
  const step = getRandomInt(min, maxStep);
  const index = getRandomInt(min, (progressionLength - 1));

  const arr = generateProgression(start, step, progressionLength);
  const correctAnswer = arr[index].toString();
  arr[index] = '...';

  const question = arr.join(' ');

  return { question, correctAnswer };
};

const runProgression = () => runGame(progression, description);

export default runProgression;
