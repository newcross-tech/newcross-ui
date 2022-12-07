import { getHaloValue } from './getHaloValue';

describe.each([
  ['16rem', 16],
  [undefined, 'NaN'],
])('getHaloValue', (value, output) => {
  it(`should return ${output}`, () => {
    //Act
    const result = getHaloValue(value);

    // Assert
    expect(result).toBe(output);
  });
});
