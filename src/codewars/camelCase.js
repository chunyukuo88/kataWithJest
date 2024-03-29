//Source
//https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript

export function toCamelCase(str){
  if (str.length === 0)
    return '';
  const arr = produceStringArray(str);
  const capitalizedArray = capitalizeWordsInArray(arr);
  let mergedWords = capitalizedArray.join('');
  return resultBasedOnFirstChar(str, mergedWords);
};

export function resultBasedOnFirstChar(originalString, updatedString){
  return (originalString.charAt(0) === originalString.charAt(0).toUpperCase())
    ? updatedString
    : updatedString.replace(updatedString.charAt(0), updatedString.charAt(0).toLowerCase());
}

export function produceStringArray(input){
  return (input.includes('_')) ? input.split('_') : input.split('-');
};

export function capitalizeWordsInArray(arr){
  return arr.map(word => capitalizeIndividualWord(word));
};

export function capitalizeIndividualWord(word){
  const firstLetter = word[0];
  const restOfTheWord = word.slice(1);
  return firstLetter.toUpperCase() + restOfTheWord;
}



