export const checkPermutation = (oneString, theOther) => {
  const oneStringSorted = oneString.split('').sort().join('');
  const theOtherSorted = theOther.split('').sort().join('');
  return (oneStringSorted === theOtherSorted);
};
