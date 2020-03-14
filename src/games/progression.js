import getRandomInt from '../util.js';
import runGame from '../index.js';

const maxStep = 20;
const arrLength = 10;
const rules = 'What number is missing in the progression?';

const generateProgression = (start, step) => {
  const res = [start];
  for (let i = 1; i < arrLength; i += 1) {
    res.push(res[i - 1] + step);
  }

  return res;
};

const progression = () => {
  const start = getRandomInt();
  const step = getRandomInt(maxStep);
  const index = getRandomInt(arrLength);

  const arr = generateProgression(start, step);
  const correct = arr[index].toString();
  arr[index] = '...';

  const question = arr.join(' ');

  return { question, correct };
};

const runProgression = () => runGame(progression, rules);

export default runProgression;
