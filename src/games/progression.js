#!/usr/bin/env node
import { cons } from '@hexlet/pairs';
import getRandom from '../utils';
import flow from '..';

const getProgression = (firstElement, difference, hiddenPosition, progressionLength) => {
  let result = `${firstElement}`;
  for (let i = 1; i < progressionLength; i += 1) {
    result += i === hiddenPosition - 1 ? ' ..' : ` ${firstElement + i * difference}`;
  }
  return result;
};

const getPair = (progressionLength) => {
  const firstElement = getRandom(1, 10);
  const difference = getRandom(2, 10);
  const hiddenPosition = getRandom(2, progressionLength);
  const question = getProgression(firstElement, difference, hiddenPosition, progressionLength);
  const correctAnswer = String(firstElement + (hiddenPosition - 1) * difference);
  return cons(question, correctAnswer);
};

const description = 'What number is missing in the progression?';
const getValues = () => getPair(10);
const game = () => flow(3)(getValues, description);

export default game;
