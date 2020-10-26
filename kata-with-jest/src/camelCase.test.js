import * as camelCase from './camelCase';

describe('toCamelCase()', ()=>{
  describe('WHEN: Given a string where words are separated by hyphens', ()=>{
    test('THEN: It returns a string in camel case.', ()=>{
      const inputString = 'one-two-three';
      const expectedResult = 'oneTwoThree';
      const result = camelCase.toCamelCase(inputString);
      expect(result).toEqual(expectedResult);
    });
  });
});

describe('toCamelCase()', ()=>{
  describe('WHEN: Given an empty string,', ()=>{
        test('THEN: It returns an empty string.', ()=>{
          const expectedResult = '';
          const result = camelCase.toCamelCase('');
          expect(result).toEqual(expectedResult);
    });
  });
});

describe('convertToArray()', ()=>{
  describe('WHEN: Given a string where words are separated by hyphens', ()=>{
    test('THEN: It produces an array of those words', ()=>{
      const inputString = 'one-two-three';
      const expectedResult = ['one', 'two', 'three'];
      const result = camelCase.produceStringArray(inputString);
      expect(result).toEqual(expectedResult);
    });
  });
  describe('WHEN: Given a string where words are separated by underscores', ()=>{
    test('THEN: It produces an array of those words', ()=>{
      const inputString = 'one_two_three';
      const expectedResult = ['one', 'two', 'three'];
      const result = camelCase.produceStringArray(inputString);
      expect(result).toEqual(expectedResult);
    });
  });
});

describe('capitalizeFirstLetterOfElements()', ()=>{
  describe('WHEN: Given an array of strings,', ()=>{
    test('THEN: Capitalize the first letter of each string.', ()=>{
      const arr = ['one', 'two', 'three'];
      const expectedResult = ['One', 'Two', 'Three'];
      const result = camelCase.capitalizeFirstLetters(arr);
      expect(result).toEqual(expectedResult);
    });
  });
});

describe('mergeCapitalizedWords()', ()=>{
  describe('WHEN: Given an array of capitalized words,', ()=>{
    test('THEN: It merges them into a single string.', ()=>{
      const arr = ['one', 'Two', 'Three'];
      const expectedResult = 'oneTwoThree';
      const result = camelCase.mergeCapitalizedWords(arr);
      expect(result).toEqual(expectedResult);
    });
  });
});
