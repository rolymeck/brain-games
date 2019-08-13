#!/usr/bin/env node
import { cons } from '@hexlet/pairs';
import getRandom from '../utils';
import flow from '..';

const getQuestion = (firstElement, difference, hiddenElementPosition, progressionLength) => {
  let result = '';
  for (let i = 0; i < progressionLength; i += 1) {
    result += i === hiddenElementPosition - 1 ? ' ..' : ` ${firstElement + i * difference}`;
  }
  return result;
};

const generateRoundData = () => {
  const progressionLength = 10;
  const firstElement = getRandom(1, 10);
  const difference = getRandom(2, 10);
  const hiddenElementPosition = getRandom(1, progressionLength);
  const question = getQuestion(firstElement, difference, hiddenElementPosition, progressionLength);
  const correctAnswer = String(firstElement + (hiddenElementPosition - 1) * difference);
  return cons(question, correctAnswer);
};

const description = 'What number is missing in the progression?';

export default () => flow(generateRoundData, description);
