export const sortByDate = (arrayOfDayObjects) => {
  return arrayOfDayObjects.sort((firstDay, secondDay) => {
    const day1 = new Date(firstDay.date).getTime();
    const day2 = new Date(secondDay.date).getTime();
    const evaluation = day1 > day2;
    return (evaluation) ? 1 : -1;
  });
};
