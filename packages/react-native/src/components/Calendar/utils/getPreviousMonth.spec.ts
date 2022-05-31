import { getPreviousMonth } from './getPreviousMonth';

describe.each([
  [new Date('2022-11-30T22:00:00.000Z'), 1, 9],
  [new Date('May 17, 1995 00:00:00'), 1, 3],
  [new Date(1995, 4, 17), 1, 3],
  [new Date(1995, 4, 17, 3, 24, 0), 1, 3],
  [new Date(628021800000), 1, 9],
])('getPreviousMonth', (date, numberOfMonths, expected) => {
  it(`should return ${expected}`, () => {
    //Act
    const previousMonth = getPreviousMonth(date, numberOfMonths);

    // Assert
    expect(previousMonth.getMonth()).toBe(expected);
  });
});
