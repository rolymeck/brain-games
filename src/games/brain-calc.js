#!/usr/bin/env node
import { cons } from '@hexlet/pairs';
import { flow } from '..';

const game = () => {
  const operator = (num) => {
    if (num <= 33) {
      return '+';
    }
    if (num <= 66) {
      return '-';
    }
    return '*';
  };
  const operation = (num1, num2, operator) => {
    switch (operator(num3)) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      default:
        return num1 * num2;
    }
  };
  const num1 = Math.round(Math.random() * 30);
  const num2 = Math.round(Math.random() * 30);
  const num3 = Math.round(Math.random() * 100);
  const question = `${num1} ${operator(num3)} ${num2}`;
  const correctAnswer = String(operation(num1, num2, operator));
  return cons(question, correctAnswer);
};

console.log('Welcome to the Brain Games!\nWhat is the result of the expression?\n');
flow(game);
