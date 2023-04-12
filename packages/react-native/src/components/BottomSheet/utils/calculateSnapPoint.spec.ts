import { SnapPointPayload } from '../BottomSheet.types';
import { calculateSnapPoint } from './calculateSnapPoint';

describe.each([
  [10, 12, 200, 70, 70],
  [10, 12, 200, 400, 32],
])(
  'calculateSnapPoint',
  (bottom, top, windowHeight, contentHeight, expected) => {
    it(`should return ${expected}`, () => {
      //Act
      const result = calculateSnapPoint({
        bottom,
        top,
        windowHeight,
        contentHeight,
      } as SnapPointPayload);

      // Assert
      expect(result).toBe(expected);
    });
  }
);
