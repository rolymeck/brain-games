#!/usr/bin/env node
import { cons } from '@hexlet/pairs';
import { getRandom, getProgression } from '../utils';
import flow from '..';

const getValue = (progressionLength) => {
  const firstElement = getRandom(1, 10);
  const difference = getRandom(2, 10);
  const hiddenPosition = getRandom(2, progressionLength);
  const question = getProgression(firstElement, difference, hiddenPosition, progressionLength);
  const correctAnswer = String(firstElement + (hiddenPosition - 1) * difference);
  return cons(question, correctAnswer);
};

const question = 'What number is missing in the progression?\n';
const getValues = () => getValue(10);
const game = () => flow(3)(getValues, question);

export default game;
