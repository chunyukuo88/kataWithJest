import ipsBetween from "./ipAddresses";

describe('ipAddresses.js', ()=>{
    describe('ipsBetween()', ()=>{
        describe('WHEN: Given the "end" address has a value in its fourth quadrant, ', ()=>{
           test('THEN: It returns the difference between them.', ()=>{
                const start = '10.0.0.0';
                const end = '10.0.0.50';
                const result = ipsBetween(start, end);
                const expectedResult = 50;
                expect(result).toEqual(expectedResult);
           });
        });
        describe('WHEN: Given the "end" address has a value in its third quadrant, ', ()=>{
           test('THEN: It returns the difference between them.', ()=>{
                const start = '10.0.0.0';
                const end = '10.0.1.0';
                const result = ipsBetween(start, end);
                const expectedResult = 255;
                expect(result).toEqual(expectedResult);
           });
        });
        describe('WHEN: Given both addresses have non-zero values in their third and fourth quadrants, ', ()=>{
           test('THEN: It returns the difference between them.', ()=>{
                const start = '10.0.1.2'; // 258
                const end = '10.0.3.4'; // 771
                const result = ipsBetween(start, end);
                const expectedResult = 514;
                expect(result).toEqual(expectedResult);
           });
        });
        describe('WHEN: Given each address has values in all four quadrants, ', ()=>{
           test('THEN: It returns the difference between them.', ()=>{
                const start = '1.2.3.4'; //
                const end = '5.6.7.8'; //
                const result = ipsBetween(start, end);
                const expectedResult = 67372036;
                expect(result).toEqual(expectedResult);
           });
        });
    });
});
