/**
 * Given a smaller string s and a bigger string b, design an algorithm
 * to find all permutations of the shorter string within the longer one.
 * Print the location of each permutation.
 * Source: Page 70 of Laakmann McDowell
 * */

export const findPermutations = (smallString, bigString) => {
  const [smallStringAsArray, bigStringAsArray] = [smallString.split(''), bigString.split('')];
  const [sLength, bLength] = [smallStringAsArray.length, bigStringAsArray.length];
  const sortedSmallString = sortString(smallString);
  return getPermutationsAndIndexes(sLength, bLength, bigString,sortedSmallString);
};

const getPermutationsAndIndexes = (sLength, bLength, bigString, sortedSmallString) => {
  const [permutations, indexes] = [[], []];
  for (let i = 0; i < (bLength - sLength) + 1; i++) {
    const window = bigString.slice(i, sLength + i);
    const sortedWindow = sortString(window);
    console.log(sortedWindow);
    if (sortedSmallString === sortedWindow) {
      permutations.push(window);
      indexes.push(i);
    }
  }
  return { permutations, indexes };
};

const sortString = (inputString) => {
  const inputAsArray = inputString.split('');
  return inputAsArray.sort().join('');
};
