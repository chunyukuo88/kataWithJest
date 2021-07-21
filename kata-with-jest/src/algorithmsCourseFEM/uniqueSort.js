export const uniqueSort = (arrayOfIntegers) => {
  const cache = {};
  return arrayOfIntegers.map(int => {
    if (!(int in cache)) {
      cache[int] = true;
      return int;
    }
  }).sort();
};

