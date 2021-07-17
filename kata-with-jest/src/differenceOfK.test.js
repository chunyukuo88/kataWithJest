import { listPairsOfDeltaK, errorMessage } from './differenceOfK';

describe('differenceOfK.js', ()=>{
  describe('listPairsOfDeltaK()', ()=>{
    describe('GIVEN: Valid inputs', ()=>{
      describe('WHEN: The array is 4 consecutive integers and k = 1', ()=>{
        it('THEN: It lists 3 pairs.', ()=>{
          const arrayOfIntegers = [ 0, 1, 2, 3 ];
          const k = 1;
          const expectedResult = [[0, 1], [1, 2], [2, 3]];

          const result = listPairsOfDeltaK(arrayOfIntegers, k);

          expect(result).toEqual(expectedResult);
        });
      });
      describe('WHEN: The array is 5 non-consecutive integers and k = 1', ()=>{
        it('THEN: It lists 4 pairs.', ()=>{
          const arrayOfIntegers = [ 1, 3, 2, 0, 4 ];
          const k = 1;
          const expectedResult = [[0, 1], [1, 2], [2, 3], [3, 4]];

          const result = listPairsOfDeltaK(arrayOfIntegers, k);

          expect(result).toEqual(expectedResult);
        });
      });
      describe('WHEN: The array is 4 non-consecutive integers and k = 2', ()=>{
        it('THEN: It lists 1 pair.', ()=>{
          const arrayOfIntegers = [ 1000, 0, 20, 1, 18 ];
          const k = 2;
          const expectedResult = [[18, 20]];

          const result = listPairsOfDeltaK(arrayOfIntegers, k);

          expect(result).toEqual(expectedResult);
        });
      });
    });

    describe('GIVEN: Invalid inputs', ()=>{
      describe('WHEN: The array is empty', ()=>{
        it('THEN: It returns the error string.', ()=>{
          const arrayOfIntegers = [];
          const k = 1;
          const expectedResult = errorMessage;

          const result = listPairsOfDeltaK(arrayOfIntegers, k);

          expect(result).toEqual(expectedResult);
        });
      });
      describe('WHEN: The array has only one number', ()=>{
        it('THEN: It returns the error string.', ()=>{
          const arrayOfIntegers = [1];
          const k = 1;
          const expectedResult = errorMessage;

          const result = listPairsOfDeltaK(arrayOfIntegers, k);

          expect(result).toEqual(expectedResult);
        });
      });
      describe('WHEN: The k input is not given', ()=>{
        it('THEN: It returns the error string.', ()=>{
          const arrayOfIntegers = [0, 1, 2, 3, 4];
          const expectedResult = errorMessage;

          const result = listPairsOfDeltaK(arrayOfIntegers);

          expect(result).toEqual(expectedResult);
        });
      });
      describe('WHEN: The k input is not a number', ()=>{
        it('THEN: It returns the error string.', ()=>{
          const arrayOfIntegers = [0, 1, 2, 3, 4];
          const k = '1';
          const expectedResult = errorMessage;

          const result = listPairsOfDeltaK(arrayOfIntegers, k);

          expect(result).toEqual(expectedResult);
        });
      });
    });
  });
});
