function isSorted(array) {
  let sorted = true;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i+1]) {
      sorted = false;
      break;
    }
  }
  return sorted;
}

function updateWithSwappedValues(array, index) {
  const [a, b] = [ array[index], array[index+1] ];
  array[index] = b;
  array[index+1] = a;
  return array;
}

export function bubbleSort(unsorted, lastSortable = unsorted.length - 1){
  if (isSorted(unsorted)) return unsorted;
  let possiblySorted = [...unsorted];
  for (let i = 0; i < possiblySorted.length; i++) {
    if (possiblySorted[i] > possiblySorted[i+1]) {
      possiblySorted = updateWithSwappedValues(possiblySorted, i);
    }
  }
  lastSortable--;
  return (isSorted(possiblySorted))
    ? possiblySorted
    : bubbleSort(possiblySorted, lastSortable);
}
