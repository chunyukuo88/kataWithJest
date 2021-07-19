/**
 Write a recursive function that inserts a given character after every member of an array of strings.
 * */

export function joinElements(array, joinString) {

  function recurse(index, resultsSoFar) {
    resultsSoFar += array[index];
    if(index === array.length - 1)
      return resultsSoFar;
    else
      return recurse(index + 1, resultsSoFar + joinString);
  }
  return recurse(0, '') + joinString;
}

/**
 Rewrite the joinElements function so that it uses a loop rather than recursion.
 * */

//This is the target function:
export function joinElementsIteratively(array, joinString) {
  return array.map(string => string + joinString).join('');
}
