import createDateRange from './createDateRange';

describe('createDateRange', () => {
  it('creates missing dates when start and end dates are of same month', () => {
    // Arrange
    const multipleDates = ['2022-01-01', '2022-01-05'];

    // Act
    const result = createDateRange(multipleDates);

    // Assert
    expect(result).toEqual([
      '2022-01-01',
      '2022-01-02',
      '2022-01-03',
      '2022-01-04',
      '2022-01-05',
    ]);
  });

  it('creates missing dates when start and end dates are of different month', () => {
    // Arrange
    const multipleDates = ['2022-12-27', '2023-01-02'];

    // Act
    const result = createDateRange(multipleDates);

    // Assert
    expect(result).toEqual([
      '2022-12-27',
      '2022-12-28',
      '2022-12-29',
      '2022-12-30',
      '2022-12-31',
      '2023-01-01',
      '2023-01-02',
    ]);
  });

  it('creates missing dates when datesToExclude is within start and end date', () => {
    // Arrange
    const multipleDates = ['2022-12-27', '2023-01-02'];
    const datesToExclude = ['2022-12-29', '2023-01-01'];

    // Act
    const result = createDateRange(multipleDates, datesToExclude);

    // Assert
    expect(result).toEqual([
      '2022-12-27',
      '2022-12-28',
      '2022-12-30',
      '2022-12-31',
      '2023-01-02',
    ]);
  });

  it('creates missing dates when datesToExclude is within and outside start and end date', () => {
    // Arrange
    const multipleDates = ['2022-12-27', '2023-01-02'];
    const datesToExclude = ['2022-12-21', '2022-12-28', '2023-01-02'];

    // Act
    const result = createDateRange(multipleDates, datesToExclude);

    // Assert
    expect(result).toEqual([
      '2022-12-27',
      '2022-12-29',
      '2022-12-30',
      '2022-12-31',
      '2023-01-01',
    ]);
  });
});
