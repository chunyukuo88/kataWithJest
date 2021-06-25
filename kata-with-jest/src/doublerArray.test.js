import { doublerArray } from './doublerArray';

it('doubles each number in the array', ()=>{
  const arr = [ 1, 2, 3 ];
  const expectedResult = [ 2, 4, 6 ];
  const result = doublerArray(arr);
  expect(result).toEqual(expectedResult);
});
