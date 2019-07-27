#!/usr/bin/env node
import { cons } from '@hexlet/pairs';
import { getRandom, makeOperation } from '../utils';
import flow from '..';

const getValue = (listOfOperators) => {
  const getOperator = index => listOfOperators[index];
  const num1 = getRandom(1, 30);
  const num2 = getRandom(1, 30);
  const indexOfOperator = getRandom(0, listOfOperators.length - 1);
  const currentOperator = getOperator(indexOfOperator);
  const question = `${num1} ${currentOperator} ${num2}`;
  const correctAnswer = String(makeOperation(num1, num2)(currentOperator));
  return cons(question, correctAnswer);
};

const question = 'What is the result of the expression?\n';
const getValues = () => getValue('+-*');
const game = () => flow(3)(getValues, question);

export default game;
