#!/usr/bin/env node
import { cons } from '@hexlet/pairs';
import getRandom from '../utils';

export const getValues = () => {
  const question = getRandom(1, 100);
  const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

export const question = 'Answer "yes" if number even otherwise answer "no".\n';
