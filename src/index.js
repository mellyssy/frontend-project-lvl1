import readlineSync from 'readline-sync';

const runGame = (game, rules) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(rules);

  let score = 0;

  while (score < 3) {
    const { question, correct } = game();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (correct === answer) {
      score += 1;
      console.log('Correct!');
    } else {
      console.log(
        `"${answer}" is wrong answer ;(. Correct answer was "${correct}".\nLet's try again, ${name}!`,
      );
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default runGame;
