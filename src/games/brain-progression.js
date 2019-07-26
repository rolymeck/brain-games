#!/usr/bin/env node
import { cons } from '@hexlet/pairs';
import getRandom from '../utils';

export const getValues = () => {
  const progressionLength = 10;
  const progression = (firstNum, diff, hiddenPosition) => {
    let result = `${firstNum}`;
    for (let i = 1; i < progressionLength; i += 1) {
      result += i === hiddenPosition - 1 ? ' ..' : ` ${firstNum + i * diff}`;
    }
    return result;
  };
  const firstNumber = getRandom(1, 10);
  const difference = getRandom(2, 10);
  const hiddenPlace = getRandom(2, progressionLength);
  const question = progression(firstNumber, difference, hiddenPlace);
  const correctAnswer = String(firstNumber + (hiddenPlace - 1) * difference);
  return cons(question, correctAnswer);
};

export const question = 'What number is missing in the progression?\n';
