import { nameToAbbreviation } from './nameToAbbreviation';

describe.each([
  ['John Doe', 'JD'],
  ['John', 'J'],
  ['Doe', 'D'],
  ['John Doe Doe Cooper', 'JDD'],
  ['Alice Cooper', 'AC'],
  [' Alice  Cooper ', 'AC'],
  [' ', ''],
])('nameToAbbreviation', (fullName, abbreviation) => {
  it(`should return ${abbreviation}`, () => {
    //Act
    const result = nameToAbbreviation(fullName);

    // Assert
    expect(result).toBe(abbreviation);
  });
});
