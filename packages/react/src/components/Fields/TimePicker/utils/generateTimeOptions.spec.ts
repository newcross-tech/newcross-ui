import { generateTimeOptions } from './generateTimeOptions';
import { format } from 'date-fns';

describe('generateTimeOptions', () => {
  it.each([
    [
      'should generate correct time options',
      {
        baseDate: new Date(2021, 0, 1, 10, 0), // Jan 1, 2021, 10:00
        offset: 0,
        step: 15,
        duration: 60,
      },
      [
        { value: new Date(2021, 0, 1, 10, 0), label: '10:00' },
        { value: new Date(2021, 0, 1, 10, 15), label: '10:15' },
        { value: new Date(2021, 0, 1, 10, 30), label: '10:30' },
        { value: new Date(2021, 0, 1, 10, 45), label: '10:45' },
        { value: new Date(2021, 0, 1, 11, 0), label: '11:00' },
      ],
    ],
    [
      'should generate correct time options with offset',
      {
        baseDate: new Date(2021, 0, 1, 10, 0), // Jan 1, 2021, 10:00
        offset: 60,
        step: 15,
        duration: 60,
      },
      [
        { value: new Date(2021, 0, 1, 11, 0), label: '11:00' },
        { value: new Date(2021, 0, 1, 11, 15), label: '11:15' },
        { value: new Date(2021, 0, 1, 11, 30), label: '11:30' },
        { value: new Date(2021, 0, 1, 11, 45), label: '11:45' },
        { value: new Date(2021, 0, 1, 12, 0), label: '12:00' },
      ],
    ],
    [
      'should label next day options correctly',
      {
        baseDate: new Date(2021, 0, 1, 23, 45), // Jan 1, 2021, 23:45
        offset: 0,
        step: 15,
        duration: 30,
      },
      [
        { value: new Date(2021, 0, 1, 23, 45), label: '23:45' },
        { value: new Date(2021, 0, 2, 0, 0), label: '00:00 (Next Day)' },
        { value: new Date(2021, 0, 2, 0, 15), label: '00:15 (Next Day)' },
      ],
    ],
    [
      'should label previous day options correctly',
      {
        baseDate: new Date(2021, 0, 2, 0, 15), // Jan 2, 2021, 00:15
        offset: -30, // Starts at Jan 1, 2021, 23:45
        step: 15,
        duration: 30,
      },
      [
        { value: new Date(2021, 0, 1, 23, 45), label: '23:45 (Previous Day)' },
        { value: new Date(2021, 0, 2, 0, 0), label: '00:00' },
        { value: new Date(2021, 0, 2, 0, 15), label: '00:15' },
      ],
    ],
  ])('%s', (_, params, expected) => {
    const options = generateTimeOptions(params);
    // Convert Date values to formatted strings for comparison.
    const formattedOptions = options.map((o) => ({
      value: format(o.value, 'HH:mm'),
      label: o.label,
    }));
    const formattedExpected = expected.map((o) => ({
      value: format(o.value, 'HH:mm'),
      label: o.label,
    }));
    expect(formattedOptions).toEqual(formattedExpected);
  });
});
