import { getAdjustedHaloValue } from './getAdjustedHaloValue';

describe.each([
  [{ value: '16rem', multiplier: 10 }, '160rem'],
  [{ value: undefined, multiplier: 10 }, 'NaN'],
])('getAdjustedHaloValue', ({ value, multiplier }, output) => {
  it(`should return ${output}`, () => {
    //Act
    const result = getAdjustedHaloValue(multiplier, value);

    // Assert
    expect(result).toBe(output);
  });
});
