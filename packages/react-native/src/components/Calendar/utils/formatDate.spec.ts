import { formatDate } from './formatDate';

describe.each([
  [new Date('2022-05-27T10:29:55.495Z'), '2022-05-27'],
  [new Date('December 17, 1995 03:24:00'), '1995-12-17'],
  [new Date(1995, 11, 17), '1995-12-17'],
  [new Date(1995, 11, 17, 3, 24, 0), '1995-12-17'],
  [new Date(628021800000), '1989-11-25'],
])('formatDate', (date, expected) => {
  it(`should return ${expected}`, () => {
    //Act
    const formattedDate = formatDate(date);

    // Assert
    expect(formattedDate).toBe(expected);
  });
});
