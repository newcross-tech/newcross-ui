// getMonthRange.test.ts
import { getMonthRange } from './getMonthRange';

describe('getMonthRange', () => {
  it('returns an array of 12 month names when given the full range (0 to 11)', () => {
    // Arrange
    const startMonth = 0;
    const endMonth = 11;

    // Act
    const months = getMonthRange({ startMonth, endMonth });

    // Assert
    expect(months).toHaveLength(12);
    expect(months[0]).toBe('January');
    expect(months[11]).toBe('December');
  });

  it('returns the correct month names for a partial range', () => {
    // Arrange
    const startMonth = 2; // March
    const endMonth = 5; // June

    // Act
    const months = getMonthRange({ startMonth, endMonth });

    // Assert
    expect(months).toEqual(['March', 'April', 'May', 'June']);
  });
});
