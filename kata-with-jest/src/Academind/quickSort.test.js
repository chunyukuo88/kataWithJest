import { quickSort } from './quickSort';

describe('quickSort()', ()=>{
  test('It sorts an array of numbers', ()=>{
    const array =  [ 15, 3, 5, 4, 6, 6, -10, 1, 99 ];
    const sorted = [ -10, 1, 15, 3, 4, 5, 6, 6, 99 ];

    const result = quickSort(array);
console.log(result);
    expect(result).toEqual(sorted);
  });
})
