export const stringReverser = (singleWord) => {
  if (!singleWord || typeof singleWord !== 'string') return errorMessage;
  const singleWordAsArray = singleWord.split('');
  return reverseValidWordArray(singleWordAsArray);
};

const reverseValidWordArray = (singleWordAsArray) => {
  const result = [];
  for (let i = singleWordAsArray.length - 1; i > - 1; i--) {
    result.push(singleWordAsArray[i]);
  };
  return result.join('');
};

export const errorMessage = 'Invalid input. Please enter a string';
