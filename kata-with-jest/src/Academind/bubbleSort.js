/**
 Academind's bubble sort algorithm is slightly different from Bianca Gandolfo's. Hence its presence here.
 FEM's algorithm compares immediately adjacent pairs over and over again, like this:
 compares numbers[0] and numbers[1], then numbers[1] and numbers[2], then numbers[2] and numbers[3], ...

 This one compares thusly:
 compares numbers[0] to numbers[1], then to numbers[2], then to numbers[3], then to numbers[4], ...
 compares numbers[1] to numbers[2], then to numbers[3], then to numbers[4], then to numbers[5], ...
 * */
import _ from 'lodash';

let start = 0;

export const bubbleSort = (array) => {
  const result = _.cloneDeep(array);

  if (start === (array.length - 1)) {
    return result;
  }

  for (let i = start + 1; i < array.length; i++) {
    if (array[start] > array[i]) {
      result[start] = array[i];
      result[i] = array[start];
    }
  }
  start++;
  return bubbleSort(result);
};

