import { hello, getAnswer } from './cli.js';

const gameRun = (game, rules) => {
  const name = hello();

  console.log(rules);
  let score = 0;

  while (score < 3) {
    const { question, correct } = game();
    console.log(`Question: ${question}`);
    const answer = getAnswer();

    if (correct === answer) {
      score += 1;
    } else {
      console.log(
        `"${answer}" is wrong answer ;(. Correct answer was "${correct}".\nLet's try again, ${name}!`,
      );
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default gameRun;
