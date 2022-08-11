import { sortByDate } from "./sortByDate";

const arrayOfDayObjects = [
  {
    id: 4,
      date: '3/3/2022',
  },
  {
    id: 1,
    date: '2/2/2022',
  },
  {
    id: 2,
    date: '1/1/2022',
  },
  {
    id: 3,
    date: '4/4/2022',
  },

];

it('sorts by date', ()=>{
  const expectedResult = [
    {
      id: 2,
      date: '1/1/2022',
    },
    {
      id: 1,
      date: '2/2/2022',
    },
    {
      id: 4,
      date: '3/3/2022',
    },
    {
      id: 3,
      date: '4/4/2022',
    },
  ];

  const result = sortByDate(arrayOfDayObjects);

  expect(result).toEqual(expectedResult);
});