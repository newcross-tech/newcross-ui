import { parseTimeInput } from './parseTimeInput';

describe('parseTimeInput', () => {
  // General test cases using it.each for a variety of inputs.
  it.each([
    ["should parse '730' as '07:3'", '730', '07:3'],
    ["should parse '0730' as '07:30'", '0730', '07:30'],
    ["should parse '07 30' as '07:30'", '07 30', '07:30'],
    ["should parse '7 30' as '07:30'", '7 30', '07:30'],
    ["should parse '7:30' as '07:30'", '7:30', '07:30'],
    ["should parse '07:30' as '07:30'", '07:30', '07:30'],
    ["should parse '7pm' as '19:'", '7pm', '19:'],
    ["should parse '7am' as '07:'", '7am', '07:'],
    ["should parse '12pm' as '12:'", '12pm', '12:'],
    ["should parse '12am' as '00:'", '12am', '00:'],
    ["should format '2 1' as '02:1'", '2 1', '02:1'],
    ["should format '2.1' as '02:1'", '2.1', '02:1'],
    ["should handle single-digit hour '1' as '1'", '1', '1'],
    [
      "should handle a single-digit input '7' without period as '07:'",
      '7',
      '07:',
    ],
    ["should handle '53' as '05:3'", '53', '05:3'],
    ["should handle '93' as '09:3'", '93', '09:3'],
    ["should handle three-digit input '123' as '12:3'", '123', '12:3'],
    ["should handle four-digit input '1234' as '12:34'", '1234', '12:34'],
    ["should return empty string for ':30'", ':30', ''],
    ["should return empty string for ''", '', ''],
    ["should return empty string for '  '", '  ', ''],
    ["should return empty string for '  :  '", '  :  ', ''],
    ["should return empty string for ':'", ':', ''],
    ["should return empty string for 'abcd'", 'abcd', ''],
    ["should handle '0' as '0'", '0', '0'],
    ["should handle '21' as '21:'", '21', '21:'],
    ["should handle '5:' as '05:'", '5:', '05:'],
    [
      "should handle input with multiple separators '  2::1' as '02:1'",
      '  2::1',
      '02:1',
    ],
    ["should handle input '2  ' (with trailing spaces) as '02:'", '2  ', '02:'],
    ["should force single-digit hour for '75' as '07:5'", '75', '07:5'],
    ["should truncate '12345' to '12:34'", '12345', '12:34'],
  ])('%s', (_, input, expected) => {
    // Act: Call parseTimeInput with the test input.
    const result = parseTimeInput(input);
    // Assert: Verify the result matches the expected output.
    expect(result).toBe(expected);
  });
});
