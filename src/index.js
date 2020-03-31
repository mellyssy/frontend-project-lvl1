import readlineSync from 'readline-sync';

const maxScore = 3;

const runGame = (play, description) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(description);

  for (let score = 0; score < maxScore; score += 1) {
    const { question, correct } = play();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (correct === answer) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correct}".`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default runGame;
