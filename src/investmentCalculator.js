export const investmentCalculator = (startingValueUSD, interestRate) => {
  let balance = startingValueUSD;
  const processedRate = processInterestRate(interestRate);
  const tableRows = [];
  for (let q = 0; q < 4; q++) {
    if (q === 0) {
      tableRows.push([startingValueUSD, 0]);
    }
    balance *= processedRate;
    tableRows.push([Math.trunc(balance), q + 1]);
  }
  console.table(tableRows);
  return tableRows;
};

const processInterestRate = (interestRate) => (1 + (interestRate / 100));