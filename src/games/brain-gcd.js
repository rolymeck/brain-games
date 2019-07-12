#!/usr/bin/env node
import { cons } from '@hexlet/pairs';

const game = () => {
  const gcd = (num1, num2) => {
    if (num1 === num2) {
      return num1;
    }
    const smallest = num1 < num2 ? num1 : num2;
    const biggest = num1 > num2 ? num1 : num2;
    const find = (small, big) => (acc, div = 2) => {
      if (div > small) {
        return acc;
      }
      if (small % div === 0 && big % div === 0) {
        return find(small / div, big / div)(acc * div, div);
      }
      return find(small, big)(acc, div + 1);
    };
    return find(smallest, biggest)(1, 2);
  };
  const num1 = Math.round(Math.random() * 47);
  const num2 = Math.round(Math.random() * 47);
  const question = `${num1} ${num2}`;
  const correctAnswer = String(gcd(num1, num2));
  return cons(question, correctAnswer);
};

export default game;
