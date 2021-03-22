/** Produces mockery text, the first letter capitalized.
// Example: 'BeN ShApiRo'S FaCtS & LoGiC'
// The letter 'i' is never capitalized unless it is the first letter.
*/

export default function convertToMockeryText(inputString) {
  const inputAsArrayOfWords = inputString.split(' ');
  const output = [];
  inputAsArrayOfWords.forEach(word => processIndividualWord(word, output));
  return output.join(' ');
};

const processIndividualWord = (word, output) => {
  const wordAsArray = capitalizeFirstLetterOfInput(word);
  const mockeryOutputAsArray = prepOutputAsArray(wordAsArray);
  capitalizeEveryOtherLetter(wordAsArray, mockeryOutputAsArray);
  const modifiedWord = mockeryOutputAsArray.join('');
  output.push(modifiedWord);
};

const prepOutputAsArray = (inputAsArray) => {
  const mockeryOutputAsArray = [];
  mockeryOutputAsArray.push(inputAsArray[0]);
  return mockeryOutputAsArray;
};

const capitalizeEveryOtherLetter = (wordAsArray, outputArray) => {
  for (let i = 1; i < wordAsArray.length; i++) {
    const currentLetter = wordAsArray[i];
    (currentLetter === 'i')
      ? outputArray.push(currentLetter)
      : processIfLetterI(wordAsArray, i, outputArray, currentLetter);
  }
};

const processIfLetterI = (wordAsArray, index, outputArray, currentLetter) => {
  const previousLetter = getPreviousLetter(outputArray, index);
  (previousLetter === previousLetter.toUpperCase())
    ? outputArray.push(currentLetter.toLowerCase())
    : outputArray.push(currentLetter.toUpperCase());
};

const getPreviousLetter = (outputArray, index) => {
  const previousCharacter = outputArray[index - 1];
  return (punctuationSymbols.includes(previousCharacter))
    ? outputArray[index - 2]
    : previousCharacter;
};

const capitalizeFirstLetterOfInput = (inputString) => {
  const inputAsArray = inputString.split('');
  inputAsArray.splice(0, 0, inputAsArray[0].toUpperCase());
  inputAsArray.splice(1, 1);
  return inputAsArray;
};

const punctuationSymbols = ['!', '@', '#', '$', '%', '^', '&', '*', ',', '.', '?', '"', '\''];
