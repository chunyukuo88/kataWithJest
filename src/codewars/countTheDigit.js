export const nbDig = (n, d) => {
  const squares = [];
  for (let i = 0; i < n+1; i++){
    squares.push(Math.pow(i, 2).toString());
  }
  const result = squares.filter(square => {
    const asArray = square.split('');
    return asArray.includes(d.toString());
  })
  .map(square => {
    let numberOfTargetDigit = 0;
    square.split('').forEach(char => (char === d.toString() && numberOfTargetDigit++));
    return numberOfTargetDigit; 
  })
  .reduce((previous, current) => previous + current, 0);
  return result;
};
