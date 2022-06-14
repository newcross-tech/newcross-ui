import { normalizeContentHeightToDimensions } from './normalizeContentHeightToDimensions';
import { DEFAULT_MAX_HEIGHT } from '../BottomSheet.constants';

describe.each([
  [500, 62],
  [1100, DEFAULT_MAX_HEIGHT],
])('normalizeContentHeightToDimensions', (contentHeight, expected) => {
  it(`should return ${expected}`, () => {
    //Act
    const result = normalizeContentHeightToDimensions(contentHeight);

    // Assert
    expect(result).toBe(expected);
  });
});
