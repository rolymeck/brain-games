#!/usr/bin/env node
import { cons } from '@hexlet/pairs';
import { getRandomInt } from '..';

export const getValues = () => {
  const operators = '+-*';
  const operator = num => operators[num];
  const operation = (num1, num2) => (symbol) => {
    switch (symbol) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      default:
        return num1 * num2;
    }
  };
  const num1 = getRandomInt(1, 30);
  const num2 = getRandomInt(1, 30);
  const indexOfOperator = getRandomInt(0, 2);
  const question = `${num1} ${operator(indexOfOperator)} ${num2}`;
  const correctAnswer = String(operation(num1, num2)(operator(indexOfOperator)));
  return cons(question, correctAnswer);
};

export const question = 'What is the result of the expression?\n';
