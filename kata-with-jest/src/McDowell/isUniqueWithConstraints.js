/**
 * Implement an algorithm to determine if a string has all unique characters.
 * What if you cannot use additional data structures?
 * McDowell page 90
 * */

export const isUnique = (str) => {
  const strAsArray = str.split('');
  const uniqueChars = [];
  for (let i = 0; i < strAsArray.length; i++) {
    const char = strAsArray[i];
    if (uniqueChars.includes(char)) {
      return false;
    } else {
      uniqueChars.push(char);
    }
  }
  return true;
};

// No additional data structures
export const isUniqueHardMode = (str) => {
  let result = true;
  const sortedString = str.split('').sort();
  for (let i = 0; i < sortedString.length; i++) {
    if (sortedString[i] === sortedString[i + 1]) {
      result = false;
      break;
    }
  }
  return result;
};
