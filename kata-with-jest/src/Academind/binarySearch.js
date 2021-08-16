let iteration = 0;
export const binarySearch = (array, targetNumber) => {
  iteration++;
  const middleIndex = Math.round(array.length / 2) - 1;
  if (array[middleIndex] === targetNumber) return middleIndex;
  const { firstHalf, secondHalf } = produceTwoHalves(array, middleIndex, targetNumber);
  if (targetNumber <= firstHalf[firstHalf.length - 1]) {
    binarySearch(firstHalf, targetNumber);
  } else {
    binarySearch(secondHalf, targetNumber);
  }
};

const produceTwoHalves = (array, middleIndex, targetNumber) => {
  if (array[middleIndex] === targetNumber) return middleIndex;
  const firstHalf = getFirstHalf(middleIndex, array);
  const secondHalf = getSecondHalf(middleIndex, array);
  return { firstHalf, secondHalf };
};

const getFirstHalf = (middleIndex, array) => {
  const firstHalf = [];
  for (let i = 0; i < middleIndex; i++) {
    firstHalf.push(array[i]);
  }
  return firstHalf;
};

const getSecondHalf = (middleIndex, array) => {
  const secondHalf = [];
  for (let i = middleIndex; i <= array[array.length - 1]; i++) {
    secondHalf.push(array[i]);
  }
  return secondHalf;
}
