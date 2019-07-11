#!/usr/bin/env node
import { cons } from '@hexlet/pairs';
import { flow } from '..';

const game = () => {
  const question = Math.round(Math.random() * 100);
  const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
  return cons(question, correctAnswer);
}

console.log('Welcome to the Brain Games!\nAnswer "yes" if number even otherwise answer "no".\n');
flow(game);
