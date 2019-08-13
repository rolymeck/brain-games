#!/usr/bin/env node
import { cons } from '@hexlet/pairs';
import getRandom from '../utils';
import flow from '..';

const getAnswer = (num1, num2, currentOperator) => {
  switch (currentOperator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    default:
      return num1 * num2;
  }
};

const generateRoundData = () => {
  const listOfOperators = '+-*';
  const num1 = getRandom(1, 30);
  const num2 = getRandom(1, 30);
  const currentOperator = listOfOperators[getRandom(0, listOfOperators.length - 1)];
  const question = `${num1} ${currentOperator} ${num2}`;
  const correctAnswer = String(getAnswer(num1, num2, currentOperator));
  return cons(question, correctAnswer);
};

const description = 'What is the result of the expression?';

export default () => flow(generateRoundData, description);
