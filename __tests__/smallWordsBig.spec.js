const empowerLittles = require("../src/smallWordsBig");

describe("Capitalize short words, remove vowels from long words", () => {

    test("Can return words of three characters or less", ()=>{
        const input = ["abs apples hog arm people"];
        const output = empowerLittles(input);
        const expectedResult = ["ABS ppls HOG ARM ppl"]
        expect(output).toEqual(expectedResult);
    })
})