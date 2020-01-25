const phoneNumber = require("../src/phoneNumber");

describe("Can convert ten digits into phone number format", () => {

    test("Inserts ten-digit array into static template", ()=> {
        const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
        const output= phoneNumber(input);
        const expectedResult = "(123) 456-7890";

        expect(output).toEqual(expectedResult);
    })

})

// Better solutions: https://www.codewars.com/kata/525f50e3b73515a6db000b83/solutions/javascript