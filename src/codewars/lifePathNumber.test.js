import lifePathNumber from './lifePathNumber';

describe('It returns a life path number for a date with a lot of zeroes', ()=>{
   test('1400-01-01 = 7', ()=>{
       const dateOfBirth = '1400-01-01';
       const result = lifePathNumber(dateOfBirth);
       const expectedResult = 7;
       expect(result).toEqual(expectedResult);
   });
});
describe('It returns a life path number for Albert Einstein\'s birthday', ()=>{
   test('1879-03-14 = 6', ()=>{
       const dateOfBirth = '1879-03-14';
       const result = lifePathNumber(dateOfBirth);
       const expectedResult = 6;
       expect(result).toEqual(expectedResult);
   });
});
describe('It returns a life path number for Ada Lovelace\'s birthday', ()=>{
    test('1815-12-10 = 1', ()=>{
        const dateOfBirth = '1815-12-10';
        const result = lifePathNumber(dateOfBirth);
        const expectedResult = 1;
        expect(result).toEqual(expectedResult);
    });
});
