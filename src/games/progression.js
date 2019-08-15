import { cons } from '@hexlet/pairs';
import getRandom from '../utils';
import flow from '..';

const getQuestion = (first, diff, hiddenElementPosition, progressionLength) => {
  let question = '';
  for (let i = 0; i < progressionLength; i += 1) {
    question += i === hiddenElementPosition - 1 ? ' ..' : ` ${first + i * diff}`;
  }
  return question;
};

const progressionLength = 10;

const generateRoundData = () => {
  const first = getRandom(1, 10);
  const diff = getRandom(2, 10);
  const hiddenElementPosition = getRandom(1, progressionLength);
  const question = getQuestion(first, diff, hiddenElementPosition, progressionLength);
  const correctAnswer = String(first + (hiddenElementPosition - 1) * diff);
  return cons(question, correctAnswer);
};

const description = 'What number is missing in the progression?';

export default () => flow(generateRoundData, description);
