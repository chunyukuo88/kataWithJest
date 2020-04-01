let arrayDiff = require('../src/arrayDiff');

describe('When one of the arrays is empty.', ()=>{
    describe('The first array is empty.', ()=>{
        it('returns an empty array.', ()=>{
            const A = [];
            const B = [1, 2, 3];
            output = arrayDiff(A, B);
            expectedResult = [];
            expect(output).toEqual(expectedResult);
        });
    });
    describe('The second array is empty.', ()=>{
        it('returns the first array.', ()=>{
            const A = [1, 2, 3];
            const B = [];
            output = arrayDiff(A, B);
            expectedResult = A;
            expect(output).toEqual(expectedResult);
        });
    });
});
describe('When neither array is empty.', ()=>{
    describe('It returns an array with the elements common to A and B removed.', ()=>{
        it('produces an array with only the unique value or values.', ()=>{
            const A = [3, 4];
            const B = [3];
            output = arrayDiff(A, B);
            expectedResult = [4];
            expect(output).toEqual(expectedResult);
        });
    });
});