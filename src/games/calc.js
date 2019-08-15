import { cons } from '@hexlet/pairs';
import getRandom from '../utils';
import flow from '..';

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return null;
  }
};

const operators = '+-*';

const generateRoundData = () => {
  const num1 = getRandom(1, 30);
  const num2 = getRandom(1, 30);
  const operator = operators[getRandom(0, operators.length - 1)];
  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = String(calculate(num1, num2, operator));
  return cons(question, correctAnswer);
};

const description = 'What is the result of the expression?';

export default () => flow(generateRoundData, description);
