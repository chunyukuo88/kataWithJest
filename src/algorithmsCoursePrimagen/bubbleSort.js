export function bubbleSort(unsorted){
  let lastSortable = unsorted.length - 1;
  let sorted = [...unsorted];
  for (let i = 0; i < lastSortable; i++) {
    if (sorted[i] > sorted[i+1]) {
      const a = sorted[i];
      const b = sorted[i+1];
      sorted[i] = b;
      sorted[i+1] = a;
    }
  }
  console.log('sorted: ', sorted);
  lastSortable--;
  return sorted;
}
