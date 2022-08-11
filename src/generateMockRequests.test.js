import { generateMockRequests } from './generateMockRequests';

beforeEach(() => {
  jest.useFakeTimers();
});
afterEach(() => {
  jest.useRealTimers();
});

describe('GIVEN: ', () => {
  describe('WHEN: The current month is between Jan ~ October', () => {
    it('THEN: It returns an array of requested dates for the current and next month.', () => {
      jest.setSystemTime(1647266400000); // === '2022-03-20', 10:00 a.m.
      const expectedResult = [
        {
          month: 'April',
          requestedDays: 3,
          year: 2022,
          days: [
            {
              day: 1,
              month: 'April',
              year: 2022,
              time: '10:00AM',
              status: 'Requested',
            },
            {
              day: 2,
              month: 'April',
              year: 2022,
              time: '10:00AM',
              status: 'Requested',
            },
            {
              day: 3,
              month: 'April',
              year: 2022,
              time: '10:00AM',
              status: 'Requested',
            },
          ],
        },
        {
          month: 'May',
          requestedDays: 3,
          year: 2022,
          days: [
            {
              day: 1,
              month: 'May',
              year: 2022,
              time: '10:00AM',
              status: 'Requested',
            },
            {
              day: 2,
              month: 'May',
              year: 2022,
              time: '10:00AM',
              status: 'Requested',
            },
            {
              day: 3,
              month: 'May',
              year: 2022,
              time: '10:00AM',
              status: 'Requested',
            },
          ],
        },
      ];

      const result = generateMockRequests();

      expect(result).toEqual(expectedResult);
    });
  });
  describe('WHEN: The current month is November', () => {
    it('THEN: It returns dates for December and January.', () => {
      jest.setSystemTime(1668351600000); // === '2022-11-13', 10:00 a.m.
      const expectedResult = [
        {
          month: 'December',
          requestedDays: 3,
          year: 2022,
          days: [
            {
              day: 1,
              month: 'December',
              year: 2022,
              time: '10:00AM',
              status: 'Requested',
            },
            {
              day: 2,
              month: 'December',
              year: 2022,
              time: '10:00AM',
              status: 'Requested',
            },
            {
              day: 3,
              month: 'December',
              year: 2022,
              time: '10:00AM',
              status: 'Requested',
            },
          ],
        },
        {
          month: 'January',
          requestedDays: 3,
          year: 2023,
          days: [
            {
              day: 1,
              month: 'January',
              year: 2023,
              time: '10:00AM',
              status: 'Requested',
            },
            {
              day: 2,
              month: 'January',
              year: 2023,
              time: '10:00AM',
              status: 'Requested',
            },
            {
              day: 3,
              month: 'January',
              year: 2023,
              time: '10:00AM',
              status: 'Requested',
            },
          ],
        },
      ];

      const result = generateMockRequests();

      expect(result).toEqual(expectedResult);
    });
  });
  describe('WHEN: The current month is December', () => {
    it('THEN: It returns dates for January and February.', () => {
      jest.setSystemTime(1671980400000); // === '2022-12-25', 10:00 a.m.
      const expectedResult = [
        {
          month: 'January',
          requestedDays: 3,
          year: 2023,
          days: [
            {
              day: 1,
              month: 'January',
              year: 2023,
              time: '10:00AM',
              status: 'Requested',
            },
            {
              day: 2,
              month: 'January',
              year: 2023,
              time: '10:00AM',
              status: 'Requested',
            },
            {
              day: 3,
              month: 'January',
              year: 2023,
              time: '10:00AM',
              status: 'Requested',
            },
          ],
        },
        {
          month: 'February',
          requestedDays: 3,
          year: 2023,
          days: [
            {
              day: 1,
              month: 'February',
              year: 2023,
              time: '10:00AM',
              status: 'Requested',
            },
            {
              day: 2,
              month: 'February',
              year: 2023,
              time: '10:00AM',
              status: 'Requested',
            },
            {
              day: 3,
              month: 'February',
              year: 2023,
              time: '10:00AM',
              status: 'Requested',
            },
          ],
        },
      ];

      const result = generateMockRequests();

      expect(result).toEqual(expectedResult);
    });
  });
});
