#!/usr/bin/env node
import { cons } from '@hexlet/pairs';
import { getRandom, isPrime } from '../utils';
import flow from '..';

const getValues = () => {
  const question = getRandom(2, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

const question = 'Answer "yes" if given number is prime. Otherwise answer "no".\n';
const game = () => flow(3)(getValues, question);

export default game;
