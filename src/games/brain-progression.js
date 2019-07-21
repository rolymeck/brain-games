#!/usr/bin/env node
import { cons } from '@hexlet/pairs';
import { getRandomInt } from '..';

export const getValues = () => {
  const progressionLength = 10;
  const progression = (firstNum, diff, removedPosition) => {
    let result = `${firstNum}`;
    for (let i = 1; i < progressionLength; i += 1) {
      result += i === removedPosition - 1 ? ' ..' : ` ${firstNum + i * diff}`;
    }
    return result;
  };
  const firstNumber = getRandomInt(1, 10);
  const difference = getRandomInt(2, 10);
  const whereDelete = getRandomInt(2, progressionLength);
  const question = progression(firstNumber, difference, whereDelete);
  const correctAnswer = String(firstNumber + (whereDelete - 1) * difference);
  return cons(question, correctAnswer);
};

export const question = 'What number is missing in the progression?\n';
