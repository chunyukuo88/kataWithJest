export const quickSort = (array) => {
  const copy = [...array];
  if (copy.length <= 1) return copy;

  const pivot = copy.shift();
  const smaller = [];
  const equal = [pivot];
  const larger = [];

  while(copy.length) {
    const currentNumber = copy.shift();
    if (currentNumber === pivot) {
        equal.push(currentNumber);
      } else if (currentNumber > pivot) {
        larger.push(currentNumber);
      } else {
        smaller.push(currentNumber);
      }
  }

  const sortedSmaller = quickSort(smaller);
  const sortedLarger = quickSort(larger);

  const combined = [sortedSmaller, equal, sortedLarger];

  return combined.flat();
}
