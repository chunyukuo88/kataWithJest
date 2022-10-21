export function generateHashtag (str) {
  if (invalidLength(str)) return false;
  return `#${capitalizeFirstLetter(str)}`;
}

const capitalizeFirstLetter = (str) => {
  const firstLetter = str.charAt(0);
  const otherLetters = str.slice(1, str.length);
  return `${firstLetter.toUpperCase()}${otherLetters}`;
};

const invalidLength = (str) => (str.trim().length < 1 || str.length > 140);

export const errorMessages = {

};
