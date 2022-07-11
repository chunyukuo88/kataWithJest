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

  let lexicalMonthCurrent = months[currentMonth + 1];
  let lexicalMonthNext = months[currentMonth + 2];

  if (currentMonth === 10) {
    lexicalMonthCurrent = months[11];
    lexicalMonthNext = months[0]
    return [
      {
        month: lexicalMonthCurrent,
        requestedDays: 3,
        year: date.getFullYear(),
        days: [
          {
            day: 1,
            month: lexicalMonthCurrent,
            year: date.getFullYear(),
            time: '10:00AM',
            status: 'Requested',
          },
          {
            day: 2,
            month: lexicalMonthCurrent,
            year: date.getFullYear(),
            time: '10:00AM',
            status: 'Requested',
          },
          {
            day: 3,
            month: lexicalMonthCurrent,
            year: date.getFullYear(),
            time: '10:00AM',
            status: 'Requested',
          },
        ],
      },
      {
        month: lexicalMonthNext,
        requestedDays: 3,
        year: date.getFullYear() + 1,
        days: [
          {
            day: 1,
            month: lexicalMonthNext,
            year: date.getFullYear() + 1,
            time: '10:00AM',
            status: 'Requested',
          },
          {
            day: 2,
            month: lexicalMonthNext,
            year: date.getFullYear() + 1,
            time: '10:00AM',
            status: 'Requested',

          },
          {
            day: 3,
            year: date.getFullYear() + 1,
            month: lexicalMonthNext,
            time: '10:00AM',
            status: 'Requested',
          },
        ],
      },
    ];
  }
  if (currentMonth === 11) {
    lexicalMonthCurrent = months[0];
    lexicalMonthNext = months[1]
    return [
      {
        month: lexicalMonthCurrent,
        requestedDays: 3,
        year: date.getFullYear() + 1,
        days: [
          {
            day: 1,
            month: lexicalMonthCurrent,
            year: date.getFullYear() + 1,
            time: '10:00AM',
            status: 'Requested',
          },
          {
            day: 2,
            month: lexicalMonthCurrent,
            year: date.getFullYear() + 1,
            time: '10:00AM',
            status: 'Requested',
          },
          {
            day: 3,
            month: lexicalMonthCurrent,
            year: date.getFullYear() + 1,
            time: '10:00AM',
            status: 'Requested',
          },
        ],
      },
      {
        month: lexicalMonthNext,
        requestedDays: 3,
        year: date.getFullYear() + 1,
        days: [
          {
            day: 1,
            month: lexicalMonthNext,
            year: date.getFullYear() + 1,
            time: '10:00AM',
            status: 'Requested',
          },
          {
            day: 2,
            month: lexicalMonthNext,
            year: date.getFullYear() + 1,
            time: '10:00AM',
            status: 'Requested',

          },
          {
            day: 3,
            year: date.getFullYear() + 1,
            month: lexicalMonthNext,
            time: '10:00AM',
            status: 'Requested',
          },
        ],
      },
    ];
  }
  return [
    {
      month: lexicalMonthCurrent,
      requestedDays: 3,
      year: date.getFullYear(),
      days: [
        {
          day: 1,
          month: lexicalMonthCurrent,
          year: date.getFullYear(),
          time: '10:00AM',
          status: 'Requested',
        },
        {
          day: 2,
          month: lexicalMonthCurrent,
          year: date.getFullYear(),
          time: '10:00AM',
          status: 'Requested',
        },
        {
          day: 3,
          month: lexicalMonthCurrent,
          year: date.getFullYear(),
          time: '10:00AM',
          status: 'Requested',
        },
      ],
    },
    {
      month: lexicalMonthNext,
      requestedDays: 3,
      year: date.getFullYear(),
      days: [
        {
          day: 1,
          month: lexicalMonthNext,
          year: date.getFullYear(),
          time: '10:00AM',
          status: 'Requested',
        },
        {
          day: 2,
          month: lexicalMonthNext,
          year: date.getFullYear(),
          time: '10:00AM',
          status: 'Requested',

        },
        {
          day: 3,
          year: date.getFullYear(),
          month: lexicalMonthNext,
          time: '10:00AM',
          status: 'Requested',
        },
      ],
    },
  ];
};