export function solution(input){
  const inputAsArray = splitStringIntoArray(input);
  const updatedArray = addSpaceToCharsInArray(inputAsArray);
  return updatedArray.join('');
}

export function splitStringIntoArray(string){
  return string.split('');
}

export function addSpaceIfUppercase(char){
  return (char === char.toUpperCase()) ? ' ' + char : char;
}

export function addSpaceToCharsInArray(arr){
  const result = [];
  arr.forEach(char => {
    const updatedChar = addSpaceIfUppercase(char);
    result.push(updatedChar);
  });
  return result;
}
