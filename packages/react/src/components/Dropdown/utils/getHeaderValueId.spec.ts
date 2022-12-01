import { baseTestId } from '../Dropdown';
import { getHeaderValueId } from './getHeaderValueId';

describe.each([
  [{ value: undefined }, `${baseTestId}-placeholder`],
  [{ value: 'Option 1' }, `${baseTestId}-value`],
  [{ value: [] }, `${baseTestId}-multi-value`],
  [{ value: ['Option 1'] }, `${baseTestId}-multi-pill-value`],
])('getHeaderValueId', ({ value }, headerId) => {
  it(`should return ${headerId}`, () => {
    //Act
    const result = getHeaderValueId(value);

    // Assert
    expect(result).toBe(headerId);
  });
});
