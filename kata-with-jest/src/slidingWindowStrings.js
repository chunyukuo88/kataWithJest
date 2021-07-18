/**
 * Given a smaller string s and a bigger string b, design an algorithm
 * to find all permutations of the shorter string within the longer one.
 * Print the location of each permutation.
 * Source: Page 70 of Laakmann McDowell
 * */

export const findPermutations = (smallString, bigString) => {
  const smallStringAsArray = smallString.split(''), bigStringAsArray = bigString.split('');
  const sLength = smallStringAsArray.length, bLength = bigStringAsArray.length;
  const sortedSmallString = sortString(smallString);

  const permutations = [];
  const indexes = [];
  for (let i = 0; i < (bLength - sLength); i++) {
    const window = bigString.slice(i, sLength + i);
    const sortedWindow = sortString(window);
    if (sortedSmallString === sortedWindow) {
      permutations.push(window);
      indexes.push(i);
    }
  }
  return { permutations, indexes};
};

const sortString = (inputString) => {
  const inputAsArray = inputString.split('');
  return inputAsArray.sort().join('');
};
