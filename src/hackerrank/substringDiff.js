export const substringDiff = (searchTerm, array) => {
  const result = [];
  array.forEach(word => {
    if (lengthDiffersByOne(searchTerm, word)) result.push(word);
    if (equalLengthDifferByOne(searchTerm, word)) result.push(word);
  });
  return result;
};

const equalLengthDifferByOne = (searchTerm, word) => {
  if (searchTerm.length !== word.length) return false;
  const lettersNotShared = [];
  for (let i = 0; i < word.length; i++) {
    if (searchTerm[i] !== word[i]) lettersNotShared.push(word[i]);
    else break;
  }
  return (lettersNotShared.length === 1);
};

const lengthDiffersByOne = (searchTerm, word) => {
  const shorterThanSearchTerm = searchTerm.slice(0, searchTerm.length - 1);
  const longerThanSearchTerm = word.slice(0, word.length - 1);
  return (shorterThanSearchTerm === word || longerThanSearchTerm === searchTerm);
};
