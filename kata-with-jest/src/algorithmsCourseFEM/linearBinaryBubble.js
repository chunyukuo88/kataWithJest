const { log } = console;

export const linearSearch = (list, number) => {
  let result = -1;
  for (let i = 0; i < list.length; i++) {
    if (list[i] === number) {
      result = i;
      break;
    }
  };
  return result;
};

export const bubbleSort = (list) => {
  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list.length; j++) {
      if (list[j] > list[j + 1]) {
        const temp = list[j];
        list[j] = list[j+1];
        list[j + 1] = temp;
      }
    };
  };
  log(list)
  return list;
};

export const mergeSort = (list) => {

};
