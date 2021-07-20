import { recursiveFactorial } from './recursiveFactorial';

describe('recursiveFactorial()', ()=>{
  it('It produces the factorial of a given integer', ()=>{
    const number = 9;
    const expectedResult = 362_880;

    const result = recursiveFactorial(number);

    expect(result).toEqual(expectedResult);
  });
  it('It produces the factorial of a given integer via memoization', ()=>{
    const spy = jest.spyOn(console, 'log');
    const number = 9;
    const expectedResult = 362880;

    recursiveFactorial(number);
    const result = recursiveFactorial(number);

    expect(result).toEqual(expectedResult);
    expect(spy).toHaveBeenCalled();
  });
});
