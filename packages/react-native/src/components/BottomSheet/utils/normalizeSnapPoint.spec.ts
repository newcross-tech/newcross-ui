import { SnapPointPayload } from '../BottomSheet.types';
import { normalizeSnapPoint } from './normalizeSnapPoint';

describe.each([
  [50, 10, 100, 50],
  ['50%', 10, 200, 110],
])('normalizeSnapPoint', (snapPoint, top, windowHeight, expected) => {
  it(`should return ${expected}`, () => {
    //Act
    const result = normalizeSnapPoint({
      snapPoint,
      top,
      windowHeight,
    } as SnapPointPayload);

    // Assert
    expect(result).toBe(expected);
  });
});
