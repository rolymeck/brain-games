#!/usr/bin/env node
import { cons } from '@hexlet/pairs';

const game = () => {
  const progression = (f, di, de) => {
    let result = `${f}`;
    for (let i = 1; i < 10; i += 1) {
      result += i === de - 1 ? ' ..' : ` ${f + i * di}`;
    }
    return result;
  };
  const firstNum = Math.round(Math.random() * 10);
  const diffRandom = Math.ceil(Math.random() * 10);
  const diff = diffRandom === 1 ? 2 : diffRandom;
  const deletePosition = Math.ceil(Math.random() * 9) + 1;
  const question = progression(firstNum, diff, deletePosition);
  const correctAnswer = String(firstNum + (deletePosition - 1) * diff);
  return cons(question, correctAnswer);
};

export default game;
