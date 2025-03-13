import { YearRange } from '../DatePickerHeader';
import { getYearRange } from './getYearRange';

describe('getYearRange', () => {
  it('returns an array of years from (currentYear - yearsAgo) to (currentYear + yearsAhead)', () => {
    // Arrange
    const currentYear = new Date().getFullYear();
    const input: YearRange = { yearsAgo: 10, yearsAhead: 5 };

    // Act
    const years = getYearRange(input);

    // Assert
    expect(years[0]).toBe(currentYear - 10);
    expect(years[years.length - 1]).toBe(currentYear + 5);
    expect(years.length).toBe(10 + 5 + 1);
  });

  it('returns only the current year when yearsAgo and yearsAhead are 0', () => {
    // Arrange
    const currentYear = new Date().getFullYear();
    const input: YearRange = { yearsAgo: 0, yearsAhead: 0 };

    // Act
    const years = getYearRange(input);

    // Assert
    expect(years).toEqual([currentYear]);
  });
});
