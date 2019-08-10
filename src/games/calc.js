#!/usr/bin/env node
import { cons } from '@hexlet/pairs';
import getRandom from '../utils';
import flow from '..';

const makeOperation = (num1, num2) => (currentOperator) => {
  switch (currentOperator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    default:
      return num1 * num2;
  }
};

const getPair = (listOfOperators) => {
  const getOperator = index => listOfOperators[index];
  const num1 = getRandom(1, 30);
  const num2 = getRandom(1, 30);
  const indexOfOperator = getRandom(0, listOfOperators.length - 1);
  const currentOperator = getOperator(indexOfOperator);
  const question = `${num1} ${currentOperator} ${num2}`;
  const correctAnswer = String(makeOperation(num1, num2)(currentOperator));
  return cons(question, correctAnswer);
};

const description = 'What is the result of the expression?';
const getValues = () => getPair('+-*');
const game = () => flow(3)(getValues, description);

export default game;
