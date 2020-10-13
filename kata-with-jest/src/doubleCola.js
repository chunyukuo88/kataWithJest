//Source:
//https://www.codewars.com/kata/551dd1f424b7a4cdae0001f0/train/javascript

/**
 * For Codewars, remove the export from each function
 * */

export function whoIsNext(names, r) {
  const updatedArray = drinkDoubleCola(names, r);
  const result = updatedArray[updatedArray.length - 1];
  return result;
}

export function drinkDoubleCola(arr, int) {
  const result = arr;
  for (let i = 0; i < int; i++) {
    moveToBackOfLine(result);
  }
  return result;
}

export function moveToBackOfLine(array) {
  const firstInLine = array[0];
  array.splice(0, 1);
  array.push(firstInLine);
  array.push(firstInLine);
  return array;
}
