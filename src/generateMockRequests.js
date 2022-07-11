const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const generateMockRequests = () => {
  const date = new Date();
  const currentMonth = date.getMonth();

  if (currentMonth <= 9) {
    const lexicalMonthCurrent = months[currentMonth + 1];
    const lexicalMonthNext = months[currentMonth + 2];
    return [
      {
        month: lexicalMonthCurrent,
        requestedDays: 3,
        year: 2022,
        days: [
          {
            day: 1,
            month: lexicalMonthCurrent,
            year: 2022,
            time: '10:00AM',
            status: 'Requested',
          },
          {
            day: 2,
            month: lexicalMonthCurrent,
            year: 2022,
            time: '10:00AM',
            status: 'Requested',
          },
          {
            day: 3,
            month: lexicalMonthCurrent,
            year: 2022,
            time: '10:00AM',
            status: 'Requested',
          },
        ],
      },
      {
        month: lexicalMonthNext,
        requestedDays: 3,
        year: 2022,
        days: [
          {
            day: 1,
            month: lexicalMonthNext,
            year: 2022,
            time: '10:00AM',
            status: 'Requested',
          },
          {
            day: 2,
            month: lexicalMonthNext,
            year: 2022,
            time: '10:00AM',
            status: 'Requested',

          },
          {
            day: 3,
            year: 2022,
            month: lexicalMonthNext,
            time: '10:00AM',
            status: 'Requested',
          },
        ],
      },
    ];
  }

};