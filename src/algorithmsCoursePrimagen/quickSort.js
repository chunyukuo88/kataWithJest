function swapPositions(first, last, arr) {
  const updated = [...arr];
  updated[0] = last;
  updated[updated.length - 1] = first;
  return updated;
}

function swapAdjacentNumbers(arr) {
  const updated = [];
  updated[0] = arr[1];
  updated[1] = arr[0];
  return updated;
}

function processSmallArr(arr) {
  if (arr.length <= 1) return arr;
  return (arr[0] > arr[1])
    ? swapAdjacentNumbers(arr)
    : arr;
}

export function quickSort(arrayOfInts) {
  if (arrayOfInts.length <= 2) {
    return processSmallArr(arrayOfInts);
  }
  const pivotIndex = Math.floor(arrayOfInts.length / 2);
  let updated = [...arrayOfInts];
  let walkRight = 0;
  let walkLeft = updated.length - 1;
  let first = updated[walkRight];
  let middle = updated[pivotIndex];
  let last = updated[walkLeft];
  while (first !== middle && last !== middle) {
    if (first > middle && last < middle) {
      updated = swapPositions(first, last, updated)
      walkRight++;
      walkLeft--;
      first = updated[walkRight];
      last = updated[walkLeft];
    } else if (first > middle && !(last < middle)) {
      walkLeft--;
      last = updated[walkLeft];
    } else if (!(first > middle) && last < middle) {
      walkRight++;
      first = updated[walkRight];
    } else {
      walkRight++;
      walkLeft--;
      first = updated[walkRight];
      last = updated[walkLeft];
    }
  }
  const firstHalf = updated.slice(0, pivotIndex);
  const secondHalf = updated.slice(pivotIndex, updated.length);
  const firstSorted = quickSort(firstHalf);
  const secondSorted = quickSort(secondHalf);
  return firstSorted.concat(secondSorted);
}
