#!/usr/bin/env node
import { cons } from '@hexlet/pairs';
import { getRandom } from '../utils';
import flow from '..';

const getValues = () => {
  const question = getRandom(1, 100);
  const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

const question = 'Answer "yes" if number even otherwise answer "no".\n';
const game = () => flow(3)(getValues, question);

export default game;
