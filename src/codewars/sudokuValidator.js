/**
 * @param sudokuBoard: A 2D array of numbers.
 * @return {boolean} where true represents a valid solution.
 * */

export const determineValidity = (sudokuBoard) => {
  if (
      containsAZero(sudokuBoard)
    | hasRepsInRows(sudokuBoard)
    | hasRepsInCols(sudokuBoard)
  ) return false;
};

const hasRepsInCols = (sudokuBoard) => {
  let hasReps = false;
  for (let i = 0; i < sudokuBoard.length - 1; i++){
    let columnValues = [];
    for (let j = 0; j < sudokuBoard.length; j++){
      if (columnValues.includes(sudokuBoard[j][i])) {
        return true;
      } else {
        columnValues.push(sudokuBoard[j][i]);
      }
    };
  };
  return hasReps;
};

const hasRepsInRows = (sudokuBoard) => {
  let hasReps = false;
  for (let i = 0; i < sudokuBoard.length - 1; i++){
    const row = sudokuBoard[i];
    if (thereAreReps(row)) {
      hasReps = true;
      break;
    }
  }
  return hasReps;
};

const thereAreReps = (arrayOfNums) => {
  let hasReps = false;
  let values = [];
  for (let i = 0; i < arrayOfNums.length; i++){
    if (values.includes(arrayOfNums[i])) {
      hasReps = true;
      break;
    } else {
      values.push(arrayOfNums[i]);
    }
  };
  return hasReps;
};

const containsAZero = (sudokuBoard) => {
  let hasAZero = false;
  for (let i = 0; i < sudokuBoard.length - 1; i++) {
    if (innerArrayContainsZero(sudokuBoard[i])) {
      hasAZero = true;
      break;
    }
  }
  return hasAZero;
};

const innerArrayContainsZero = (innerArray) => {
  let containsZero = false;
  for (let i = 0; i < innerArray.length - 1; i++){
    if (!isNotZero(innerArray[i])) {
      containsZero = true;
      break;
    }
  };
  return containsZero;
}

const isNotZero = (arrayValue) => arrayValue !== 0;

// TODO: Explore the Array.prototype.every() function.