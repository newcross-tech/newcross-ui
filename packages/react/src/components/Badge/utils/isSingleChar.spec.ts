import { isSingleChar } from './isSingleChar';

describe.each([
  ['?', true],
  ['1', true],
  ['1+', false],
  ['2+', false],
  [undefined, false],
])('isSingleChar', (input, output) => {
  it(`should return ${output}`, () => {
    //act
    const result = isSingleChar(input);

    //assert
    expect(result).toBe(output);
  });
});
