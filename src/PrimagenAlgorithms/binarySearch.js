const { log } = console;

export function binarySearch(sortedArray, low, high, target){
  let index = -1;
  const min = low ? low : 0;
  const max = high ? high : sortedArray.length;

  const middleIndex = Math.ceil(min + ((min + max)/ 2));


}
