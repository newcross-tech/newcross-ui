import { normalizeSnapPoint } from './normalizeSnapPoint';

describe.each([
  [50, 50],
  ['50%', 667],
])('normalizeSnapPoint', (snapPoint, expected) => {
  it(`should return ${expected}`, () => {
    //Act
    const result = normalizeSnapPoint(snapPoint);

    // Assert
    expect(result).toBe(expected);
  });
});
