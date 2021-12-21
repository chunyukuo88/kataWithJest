import { quickSort } from './quickSort';

describe('quickSort()', ()=>{
  test('It sorts an array of numbers', ()=>{
    const array =  [ 2, 4, -1, 1, 30000, 0 ];
    const sorted = [ -1, 0, 1, 2, 4, 30000 ];

    const result = quickSort(array);
console.log(result);
    expect(result).toEqual(sorted);
  });
})
