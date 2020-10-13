import { moveToBackOfLine, drinkDoubleCola, whoIsNext } from './doubleCola';

//Source:
//https://www.codewars.com/kata/551dd1f424b7a4cdae0001f0/train/javascript

describe('moveToBackOfLine()', ()=> {
  test('It lops off the first element in the array', ()=> {
    const arr = ['a', 'b', 'c', 'd'];
    const result = moveToBackOfLine(arr);
    expect(result[0]).toEqual('b');
  })
  test('and it adds that first element to the end of the array', ()=> {
    const arr = ['a', 'b', 'c', 'd'];
    const result = moveToBackOfLine(arr);
    const firstElement = result[0];
    const finalElement = result[arr.length - 1];
    expect(firstElement).toEqual('b');
    expect(finalElement).toEqual('a');
  });
});
describe('drinkDoubleCola()', ()=> {
  describe('WHEN: Given an integer n,', ()=>{
    test('THEN: It runs the moveToBackOfLine helper function n times.', ()=>{
      const arr = ['a', 'b', 'c', 'd'];
      const int = 3;
      const result = drinkDoubleCola(arr, int);
      const firstElement = result[0];
      expect(firstElement).toEqual('d');
    });
  });
});

describe('whoIsNext()', ()=> {
  describe('WHEN: Given an array and the integer n,', ()=>{
    test('THEN: It tells who drank the last can', ()=>{
      const arr = ['a', 'b', 'c', 'd'];
      const int = 3;
      const result = whoIsNext(arr, int);
      expect(result).toEqual('c');
    });
  });
});

