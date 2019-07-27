export const getRandom = (min, max) => Math.floor(Math.random() * ((max - min) + 1)) + min;
export const makeOperation = (num1, num2) => (currentOperator) => {
  switch (currentOperator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    default:
      return num1 * num2;
  }
};
export const findGreatestCommonDivisor = (num1, num2) => {
  if (num1 === num2) {
    return num1;
  }
  const smallest = num1 < num2 ? num1 : num2;
  const biggest = num1 > num2 ? num1 : num2;
  const iter = (big, small) => {
    if (big % small === 0) {
      return small;
    }
    return iter(small, big % small);
  };
  return iter(biggest, smallest);
};
export const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  const iter = (n) => {
    if (n === num) {
      return true;
    }
    if (num % n === 0) {
      return false;
    }
    return iter(n + 1);
  };
  return iter(2);
};
export const getProgression = (firstElement, difference, hiddenPosition, progressionLength) => {
  let result = `${firstElement}`;
  for (let i = 1; i < progressionLength; i += 1) {
    result += i === hiddenPosition - 1 ? ' ..' : ` ${firstElement + i * difference}`;
  }
  return result;
};
