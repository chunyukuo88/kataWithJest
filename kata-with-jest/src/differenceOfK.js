/**
* Given an array of unique numbers and the number k, list out the pairs
* that have a difference of k.
* */

export const listPairsOfDeltaK = (arrayOfIntegers, k) => {
  if (inputsAreInvalid(arrayOfIntegers, k)) return errorMessage;
  arrayOfIntegers.sort();
  return producePairs(arrayOfIntegers, k);
};

const producePairs = (arrayOfIntegers, k) => {
  const result = [];
  for (let i = 0; i < arrayOfIntegers.length; i++) {
    if (arrayOfIntegers[i + 1] - arrayOfIntegers[i] === k) {
      const pair = [arrayOfIntegers[i], arrayOfIntegers[i+1]];
      result.push(pair);
    }
  }
  return result;
};

const inputsAreInvalid = (arrayOfIntegers, k) => {
  if (arrayOfIntegers.length < 2 | typeof k !== 'number') return true;
  return false;
};

export const errorMessage = 'One or more of the inputs is invalid.';

