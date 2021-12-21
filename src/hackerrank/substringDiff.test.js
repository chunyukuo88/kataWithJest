import { substringDiff } from './substringDiff';

describe('GIVEN: the array contains a string that is 1 char shorter than the searchTerm', ()=>{
  it('THEN: it returns that string in an array.', ()=>{
    const searchTerm = 'matt';
    const array = [ 'mat', 'a', 'b' ];
    const expectedResult = ['mat'];

    const result = substringDiff(searchTerm, array);

    expect(result).toEqual(expectedResult);
  });
});
describe('GIVEN: the array contains a string that is 1 char longer than the searchTerm', ()=>{
  it('THEN: it returns that string in an array.', ()=>{
    const searchTerm = 'matt';
    const array = [ 'matte', 'a', 'b' ];
    const expectedResult = ['matte'];

    const result = substringDiff(searchTerm, array);

    expect(result).toEqual(expectedResult);
  });
});
describe('GIVEN: the array contains a string equal in length to the searchTerm but with one different letter', ()=>{
  it('THEN: it returns that string in an array.', ()=>{
    const searchTerm = 'matt';
    const array = [ 'catte', 'z', 'catt', 'mat', 'bat', 'b' ];
    const expectedResult = ['catt', 'mat'];

    const result = substringDiff(searchTerm, array);

    expect(result).toEqual(expectedResult);
  });
});
