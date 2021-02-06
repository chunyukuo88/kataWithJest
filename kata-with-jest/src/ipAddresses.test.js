import ipsBetween from "./ipAddresses";

describe('ipAddresses.js', ()=>{
    describe('ipsBetween()', ()=>{
        describe('WHEN: Given the "end" address has a value in its fourth quadrant, ', ()=>{
           test('THEN: It returns the difference between them.', ()=>{
                const start = '0.0.0.0';
                const end = '0.0.0.10';
                const result = ipsBetween(start, end);
                const expectedResult = 10;
                expect(result).toEqual(expectedResult);
           });
        });
        describe('WHEN: Given the "end" address has a value in its third quadrant, ', ()=>{
           test('THEN: It returns the difference between them.', ()=>{
                const start = '0.0.0.0';
                const end = '0.0.1.0';
                const result = ipsBetween(start, end);
                const expectedResult = 256;
                expect(result).toEqual(expectedResult);
           });
        });
        describe('WHEN: Given the "end" address has a value in its second quadrant, ', ()=>{
           test('THEN: It returns the difference between them.', ()=>{
                const start = '0.0.0.0';
                const end = '0.2.0.0';
                const result = ipsBetween(start, end);
                const expectedResult = 131071; // i.e. (2 * (256 squared)) - 1.
                expect(result).toEqual(expectedResult);
           });
        });
        describe('WHEN: Given the "end" address has a value in its first quadrant, ', ()=>{
           test('THEN: It returns the difference between them.', ()=>{
                const start = '0.0.0.0';
                const end = '3.0.0.0';
                const result = ipsBetween(start, end);
                const expectedResult = 50331647; // i.e. [3 * (256 cubed)] - 1.
                expect(result).toEqual(expectedResult);
           });
        });
        describe('WHEN: Given both addresses have non-zero values in their third and fourth quadrants, ', ()=>{
           test('THEN: It returns the difference between them.', ()=>{
                const start = '10.0.1.2';
                const end = '10.0.3.4';
                const result = ipsBetween(start, end);
                const expectedResult = 513;
                expect(result).toEqual(expectedResult);
           });
        });
        describe('WHEN: Given each address has values in all four quadrants, ', ()=>{
           test('THEN: It returns the difference between them.', ()=>{
                const start = '1.2.3.4';
                const end = '5.6.7.8';
                const result = ipsBetween(start, end);
                const expectedResult = 67372036;
                expect(result).toEqual(expectedResult);
           });
        });
        describe('WHEN: Inputs from an example from test suite on Codewars, ', ()=>{
           test('THEN: It returns the difference between them.', ()=>{
                const start = '20.0.0.10';
                const end = '20.0.1.0';
                const result = ipsBetween(start, end);
                const expectedResult = 246;
                expect(result).toEqual(expectedResult);
           });
        });
    });
});
