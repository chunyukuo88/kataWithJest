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
      //
    });
  });
  describe('WHEN: The current month is December', () => {
    it('THEN: It returns dates for January and February.', () => {
      //
    });
  });
});