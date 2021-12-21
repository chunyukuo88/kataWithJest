import { fibonacci } from './fibonacci';

describe('GIVEN: An index represented by a countingNumber greater than 1', ()=>{
  it('THEN: It returns the value at that index of the series', ()=>{
    const result = fibonacci(2);

    expect(result).toEqual(2);
  });
  it('THEN: It does the same when given 4', ()=>{
    const result = fibonacci(4);

    expect(result).toEqual(5);
  });
  it('THEN: It does the same when given 5', ()=>{
    const result = fibonacci(5);

    expect(result).toEqual(8);
  });
});
