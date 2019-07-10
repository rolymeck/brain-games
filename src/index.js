#!/usr/bin/env node
import readlineSync from 'readline-sync';

export const welcomeUser = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

export const evenGame = (userName) => {
  let attempt = 1;
  const gameRound = () => {
    const number = Math.round(Math.random() * 100);
    const isEven = number % 2 === 0;
    const correctAnswer = isEven ? 'yes' : 'no';
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer && attempt === 3) {
      console.log(`Correct!\nCongratulations, ${userName}!`);
      return 'win';
    }
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      attempt += 1;
      return gameRound();
    }
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
    return 'lose';
  };
  return gameRound();
};
