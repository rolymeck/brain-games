#!/usr/bin/env node
import { cons } from '@hexlet/pairs';
import getRandom from '../utils';
import flow from '..';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  const iter = (n) => {
    if (n > num / 2) {
      return true;
    }
    if (num % n === 0) {
      return false;
    }
    return iter(n + 1);
  };
  return iter(2);
};

const generateRoundData = () => {
  const question = getRandom(2, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => flow(generateRoundData, description);
