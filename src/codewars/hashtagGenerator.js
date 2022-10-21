// https://www.codewars.com/kata/52449b062fb80683ec000024/train/javascript

export function generateHashtag (str) {
  if (invalidLength(str)) return false;
  return (isSingleWord(str))
    ? `#${capitalizeFirstLetter(str)}`
    : processMultipleWords(str);
}

const isSingleWord = (str) => str.split(' ').length === 1;

const processMultipleWords = (str) => {
  const arr = str.split(' ');
  const capitalized = arr.map(word => capitalizeFirstLetter(word));
  return `#${capitalized.join('')}`;
};

const capitalizeFirstLetter = (str) => {
  const firstLetter = str.charAt(0);
  const otherLetters = str.slice(1, str.length);
  return `${firstLetter.toUpperCase()}${otherLetters}`;
};

const invalidLength = (str) => (str.trim().length < 1 || str.length > 140);
