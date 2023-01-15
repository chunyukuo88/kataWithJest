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

export function bubbleSort(unsorted, lastSortable = unsorted.length - 1){
  let possiblySorted = [...unsorted];
  for (let i = 0; i < possiblySorted.length; i++) {
    if (possiblySorted[i] > possiblySorted[i+1]) {
      const a = possiblySorted[i];
      const b = possiblySorted[i+1];
      possiblySorted[i] = b;
      possiblySorted[i+1] = a;
    }
  }
  lastSortable--;
  return (isSorted(possiblySorted))
    ? possiblySorted
    : bubbleSort(possiblySorted, lastSortable);
}
