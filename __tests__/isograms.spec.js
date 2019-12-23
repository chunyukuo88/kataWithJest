const forEmptyString = require("../src/isograms");

describe("Determines if a word is an isogram",  ()=> {

    test("Should account for empty string", () => {
        const input = "";
        expect(forEmptyString(input)).toEqual(true);
    })
})