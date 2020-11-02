export function solution(input){
  const updatedArray = addSpaceToCharsInArray(input.split(''));
  return updatedArray.join('');
}

export function addSpaceIfUppercase(char){
  return (char === char.toUpperCase()) ? ' ' + char : char;
}

export function addSpaceToCharsInArray(arr){
  return arr.map(char => addSpaceIfUppercase(char));
}
