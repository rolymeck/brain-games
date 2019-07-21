#!/usr/bin/env node
import { cons } from '@hexlet/pairs';
import { getRandomInt } from '..';

export const getValues = () => {
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
  const num1 = getRandomInt(1, 47);
  const num2 = getRandomInt(1, 47);
  const question = `${num1} ${num2}`;
  const correctAnswer = String(findGreatestCommonDivisor(num1, num2));
  return cons(question, correctAnswer);
};

export const question = 'Find the greatest common divisor of given numbers.\n';
