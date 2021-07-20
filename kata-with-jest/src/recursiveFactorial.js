const givenNumbers = {};

export const recursiveFactorial = (number) => {
  if (hasBeenMemoized(number)) return givenNumbers[number];
  let result = 1, countdown = number;

  function recurse(countdown){
    if (countdown > 1) {
      result = result * countdown;
      countdown--;
      recurse(countdown);
    }
  }
  recurse(countdown);
  givenNumbers[number] = result;
  return result;
};

const hasBeenMemoized = (number) => {
  if (givenNumbers[number]) {
    console.log(`${givenNumbers[number]} has been memoized.`)
    return true;
  }
};
