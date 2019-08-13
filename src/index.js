#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const flow = (generateRoundData, description) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  console.log('');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  const roundsCount = 3;
  const buildRound = (counter) => {
    if (counter > roundsCount) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    const questionAndAnswer = generateRoundData();
    const question = car(questionAndAnswer);
    const answer = cdr(questionAndAnswer);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === answer) {
      console.log('Correct!');
      buildRound(counter + 1);
      return;
    }
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
    console.log(`Let's try again, ${userName}!`);
  };
  return buildRound(1);
};
export default flow;
