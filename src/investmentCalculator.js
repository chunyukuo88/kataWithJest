export const investmentCalculator = (startingValueUSD, interestRate, annualContribution) => {
  const processedRate = processInterestRate(interestRate);
  return (!annualContribution) 
    ? processWithoutAnnualContribution(startingValueUSD, processedRate)
    : processWithAnnualContribution(startingValueUSD, processedRate, annualContribution);
};

const processWithAnnualContribution = (startingValueUSD, processedRate, annualContribution) => {
  let balance = startingValueUSD;
  const tableRows = [];
  for (let q = 0; q < 4; q++) {
    if (q === 0) {
      tableRows.push([startingValueUSD, 0]);
    }
    balance *= processedRate;
    balance += annualContribution;
    tableRows.push([Math.trunc(balance), q + 1]);
  }
  console.table(tableRows);
  return tableRows;
};

const processWithoutAnnualContribution = (startingValueUSD, processedRate) => {
  let balance = startingValueUSD;
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
}

const processInterestRate = (interestRate) => (1 + (interestRate / 100));