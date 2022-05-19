import { investmentCalculator } from './investmentCalculator';

const spy = jest.spyOn(console, 'table');
const startingValueUSD = 73_000;
const interestRate = 2.7;

describe('GIVEN: investmentCalculator()', ()=>{
  describe('WHEN: a starting value and an interest rate,', ()=>{
    test('THEN: it logs a table where each row contains number of years and balance.', ()=>{
      const expectedResult = [
        [73_000, 0],
        [74_971, 1],
        [76_995, 2],
        [79_074, 3],
        [81_209, 4],
      ];

      const result = investmentCalculator(startingValueUSD, interestRate);

      expect(result).toEqual(expectedResult);
      expect(spy).toBeCalledWith(expectedResult);
    });
  });
  describe('WHEN: a starting value, an interest rate, and an amount contributed annually,', ()=>{
    test('THEN: it logs a table where each row contains number of years and balance.', ()=>{
      const annualContribution = 48_000;
      const expectedResult = [
        [73_000, 0],
        [122_971, 1],
        [174_291, 2],
        [226_997, 3],
        [281_126, 4],
      ];

      const result = investmentCalculator(startingValueUSD, interestRate, annualContribution);

      expect(result).toEqual(expectedResult);
      expect(spy).toBeCalledWith(expectedResult);
    });
  });
});
