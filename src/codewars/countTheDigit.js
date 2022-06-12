export const nbDig = (n, d) => {
  const digit = d.toString();
  const squares = getSquares(n);
  return squares
    .filter(square => square.split('').includes(digit))
    .map(square => getDigitCount(square, digit))
    .reduce((previous, current) => previous + current, 0);
};

const getDigitCount = (squareNumber, digit) => {
  let digitCount = 0;
  squareNumber.split('').forEach(char => (char === digit && digitCount++));
  return digitCount;
};
const getSquares = (n) => {
  const squares = [];
  for (let i = 0; i < n+1; i++){
    squares.push(Math.pow(i, 2).toString());
  }
  return squares;
};
