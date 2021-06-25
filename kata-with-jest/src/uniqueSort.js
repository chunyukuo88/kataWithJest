export const uniqueSort = (arrayOfIntegers) => {
  const breadcrumbs = [];
  arrayOfIntegers.forEach(int => !breadcrumbs[int] && breadcrumbs.push(int));
  return breadcrumbs.sort((a, b) => a - b);
};

const times10 = (integer) => integer * 10;

const cache = {};

const memoTimes10 = (integer) => {
  if (!cache[integer]) {
    const result = times10(integer);
    cache[integer] = result;
    console.log(`${integer} times 10 = ${result}`);
    return;
  }
  console.log(`${integer} times 10 = ${cache[integer]}. This result has been retrieved from cache.`);
};

memoTimes10(10);
memoTimes10(9);
memoTimes10(10);
