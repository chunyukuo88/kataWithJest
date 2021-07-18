export const doublerArray = (arrayOfIntegers) => {
  const resultsFromDouble = {}

  return () => {
    arrayOfIntegers.map(x=>{
      resultsFromDouble[x] = x*2
      x*2
    });
  }
};

// Faster way than looping to achieve the result?
// input: [ 2, 2, 1, 2, 24,4,4,32,3]
