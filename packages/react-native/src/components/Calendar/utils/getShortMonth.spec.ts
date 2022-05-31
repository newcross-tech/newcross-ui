import { getShortMonth } from './getShortMonth';

describe.each([
  [new Date('2022-03-30T22:00:00.000Z'), 'Mar'],
  [new Date('May 17, 1995 00:00:00'), 'May'],
  [new Date(1995, 4, 17), 'May'],
  [new Date(1995, 4, 17, 3, 24, 0), 'May'],
  [new Date(628021800000), 'Nov'],
])('getNextMonth', (date, expected) => {
  it(`should return ${expected}`, () => {
    //Act
    const shortMonth = getShortMonth(date);

    // Assert
    expect(shortMonth).toBe(expected);
  });
});
