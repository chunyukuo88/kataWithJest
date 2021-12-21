/**
 * Source
 * https://www.codewars.com/kata/529bf0e9bdf7657179000008
 * */
import { determineValidity } from './sudokuValidator';

const validSolution = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
];
const invalidFromRepetitionInCol = [
  [5, 3, 4, 6, 7, 8, 9, 2, 1],
  [6, 7, 2, 9, 5, 3, 4, 8, 1],
  [9, 8, 3, 4, 2, 5, 6, 7, 1],
  [8, 5, 9, 7, 6, 4, 2, 3, 1],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 3, 9, 2, 4, 8, 5, 6, 1],
  [9, 6, 5, 3, 7, 2, 8, 4, 1],
  [2, 8, 7, 4, 9, 6, 3, 5, 1],
  [3, 4, 5, 2, 8, 6, 7, 9, 1],
];
const invalidSolutionWithZeroes = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 0, 3, 4, 8],
  [1, 0, 0, 3, 4, 2, 5, 6, 0],
  [8, 5, 9, 7, 6, 1, 0, 2, 0],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 0, 1, 5, 3, 7, 2, 1, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 0, 0, 4, 8, 1, 1, 7, 9]
];
const invalidFromRepetitionInRow = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 3, 3, 4, 8],
  [1, 3, 3, 3, 4, 2, 5, 6, 3],
  [8, 5, 9, 7, 6, 1, 2, 2, 2],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 2, 1, 5, 3, 7, 2, 1, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 2, 2, 4, 8, 1, 1, 7, 9]
];

describe('determineValidity()', ()=>{
  describe('GIVEN: An invalid solution', ()=>{
    describe('WHEN: A solution with zeroes somewhere on the board', ()=>{
      it('THEN: It returns false.', ()=>{
        const result = determineValidity(invalidSolutionWithZeroes);

        expect(result).toEqual(false);
      });
    });
    describe('WHEN: A solution is invalid due to repetitions in at least one row', ()=>{
      it('THEN: It returns false.', ()=>{
        const result = determineValidity(invalidFromRepetitionInRow);

        expect(result).toEqual(false);
      });
    });
    describe('WHEN: A solution is invalid due to repetitions in at least one column', ()=>{
      it('THEN: It returns false.', ()=>{
        const result = determineValidity(invalidFromRepetitionInCol);

        expect(result).toEqual(false);
      });
    });
  });
  describe('GIVEN: A valid solution', ()=>{
    describe('WHEN: A solution with NO zeroes somewhere on the board', ()=>{
      it('THEN: It returns false.', ()=>{
        const result = determineValidity(validSolution);

        expect(result).toEqual(true);
      });
    });
  });
});