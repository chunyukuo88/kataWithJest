/**
 * @param sudokuBoard: A 2D array of numbers.
 * @return {boolean} where true represents a valid solution.
 * */
export const determineValidity = (sudokuBoard) => {
  if (containsAZero(sudokuBoard) | hasReps(sudokuBoard)) return false;
  return true;
};

const hasReps = (sudokuBoard) => (hasRepsInRows(sudokuBoard) | hasRepsInCols(sudokuBoard));

const hasRepsInCols = (sudokuBoard) => {
  for (let i = 0; i < sudokuBoard.length - 1; i++){
    let columnValues = [];
    for (let j = 0; j < sudokuBoard.length; j++){
      if (columnValues.includes(sudokuBoard[j][i])) return true;
      columnValues.push(sudokuBoard[j][i]);
    };
  };
  return false;
};

// Determines if any of the rows has a repetition.
const hasRepsInRows = (sudokuBoard) => sudokuBoard.every(thereAreReps);

// Determines if a given row has repetitions.
const thereAreReps = (arrayOfNums) => {
  let values = [];
  for (let i = 0; i < arrayOfNums.length; i++){
    if (values.includes(arrayOfNums[i])) return true;
    values.push(arrayOfNums[i]);
  };
  return false;
};

const containsAZero = (sudokuBoard) => sudokuBoard.every(innerArrayContainsZero);

const innerArrayContainsZero = (innerArray) => innerArray.every(isNotZero);

const isNotZero = (arrayValue) => arrayValue !== 0;