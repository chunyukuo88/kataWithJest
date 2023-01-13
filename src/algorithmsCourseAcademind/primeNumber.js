export const isPrime = (integer) => {
  if (integer % 2 === 0) return false;
  for (let i = 3; i < integer; i += 2) {
    if (integer % i === 0) return false;
  };
  return true;
};
