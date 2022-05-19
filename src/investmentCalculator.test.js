import { investmentCalculator } from './investmentCalculator';

describe('GIVEN: a starting value and an interest rate,', ()=>{
  test('THEN: it logs a table where each row contains number of years and balance.', ()=>{
    const spy = jest.spyOn(console, 'table');
    const startingValueUSD = 73_000;
    const interestRate = 2.7;
    const expectedResult = [
      [73000, 0],
      [74971, 1],
      [76995, 2],
      [79074, 3],
      [81209, 4],
    ];

    const result = investmentCalculator(startingValueUSD, interestRate);

    // expect(spy).toBeCalledWith(expectedResult);
    expect(result).toEqual(expectedResult);
  });
});