import isNotNumber from './isNotNumber';

describe('isNotNumber', () => {
  it('returns true if it is not a number', () => {
    // Arrange
    const num = 'isNotNumber';

    // Act
    const result = isNotNumber(num);

    // Assert
    expect(result).toBeTruthy();
  });
});
