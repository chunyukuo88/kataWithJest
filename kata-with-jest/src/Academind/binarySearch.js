export const binarySearch = (array, targetNumber) => {
  let startIndex = 0;
  let endIndex = array.length - 1;
  const middleIndex = Math.floor((endIndex - startIndex) / 2);

  if (array[middleIndex] === targetNumber) return middleIndex;

  if (array[middleIndex] < targetNumber) {
    startIndex = middleIndex + 1;
  } else {
    endIndex = middleIndex;
  }
  return binarySearch(array.slice(startIndex, endIndex + 1), targetNumber);
};

// [ 5, 6, 7, 8, 9 ];
