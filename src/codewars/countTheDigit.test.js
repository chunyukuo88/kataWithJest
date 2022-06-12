import { nbDig } from './countTheDigit';

describe('nbDig(n, d)', ()=>{
  test('it returns the number of digits present in the total squares in the range.', ()=>{
    const result = nbDig(10, 1);
    
    const expectedResult = 4;

    expect(result).toEqual(expectedResult);   
  });
});
