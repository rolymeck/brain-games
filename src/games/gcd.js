#!/usr/bin/env node
import { cons } from '@hexlet/pairs';
import getRandom from '../utils';
import flow from '..';

const findGreatestCommonDivisor = (num1, num2) => {
  if (num1 === num2) {
    return num1;
  }
  const smallest = num1 < num2 ? num1 : num2;
  const biggest = num1 > num2 ? num1 : num2;
  const iter = (big, small) => {
    if (big % small === 0) {
      return small;
    }
    return iter(small, big % small);
  };
  return iter(biggest, smallest);
};

const getValues = () => {
  const num1 = getRandom(1, 47);
  const num2 = getRandom(1, 47);
  const question = `${num1} ${num2}`;
  const correctAnswer = String(findGreatestCommonDivisor(num1, num2));
  return cons(question, correctAnswer);
};

const description = 'Find the greatest common divisor of given numbers.';
const game = () => flow(3)(getValues, description);

export default game;
