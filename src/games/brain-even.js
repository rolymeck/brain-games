#!/usr/bin/env node
import { cons } from '@hexlet/pairs';

const game = () => {
  const question = Math.round(Math.random() * 100);
  const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

export default game;
