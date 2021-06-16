export const uniqueSort = (arrayOfIntegers) => {
  const breadcrumbs = [];

  arrayOfIntegers.forEach(int => !breadcrumbs[int] && breadcrumbs.push(int));
  return breadcrumbs.sort((a, b) => a - b);
};
