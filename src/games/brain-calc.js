#!/usr/bin/env node
import { cons } from '@hexlet/pairs';
import getRandom from '../utils';

export const getValues = () => {
  const listOfOperators = '+-*';
  const getOperator = num => listOfOperators[num];
  const makeOperation = (num1, num2) => (currOperator) => {
    switch (currOperator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      default:
        return num1 * num2;
    }
  };
  const num1 = getRandom(1, 30);
  const num2 = getRandom(1, 30);
  const indexOfOperator = getRandom(0, listOfOperators.length - 1);
  const currentOperator = getOperator(indexOfOperator);
  const question = `${num1} ${currentOperator} ${num2}`;
  const correctAnswer = String(makeOperation(num1, num2)(currentOperator));
  return cons(question, correctAnswer);
};

export const question = 'What is the result of the expression?\n';
