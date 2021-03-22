// Produces mockery text, the first letter capitalized.
// Example: 'BeN ShApiRo'S FaCtS & LoGiC'
// The letters L and I are never capitalized unless they are the first letter.

export default function convertToMockeryText(inputString) {
  const inputAsArrayOfWords = inputString.split(' ');
  const output = [];
  inputAsArrayOfWords.forEach(word => processIndividualWord(word, output));
  return output.join(' ');
};

const processIndividualWord = (word, output) => {
  const inputAsArray = capitalizeFirstLetterOfInput(word);
  const mockeryOutputAsArray = prepOutputAsArray(inputAsArray);
  capitalizeEveryOtherLetter(inputAsArray, mockeryOutputAsArray);
  const modifiedWord = mockeryOutputAsArray.join('');
  output.push(modifiedWord);
};

const prepOutputAsArray = (inputAsArray) => {
  const mockeryOutputAsArray = [];
  mockeryOutputAsArray.push(inputAsArray[0]);
  return mockeryOutputAsArray;
};

const capitalizeEveryOtherLetter = (inputAsArray, mockeryOutputAsArray) => {
  for (let i = 1; i < inputAsArray.length; i++) {
    const previousLetter = mockeryOutputAsArray[i - 1];
    if (previousLetter !== previousLetter.toUpperCase()) {
      mockeryOutputAsArray.push(inputAsArray[i].toUpperCase());
    }
    if (previousLetter === previousLetter.toUpperCase()) {
      mockeryOutputAsArray.push(inputAsArray[i].toLowerCase());
    }
  }
};

const capitalizeFirstLetterOfInput = (inputString) => {
  const inputAsArray = inputString.split('');
  inputAsArray.splice(0, 0, inputAsArray[0].toUpperCase());
  inputAsArray.splice(1, 1);
  return inputAsArray;
};
