// const forEmptyString = require("../src/isograms");

// describe("Determines if a word is an isogram",  ()=> {

//     test("Should account for empty string", () => {
//         const input = "";
//         expect(forEmptyString(input)).toEqual(true);
//     })
// })

// const sortChars = require("../src/isograms");

// describe("Can sort characters of a string", () => {

//     test("Can sort the chars of a string", () => {
//         const input = "abcdefgaabb";
//         expect(sortChars(input)).toEqual("aaabbbcdefg");
//     })
// })

const isIsogram = require("../src/isograms");

describe("Can tell you if the word is an isogram or not", () => {

    test("Returns true if it is an isogram, false if otherwise", ()=> {
        const input = "abcdefga";
        
        expect(isIsogram(input)).toEqual(false);
    })

})