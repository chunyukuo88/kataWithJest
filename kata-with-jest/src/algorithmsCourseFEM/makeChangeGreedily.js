/**
 Write a function, makeChange, that returns the least number of
 coins that add up to that amount. Coin values are 5, 10, 25.

 examples:

 input: 40, output: 3 (25, 10, 5)
 input: 35, output: 2 (25, 10)
 * */

export const makeChange = (valueOfChangeToBeMade) => {
  let remainingChange = valueOfChangeToBeMade;
  const coins = {
    5: 0,
    10: 0,
    25: 0
  };
  while (remainingChange >= 25) {
    coins[25]++;
    remainingChange -= 25;
  }
  while (remainingChange >= 10) {
    coins[10]++;
    remainingChange -= 10;
  }
  if (remainingChange === 5) coins[5]++;
  return coins[5] + coins[10] + coins[25];
};
