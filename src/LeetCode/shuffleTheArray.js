/**
 * Sauce: https://leetcode.com/problems/shuffle-the-array/
 * */
export function shuffleTheArray(arrayOfNumbers, n){
  const firstHalf = arrayOfNumbers.slice(0, n);
  const secondHalf = arrayOfNumbers.slice(n);

  const result = [];

  for (let i = 0; i < arrayOfNumbers.length; i++) {
    const toAppend = (i % 2 === 0)
      ? firstHalf.shift()
      : secondHalf.shift();
    result.push(toAppend);
  }
  return result;
}
