import { cons } from '@hexlet/pairs';
import getRandom from '../utils';
import flow from '..';

const isEven = num => num % 2 === 0;

const generateRoundData = () => {
  const question = getRandom(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

const description = 'Answer "yes" if number even otherwise answer "no".';

export default () => flow(generateRoundData, description);
