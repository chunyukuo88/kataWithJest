export const isPowerOfTwo = (number) => {
  if (inputIsInvalid(number)) return false;
  let numberIsPowerOfTwo = true;
  while (number > 1) {
    if (number % 2 === 0) {
      number /= 2;
    } else {
      numberIsPowerOfTwo = false;
      break;
    }
  }
  return numberIsPowerOfTwo;
};

const inputIsInvalid = (input) => (input < 1 || typeof input !== 'number');

/**
 Best case: Complexity equals O(6) if number is odd.
 Average case: Complexity equals O(log n) for huge numbers like 1,000,000,000,000,001.
 Worst case: Complexity equals O(log2(n)) otherwise.
 * */
