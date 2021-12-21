const cache = {};

export const recursiveFactorial = (number) => {
  if (hasBeenMemoized(number)) return cache[number];
  let result = 1;

  function recurse(countdown){
    if (countdown > 1) {
      result = result * countdown;
      recurse(countdown - 1);
    }
  }
  recurse(number);
  cache[number] = result;
  return result;
};

const hasBeenMemoized = (number) => {
  if (cache[number]) {
    console.log(`${cache[number]} has been memoized.`)
    return true;
  }
};
