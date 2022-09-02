import isMinLengthValid from './isMinLengthValid';

describe('isMinLengthValid', () => {
  it('returns false length of number input exceeds minimum length', () => {
    // Arrange
    const numberInput = '1234';
    const minLength = 2;

    // Act
    const result = isMinLengthValid(numberInput, minLength);

    // Assert
    expect(result).toBeFalsy();
  });
});
