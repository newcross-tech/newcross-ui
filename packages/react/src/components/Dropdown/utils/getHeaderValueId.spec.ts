import { getHeaderValueId } from './getHeaderValueId';

describe.each([
  [{ value: undefined }, `dropdown-placeholder`],
  [{ value: 'Option 1' }, `dropdown-value`],
  [{ value: [] }, `dropdown-multi-value`],
  [{ value: ['Option 1'] }, `dropdown-multi-pill-value`],
])('getHeaderValueId', ({ value }, headerId) => {
  it(`should return ${headerId}`, () => {
    //Act
    const result = getHeaderValueId(value);

    // Assert
    expect(result).toBe(headerId);
  });
});
