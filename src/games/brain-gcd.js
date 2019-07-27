#!/usr/bin/env node
import { cons } from '@hexlet/pairs';
import { getRandom, findGreatestCommonDivisor } from '../utils';
import flow from '..';

const getValues = () => {
  const num1 = getRandom(1, 47);
  const num2 = getRandom(1, 47);
  const question = `${num1} ${num2}`;
  const correctAnswer = String(findGreatestCommonDivisor(num1, num2));
  return cons(question, correctAnswer);
};

const question = 'Find the greatest common divisor of given numbers.\n';
const game = () => flow(3)(getValues, question);

export default game;
