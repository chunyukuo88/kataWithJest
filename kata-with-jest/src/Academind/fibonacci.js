/**
 1. Write an algorithm that calculates the fibonacci up to the element n that we are looking for.
 2. Return that element.
 * */

export const fibonacci = (countingNumber) => {
  const seed = [1, 1];
  while ((seed.length - 1) < countingNumber) {
    const lastIndex = seed.length - 1;
    const penultimateIndex = seed.length - 2;
    const nextNumber = seed[lastIndex] + seed[penultimateIndex];
    seed.push(nextNumber);
  }
  return seed[countingNumber];
};
