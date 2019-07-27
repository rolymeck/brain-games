#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const flow = amountOfRounds => (getValue, question) => {
  console.log('Welcome to the Brain Games!');
  console.log(question);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  const gameRound = (round = 1) => {
    if (round > amountOfRounds) {
      console.log(`Congratulations, ${userName}!`);
      return true;
    }
    const pairQuestionAnswer = getValue();
    console.log(`Question: ${car(pairQuestionAnswer)}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === cdr(pairQuestionAnswer)) {
      console.log('Correct!');
      return gameRound(round + 1);
    }
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${cdr(pairQuestionAnswer)}'.`);
    console.log(`Let's try again, ${userName}!`);
    return false;
  };
  return gameRound();
};
export default flow;
