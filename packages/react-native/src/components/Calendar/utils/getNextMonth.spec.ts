import { getNextMonth } from './getNextMonth';

describe.each([
  [new Date('2022-05-01T22:00:00.000Z'), 1, 5],
  [new Date('May 17, 1995 00:00:00'), 1, 5],
  [new Date(1995, 4, 17), 1, 5],
  [new Date(1995, 4, 17, 3, 24, 0), 1, 5],
  [new Date(628021800000), 1, 11],
])('getPreviousMonth', (date, numberOfMonths, expected) => {
  it(`should return ${expected}`, () => {
    //Act
    const previousMonth = getNextMonth(date, numberOfMonths);

    // Assert
    expect(previousMonth.getMonth()).toBe(expected);
  });
});
