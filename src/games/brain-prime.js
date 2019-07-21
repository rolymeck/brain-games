#!/usr/bin/env node
import { cons } from '@hexlet/pairs';
import { getRandomInt } from '..';

export const getValues = () => {
  const isPrime = (num) => {
    const iter = (n) => {
      if (n === num) {
        return true;
      }
      if (num % n === 0) {
        return false;
      }
      return iter(n + 1);
    };
    return iter(2);
  };
  const question = getRandomInt(2, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

export const question = 'Answer "yes" if given number is prime. Otherwise answer "no".\n';
