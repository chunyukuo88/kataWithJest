//Source
//https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript

export function toCamelCase(str){
  if (str.length === 0)
    return '';
  const arr = produceStringArray(str);
  const capitalizedArray = capitalizeFirstLetters(arr);
  let mergedWords = mergeCapitalizedWords(capitalizedArray);
  if (str.charAt(0) === str.charAt(0).toUpperCase())
    return mergedWords;
  const result = mergedWords.replace(mergedWords.charAt(0), mergedWords.charAt(0).toLowerCase());
  return result;
};

export function produceStringArray(input){
  return (input.includes('_'))
    ? input.split('_')
    : input.split('-');
};

export function capitalizeFirstLetters(arr){
  const updatedArray = [];
  arr.forEach(word => {
    const elementAsArray = word.split('');
    elementAsArray[0] = elementAsArray[0].toUpperCase();
    const capitalizedWord = elementAsArray.join('');
    updatedArray.push(capitalizedWord);
  });
  return updatedArray;
};

export function mergeCapitalizedWords(arr){
  const updatedArray = [];
  arr.forEach(word =>{
    updatedArray.push(word);
  });
  return updatedArray.join('');
};
