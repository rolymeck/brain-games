#!/usr/bin/env node
import { cons } from '@hexlet/pairs';

const game = () => {
  const isSimple = (num) => {
    const iter = (n) => {
      if (n === num) {
        return 'yes';
      }
      if (num % n === 0) {
        return 'no';
      }
      return iter(n + 1);
    };
    return iter(2);
  };
  const question = Math.ceil(Math.random() * 100 + 1);
  const correctAnswer = isSimple(question);
  return cons(question, correctAnswer);
};

export default game;
